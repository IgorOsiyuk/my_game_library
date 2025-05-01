import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ObjectStorageModule } from './../object-storage/object-storage.module';
import { Review } from './entities/review.entity';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService],
  imports: [TypeOrmModule.forFeature([Review]), JwtModule.register({}), ObjectStorageModule],
})
export class ReviewsModule {}
