import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../guards';

import { CreateReviewDto } from './dto/create-review.dto';
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
  create(@Request() req: Request, @Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(req['userId'], createReviewDto);
  }
}
