import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { ObjectStorageService } from '../object-storage/object-storage.service';

import { CreateReviewDto } from './dto';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    private objectStorageService: ObjectStorageService,
  ) {}

  async findAll(userId: string) {
    return this.reviewRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
    });
  }

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
    this.reviewRepository.save(review);
    console.log(review);
    return imgUrl;
  }
}
