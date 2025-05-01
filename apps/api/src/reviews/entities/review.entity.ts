import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../../user/entities/user.entity';

import { ReviewStatus } from './review-status.enum';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  img: string;

  @Column({
    type: 'enum',
    enum: ReviewStatus,
    nullable: true,
  })
  status: ReviewStatus | null;

  @Column()
  playTime: string;

  @Column('float')
  rating: number;

  @Column('float')
  score: number;

  @Column('float')
  plotScore: number;

  @Column('float')
  artScore: number;

  @Column('float')
  gameplayScore: number;

  @Column()
  difficulty: string;

  @Column()
  trophies: number;

  @Column('text')
  review: string;

  @ManyToOne(() => User, (user) => user.reviews)
  user: User;

  @Column({
    name: 'created_data',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    name: 'updated_data',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
