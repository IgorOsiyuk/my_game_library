import {
  Body,
  Controller,
  Get,
  ParseFilePipeBuilder,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { AuthGuard } from '../guards';

import { CreateReviewDto } from './dto';
import { ReviewsService } from './reviews.service';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB в байтах

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
  create(
    @Request() req: Request,
    @Body() createReviewDto: CreateReviewDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addMaxSizeValidator({ maxSize: MAX_FILE_SIZE })
        .addFileTypeValidator({ fileType: 'image/*' })
        .build(),
    )
    img?: Express.Multer.File,
  ) {
    return this.reviewsService.create(req['userId'], createReviewDto, img);
  }
}
