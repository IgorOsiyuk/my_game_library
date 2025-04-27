import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { GameGenre } from './game-genre.entity';
import { GamePlatform } from './game-platform.entity';

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
   * Связь с промежуточной таблицей GamePlatform
   * Через эту связь можно получить платформы игры
   */
  @OneToMany(() => GamePlatform, (gamePlatform) => gamePlatform.game, {
    cascade: true,
  })
  gamePlatforms: GamePlatform[];

  /**
   * Рейтинг игры
   * Значение от 0 до 5 с десятичной точностью
   */
  @Column({ nullable: true })
  rating: string;

  /**
   * URL изображения/обложки игры
   */
  @Column({ nullable: true })
  image: string;
}
