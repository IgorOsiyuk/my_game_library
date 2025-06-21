import { IsEnum, IsOptional, IsString } from 'class-validator';

import { ReviewStatus } from '../entities/review-status.enum';

/**
 * DTO для обновления отзыва об игре
 * @class UpdateReviewDto
 *
 * Содержит все поля для обновления отзыва (все опциональные)
 * Числовые значения передаются в виде строк и конвертируются в числа в сервисе
 */
export class UpdateReviewDto {
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
  @IsOptional()
  title?: string;

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
  @IsOptional()
  playTime?: string;

  /**
   * Общая оценка игры (0-5)
   * @string преобразуется в number
   */
  @IsString()
  @IsOptional()
  rating?: string;

  /**
   * Итоговый балл (0-5)
   * @string преобразуется в number
   */
  @IsString()
  @IsOptional()
  score?: string;

  /**
   * Оценка сюжета (0-5)
   * @string преобразуется в number
   */
  @IsString()
  @IsOptional()
  plotScore?: string;

  /**
   * Оценка графики (0-5)
   * @string преобразуется в number
   */
  @IsString()
  @IsOptional()
  artScore?: string;

  /**
   * Оценка геймплея (0-5)
   * @string преобразуется в number
   */
  @IsString()
  @IsOptional()
  gameplayScore?: string;

  /**
   * Оценка сложности
   * @string
   */
  @IsString()
  @IsOptional()
  difficulty?: string;

  /**
   * Количество полученных трофеев
   * @string преобразуется в number
   */
  @IsString()
  @IsOptional()
  trophies?: string;

  /**
   * Текст отзыва
   * @string
   */
  @IsString()
  @IsOptional()
  review?: string;
}
