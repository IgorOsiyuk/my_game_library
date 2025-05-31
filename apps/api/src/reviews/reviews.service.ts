import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { ObjectStorageService } from '../object-storage/object-storage.service';

import { CreateReviewDto } from './dto';
import { ReviewStatus } from './entities/review-status.enum';
import { Review } from './entities/review.entity';

/**
 * Сервис для управления отзывами пользователей об играх
 * @service ReviewsService
 *
 * Предоставляет бизнес-логику для:
 * - Создания новых отзывов
 * - Загрузки изображений через ObjectStorageService
 * - Получения отзывов пользователя
 * - Преобразования данных между DTO и сущностями
 * - Управления избранными отзывами
 */
@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    private objectStorageService: ObjectStorageService,
  ) {}

  /**
   * Получает отзывы пользователя с возможностью фильтрации по статусу
   * @param userId - ID пользователя
   * @param status - Статус отзыва для фильтрации (опционально)
   * @returns Promise<Review[]> Массив отзывов пользователя
   */
  async findAll(userId: string, status?: ReviewStatus, isFavorite?: boolean) {
    return this.reviewRepository.find({
      where: {
        user: { id: userId },
        ...(status && { status }),
        ...(isFavorite && { isFavorite }),
      },
    });
  }

  /**
   * Создает новый отзыв и загружает изображение если оно предоставлено
   * @param userId - ID пользователя, создающего отзыв
   * @param createReviewDto - Данные для создания отзыва
   * @param img - Файл изображения (опционально)
   * @returns Promise<string> URL загруженного изображения
   *
   * Процесс:
   * 1. Загружает изображение если оно предоставлено
   * 2. Преобразует строковые значения в числовые для оценок
   * 3. Создает и сохраняет отзыв в базе данных
   */
  async create(userId: string, createReviewDto: CreateReviewDto, img: Express.Multer.File) {
    let imgUrl: string | undefined;

    if (createReviewDto.imgUrl) {
      imgUrl = createReviewDto.imgUrl;
    } else {
      const fileName = `${uuidv4()}-${img.originalname}`;
      const uploadResult = await this.objectStorageService.upload(fileName, img.buffer);
      imgUrl = uploadResult.url;
    }

    const review = this.reviewRepository.create({
      ...createReviewDto,
      artScore: Number(createReviewDto.artScore),
      gameplayScore: Number(createReviewDto.gameplayScore),
      plotScore: Number(createReviewDto.plotScore),
      rating: Number(createReviewDto.rating),
      score: Number(createReviewDto.score),
      trophies: Number(createReviewDto.trophies),
      img: imgUrl,
      user: { id: userId },
    });

    return this.reviewRepository.save(review);
  }

  /**
   * Переключает статус избранного для отзыва
   * @param reviewId - ID отзыва
   * @param userId - ID пользователя, которому принадлежит отзыв
   * @returns Promise<Review> Обновленный отзыв
   */
  async toggleFavorite(reviewId: string, userId: string) {
    console.log('toggleFavorite', reviewId, userId);
    const review = await this.reviewRepository.findOne({
      where: {
        id: reviewId,
        user: { id: userId },
      },
    });

    if (!review) {
      throw new NotFoundException('Отзыв не найден');
    }

    review.isFavorite = !review.isFavorite;
    await this.reviewRepository.save(review);
    const message = review.isFavorite
      ? 'Вы успешно добавили отзыв в избранное'
      : 'Вы успешно удалили отзыв из избранного';
    return {
      message: message,
    };
  }

  /**
   * Получает статистику по отзывам пользователя
   * @param userId - ID пользователя
   * @returns Promise<{total: number, byStatus: Record<ReviewStatus, number>}>
   */
  async getStats(userId: string) {
    // Получаем общее количество отзывов
    const total = await this.reviewRepository.count({
      where: { user: { id: userId } },
    });

    // Получаем количество отзывов по каждому статусу
    const byStatus = await this.reviewRepository
      .createQueryBuilder('review')
      .select('review.status', 'status')
      .addSelect('COUNT(*)', 'count')
      .where('review.user = :userId', { userId })
      .groupBy('review.status')
      .getRawMany();

    // Получаем количество избранных отзывов
    const favoritesCount = await this.reviewRepository.count({
      where: {
        user: { id: userId },
        isFavorite: true,
      },
    });

    // Преобразуем результат в объект
    const statusCounts = Object.values(ReviewStatus).reduce((acc, status) => {
      acc[status] = 0;
      return acc;
    }, {});

    byStatus.forEach((item) => {
      if (item.status) {
        statusCounts[item.status] = parseInt(item.count);
      }
    });

    return {
      total,
      totalByStatus: {
        ...statusCounts,
        favorites: favoritesCount,
      },
    };
  }

  /**
   * Получает отдельный отзыв по ID
   * @param reviewId - ID отзыва
   * @param userId - ID пользователя
   * @returns Promise<Review> Отзыв
   */
  async findOne(reviewId: string, userId: string) {
    return this.reviewRepository.findOne({
      where: {
        id: reviewId,
        user: { id: userId },
      },
    });
  }
}
