import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { GameGenre } from './game-genre.entity';

/**
 * Сущность игры
 * Представляет видеоигру в базе данных
 */
@Entity()
export class Game {
  /**
   * Уникальный идентификатор игры
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Название игры
   */
  @Column()
  title: string;

  /**
   * Уникальный slug игры, используется в URL
   */
  @Column({ unique: true })
  slug: string;

  /**
   * Связь с промежуточной таблицей GameGenre
   * Через эту связь можно получить жанры игры
   */
  @OneToMany(() => GameGenre, (gameGenre) => gameGenre.game, {
    cascade: true,
  })
  gameGenres: GameGenre[];

  /**
   * Рейтинг игры
   * Значение от 0 до 5 с десятичной точностью
   */
  @Column({ nullable: true })
  rating: number;

  /**
   * URL изображения/обложки игры
   */
  @Column({ nullable: true })
  image: string;
}
