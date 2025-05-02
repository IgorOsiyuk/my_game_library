import {
  Body,
  Controller,
  Get,
  Param,
  ParseFilePipeBuilder,
  Post,
  Query,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { AuthGuard } from '../guards';

import { CreateReviewDto } from './dto';
import { ReviewStatus } from './entities/review-status.enum';
import { ReviewsService } from './reviews.service';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB в байтах

/**
 * Контроллер для управления отзывами об играх
 * @controller ReviewsController
 *
 * Предоставляет API эндпоинты для:
 * - Получения списка отзывов пользователя
 * - Создания новых отзывов с возможностью загрузки изображений
 * - Управления избранными отзывами
 *
 * Все эндпоинты защищены AuthGuard для аутентификации пользователей
 */
@UseGuards(AuthGuard)
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  /**
   * Получает отзывы пользователя с возможностью фильтрации по статусу
   * @route GET /reviews
   * @query status - Статус отзыва для фильтрации (опционально)
   * @param req - Объект запроса с данными пользователя
   * @returns Массив отзывов пользователя
   */
  @Get()
  findAll(@Request() req: Request, @Query('status') status?: ReviewStatus, @Query('isFavorite') isFavorite?: boolean) {
    return this.reviewsService.findAll(req['userId'], status, isFavorite);
  }

  /**
   * Создает новый отзыв об игре
   * @route POST /reviews
   * @param req - Объект запроса с данными пользователя
   * @param createReviewDto - DTO с данными отзыва
   * @param img - Загружаемое изображение (опционально)
   * @returns Данные созданного отзыва
   *
   * Ограничения для изображения:
   * - Максимальный размер: 5 MB
   * - Тип файла: только изображения
   */
  @Post()
  @UseInterceptors(FileInterceptor('img'))
  create(
    @Request() req: Request,
    @Body() createReviewDto: CreateReviewDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addMaxSizeValidator({ maxSize: MAX_FILE_SIZE })
        .addFileTypeValidator({ fileType: 'image/*' })
        .build(),
    )
    img?: Express.Multer.File,
  ) {
    return this.reviewsService.create(req['userId'], createReviewDto, img);
  }

  /**
   * Переключает статус избранного для отзыва
   * @route POST /reviews/:id/toggle-favorite
   * @param id - ID отзыва
   * @param req - Объект запроса с данными пользователя
   * @returns Обновленный отзыв
   */
  @Post('favorite/:id')
  toggleFavorite(@Param('id') id: string, @Request() req: Request) {
    return this.reviewsService.toggleFavorite(id, req['userId']);
  }

  /**
   * Получает статистику по отзывам пользователя
   * @route GET /reviews/stats
   * @param req - Объект запроса с данными пользователя
   * @returns Объект со статистикой отзывов
   */
  @Get('stats')
  getStats(@Request() req: Request) {
    return this.reviewsService.getStats(req['userId']);
  }

  /**
   * Получает отдельный отзыв по ID
   * @route GET /reviews/:id
   * @param id - ID отзыва
   * @param req - Объект запроса с данными пользователя
   * @returns Отзыв
   */
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req: Request) {
    return this.reviewsService.findOne(id, req['userId']);
  }
}
