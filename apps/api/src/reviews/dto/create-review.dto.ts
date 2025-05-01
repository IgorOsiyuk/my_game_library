import { IsEnum, IsOptional, IsString } from 'class-validator';

import { ReviewStatus } from '../entities/review-status.enum';

/**
 * DTO для создания нового отзыва об игре
 * @class CreateReviewDto
 *
 * Содержит все необходимые поля для создания отзыва
 * Все числовые значения передаются в виде строк и конвертируются в числа в сервисе
 */
export class CreateReviewDto {
  /**
   * Статус отзыва (опционально)
   * @enum {ReviewStatus}
   */
  @IsEnum(ReviewStatus)
  @IsOptional()
  status?: ReviewStatus;

  /**
   * Заголовок отзыва
   * @string
   */
  @IsString()
  title: string;

  /**
   * URL изображения (если загружается не через форму)
   * @string
   */
  @IsOptional()
  imgUrl?: string;

  /**
   * Время прохождения игры
   * @string
   */
  @IsString()
  playTime: string;

  /**
   * Общая оценка игры (0-5)
   * @string преобразуется в number
   */
  @IsString()
  rating: string;

  /**
   * Итоговый балл (0-5)
   * @string преобразуется в number
   */
  @IsString()
  score: string;

  /**
   * Оценка сюжета (0-5)
   * @string преобразуется в number
   */
  @IsString()
  plotScore: string;

  /**
   * Оценка графики (0-5)
   * @string преобразуется в number
   */
  @IsString()
  artScore: string;

  /**
   * Оценка геймплея (0-5)
   * @string преобразуется в number
   */
  @IsString()
  gameplayScore: string;

  /**
   * Оценка сложности
   * @string
   */
  @IsString()
  difficulty: string;

  /**
   * Количество полученных трофеев
   * @string преобразуется в number
   */
  @IsString()
  trophies: string;

  /**
   * Текст отзыва
   * @string
   */
  @IsString()
  review: string;
}
