import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Game } from './game.entity';
import { Platform } from './platform.entity';

/**
 * Промежуточная сущность для связи многие-ко-многим между играми и платформами
 * Позволяет хранить дополнительные атрибуты связи (например, дату добавления)
 */
@Entity()
export class GamePlatform {
  /**
   * Уникальный идентификатор связи
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Связь с сущностью Game (игра)
   * Каскадное удаление: при удалении игры удаляются все её связи с платформами
   */
  @ManyToOne(() => Game, (game) => game.gamePlatforms, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'game_id' })
  game: Game;

  /**
   * Идентификатор игры для быстрого доступа без загрузки связанной сущности
   */
  @Column({ name: 'game_id' })
  gameId: string;

  /**
   * Связь с сущностью Platform (платформа)
   * Каскадное удаление: при удалении платформы удаляются все её связи с играми
   */
  @ManyToOne(() => Platform, (platform) => platform.gamePlatforms, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'platform_id' })
  platform: Platform;

  /**
   * Идентификатор платформы для быстрого доступа без загрузки связанной сущности
   */
  @Column({ name: 'platform_id' })
  platformId: string;

  /**
   * Дата и время добавления связи между игрой и платформой
   * Автоматически заполняется при создании записи
   */
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
