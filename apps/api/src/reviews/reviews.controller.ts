import {
  Body,
  Controller,
  Get,
  Param,
  ParseFilePipeBuilder,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { AuthGuard } from '../guards';

import { CreateReviewDto } from './dto';
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
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  /**
   * Получает все отзывы текущего пользователя
   * @route GET /reviews
   * @param req - Объект запроса с данными пользователя
   * @returns Массив отзывов пользователя
   */
  @Get()
  @UseGuards(AuthGuard)
  findAll(@Request() req: Request) {
    return this.reviewsService.findAll(req['userId']);
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
  @UseGuards(AuthGuard)
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
  @UseGuards(AuthGuard)
  toggleFavorite(@Param('id') id: string, @Request() req: Request) {
    return this.reviewsService.toggleFavorite(id, req['userId']);
  }
}
