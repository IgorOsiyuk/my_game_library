import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GameGenre } from './entities/game-genre.entity';
import { GamePlatform } from './entities/game-platform.entity';
import { Game } from './entities/game.entity';
import { Genre } from './entities/genre.entity';
import { Platform } from './entities/platform.entity';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';

@Module({
  providers: [GamesService],
  controllers: [GamesController],
  imports: [TypeOrmModule.forFeature([Game, GameGenre, Genre, Platform, GamePlatform])],
})
export class GamesModule {}
