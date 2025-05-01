import { Body, Controller, Get, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { AuthGuard } from '../guards';

import { CreateReviewDto } from './dto';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Request() req: Request) {
    return this.reviewsService.findAll(req['userId']);
  }

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('img'))
  create(@Request() req: Request, @Body() createReviewDto: CreateReviewDto, @UploadedFile() img?: Express.Multer.File) {
    return this.reviewsService.create(req['userId'], createReviewDto, img);
  }
}
