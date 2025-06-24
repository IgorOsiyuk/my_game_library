import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';

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
   * Заголовок отзыва
   * @string
   */
  @IsString()
  title: string;

  /**
   * Жанры игры
   * @string
   */
  @IsString()
  @IsOptional()
  genres?: string;

  /**
   * Платформы игры
   * @string
   */
  @IsString()
  @IsOptional()
  platforms?: string;

  /**
   * Дата выхода игры
   * @date
   */
  @IsString()
  @IsOptional()
  releaseDate?: string;

  /**
   * Разработчики игры
   * @string
   * Статус отзыва (опционально)
   * @enum {ReviewStatus}
   */
  @IsEnum(ReviewStatus)
  @IsOptional()
  status?: ReviewStatus;

  /**
   * Оценка сложности
   * @string
   */
  @IsString()
  @IsOptional()
  difficulty?: string;

  /**
   * Время прохождения игры
   * @string
   */
  @IsString()
  @IsOptional()
  playTime?: string;

  /**
   * Сюжет отзыва (максимум 1000 символов)
   * @string
   */
  @IsString()
  @IsOptional()
  @MaxLength(1000, { message: 'Сюжет отзыва не должен превышать 1000 символов' })
  plot?: string;

  /**
   * Итоговый балл (0-5)
   * @string преобразуется в number
   */
  @IsString()
  @IsOptional()
  gameScore?: string;

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
   * Текст отзыва (максимум 1000 символов)
   * @string
   */
  @IsString()
  @IsOptional()
  @MaxLength(1000, { message: 'Текст отзыва не должен превышать 1000 символов' })
  review?: string;

  /**
   * URL изображения (если загружается не через форму)
   * @string
   */
  @IsOptional()
  imgUrl?: string;
}
