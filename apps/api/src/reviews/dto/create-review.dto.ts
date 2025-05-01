import { IsEnum, IsOptional, IsString } from 'class-validator';

import { ReviewStatus } from '../entities/review-status.enum';

export class CreateReviewDto {
  @IsEnum(ReviewStatus)
  @IsOptional()
  status?: ReviewStatus;

  @IsString()
  title: string;

  @IsOptional()
  imgUrl?: string;

  @IsString()
  playTime: string;

  @IsString()
  rating: string;

  @IsString()
  score: string;

  @IsString()
  plotScore: string;

  @IsString()
  artScore: string;

  @IsString()
  gameplayScore: string;

  @IsString()
  difficulty: string;

  @IsString()
  trophies: string;

  @IsString()
  review: string;
}
