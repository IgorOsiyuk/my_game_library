import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Game } from './game.entity';
import { Genre } from './genre.entity';

/**
 * Промежуточная сущность для связи многие-ко-многим между играми и жанрами
 * Позволяет хранить дополнительные атрибуты связи (например, дату добавления)
 */
@Entity()
export class GameGenre {
  /**
   * Уникальный идентификатор связи
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Связь с сущностью Game (игра)
   * Каскадное удаление: при удалении игры удаляются все её связи с жанрами
   */
  @ManyToOne(() => Game, (game) => game.gameGenres, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'game_id' })
  game: Game;

  /**
   * Идентификатор игры для быстрого доступа без загрузки связанной сущности
   */
  @Column({ name: 'game_id' })
  gameId: string;

  /**
   * Связь с сущностью Genre (жанр)
   * Каскадное удаление: при удалении жанра удаляются все его связи с играми
   */
  @ManyToOne(() => Genre, (genre) => genre.gameGenres, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;

  /**
   * Идентификатор жанра для быстрого доступа без загрузки связанной сущности
   */
  @Column({ name: 'genre_id' })
  genreId: string;

  /**
   * Дата и время добавления связи между игрой и жанром
   * Автоматически заполняется при создании записи
   */
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
