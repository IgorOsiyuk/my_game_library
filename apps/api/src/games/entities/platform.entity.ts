import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { GamePlatform } from './game-platform.entity';

/**
 * Сущность платформы игры
 * Представляет платформу видеоигры (PC, PS5, Xbox, Nintendo Switch и т.д.)
 */
@Entity()
export class Platform {
  /**
   * Уникальный идентификатор платформы
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Название платформы
   * Должно быть уникальным для избежания дубликатов
   */
  @Column({ unique: true })
  name: string;

  /**
   * Связь с промежуточной таблицей GamePlatform
   * Через эту связь можно получить игры данной платформы
   */
  @OneToMany(() => GamePlatform, (gamePlatform) => gamePlatform.platform)
  gamePlatforms: GamePlatform[];
}
