import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { ObjectStorageService } from '../object-storage/object-storage.service';

import { CreateReviewDto } from './dto';
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
   * Получает все отзывы конкретного пользователя
   * @param userId - ID пользователя
   * @returns Promise<Review[]> Массив отзывов пользователя
   */
  async findAll(userId: string) {
    return this.reviewRepository.find({
      where: {
        user: {
          id: userId,
        },
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
   * @throws {NotFoundException} Если отзыв не найден
   */
  async toggleFavorite(reviewId: string, userId: string): Promise<Review> {
    const review = await this.reviewRepository.findOne({
      where: {
        id: reviewId,
        user: { id: userId },
      },
    });
    review.isFavorite = !review.isFavorite;

    return this.reviewRepository.save(review);
  }
}
