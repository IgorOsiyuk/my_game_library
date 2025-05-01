import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ObjectStorageModule } from './../object-storage/object-storage.module';
import { Review } from './entities/review.entity';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';

/**
 * Модуль для работы с отзывами пользователей об играх
 * @module ReviewsModule
 *
 * Обеспечивает:
 * - Интеграцию с базой данных через TypeORM
 * - Работу с JWT для аутентификации
 * - Загрузку файлов через ObjectStorageModule
 */
@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService],
  imports: [TypeOrmModule.forFeature([Review]), JwtModule.register({}), ObjectStorageModule],
})
export class ReviewsModule {}
