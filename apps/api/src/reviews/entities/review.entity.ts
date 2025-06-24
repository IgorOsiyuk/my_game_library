import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../../user/entities/user.entity';

import { ReviewStatus } from './review-status.enum';

/**
 * Сущность отзыва об игре
 * @entity Review
 *
 * Представляет отзыв пользователя об игре с оценками различных аспектов,
 * временем прохождения, сложностью и другими характеристиками
 */
@Entity('reviews')
export class Review {
  /** Уникальный идентификатор отзыва в формате UUID */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /** Заголовок отзыва */
  @Column()
  title: string;

  /** Жанры игры */
  @Column({ nullable: true })
  genres: string;

  /** Платформы игры */
  @Column({ nullable: true })
  platforms: string;

  /** Дата выхода игры */
  @Column({ nullable: true })
  releaseDate: string;

  /** URL изображения (скриншота) к отзыву */
  @Column({ nullable: true })
  img: string;

  /** Статус отзыва (например, черновик, опубликован) */
  @Column({
    type: 'enum',
    enum: ReviewStatus,
    nullable: true,
  })
  status: ReviewStatus | null;

  /** Время прохождения игры */
  @Column({ nullable: true })
  playTime: string;

  /** Сюжет отзыва */
  @Column('text', { nullable: true })
  plot: string;

  /** Общая оценка игры (от 0 до 5) */
  @Column('float', { nullable: true, default: 0 })
  rating: number;

  /** Итоговый балл (от 0 до 5) */
  @Column('float', { nullable: true, default: 0 })
  gameScore: number;

  /** Оценка сюжета (от 0 до 5) */
  @Column('float', { nullable: true, default: 0 })
  plotScore: number;

  /** Оценка графики/визуального стиля (от 0 до 5) */
  @Column('float', { nullable: true, default: 0 })
  artScore: number;

  /** Оценка геймплея (от 0 до 5) */
  @Column('float', { nullable: true, default: 0 })
  gameplayScore: number;

  /** Оценка сложности игры */
  @Column({ nullable: true })
  difficulty: string;

  /** Текст отзыва */
  @Column('text', { nullable: true })
  review: string;

  /** Флаг, указывающий добавлен ли отзыв в избранное */
  @Column({ default: false })
  isFavorite: boolean;

  /** Пользователь, создавший отзыв */
  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  /** Дата создания отзыва */
  @Column({
    name: 'created_data',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  /** Дата последнего обновления отзыва */
  @Column({
    name: 'updated_data',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  /**
   * Автоматически рассчитывает рейтинг как среднее арифметическое всех оценок
   */
  @BeforeInsert()
  @BeforeUpdate()
  calculateRating() {
    const scores = [this.gameScore, this.plotScore, this.artScore, this.gameplayScore];
    const validScores = scores.filter((score) => score != null && !isNaN(score));

    if (validScores.length > 0) {
      this.rating = Math.round((validScores.reduce((sum, score) => sum + score, 0) / validScores.length) * 100) / 100;
    }
  }
}
