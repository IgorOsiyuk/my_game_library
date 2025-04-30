import { IsEnum, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

import { ReviewStatus } from '../entities/review-status.enum';

export class CreateReviewDto {
  @IsEnum(ReviewStatus)
  @IsOptional()
  status?: ReviewStatus;

  @IsString()
  playTime: string;

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  @IsNumber()
  @Min(0)
  @Max(5)
  score: number;

  @IsNumber()
  @Min(0)
  @Max(5)
  plotScore: number;

  @IsNumber()
  @Min(0)
  @Max(5)
  artScore: number;

  @IsNumber()
  @Min(0)
  @Max(5)
  gameplayScore: number;

  @IsString()
  difficulty: string;

  @IsNumber()
  @Min(0)
  trophies: number;

  @IsString()
  review: string;
}
