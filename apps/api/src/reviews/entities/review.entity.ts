import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column()
  playTime: string;

  /** Общая оценка игры (от 0 до 5) */
  @Column('float')
  rating: number;

  /** Итоговый балл (от 0 до 5) */
  @Column('float')
  score: number;

  /** Оценка сюжета (от 0 до 5) */
  @Column('float')
  plotScore: number;

  /** Оценка графики/визуального стиля (от 0 до 5) */
  @Column('float')
  artScore: number;

  /** Оценка геймплея (от 0 до 5) */
  @Column('float')
  gameplayScore: number;

  /** Оценка сложности игры */
  @Column()
  difficulty: string;

  /** Количество полученных трофеев/достижений */
  @Column()
  trophies: number;

  /** Текст отзыва */
  @Column('text')
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
}
