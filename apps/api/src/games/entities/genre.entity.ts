import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { GameGenre } from './game-genre.entity';

/**
 * Сущность жанра игры
 * Представляет жанр видеоигры (RPG, Action, Strategy и т.д.)
 */
@Entity()
export class Genre {
  /**
   * Уникальный идентификатор жанра
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Название жанра
   * Должно быть уникальным для избежания дубликатов
   */
  @Column({ unique: true })
  name: string;

  /**
   * Связь с промежуточной таблицей GameGenre
   * Через эту связь можно получить игры данного жанра
   */
  @OneToMany(() => GameGenre, (gameGenre) => gameGenre.genre)
  gameGenres: GameGenre[];
}
