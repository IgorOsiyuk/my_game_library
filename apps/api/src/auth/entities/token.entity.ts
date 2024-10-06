import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserAuthTokens } from './userAuthTokens.entity';

@Entity()
export class Token {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserAuthTokens, (userAuthTokens) => userAuthTokens.refreshTokens)
  @JoinColumn({ name: 'userId' })
  userId: UserAuthTokens;

  @Column()
  device: string;

  @Column({ default: false })
  isOnBlackList: boolean;

  @Column({ nullable: true })
  refreshToken: string;

  @CreateDateColumn({ name: 'created_data' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_data' })
  updatedAt: string;
}
