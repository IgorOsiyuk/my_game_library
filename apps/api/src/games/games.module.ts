import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GameGenre } from './entities/game-genre.entity';
import { Game } from './entities/game.entity';
import { Genre } from './entities/genre.entity';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';

@Module({
  providers: [GamesService],
  controllers: [GamesController],
  imports: [TypeOrmModule.forFeature([Game, GameGenre, Genre])],
})
export class GamesModule {}
