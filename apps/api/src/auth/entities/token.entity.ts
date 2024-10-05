import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { UserTokens } from './userTokens.entity';

@Entity()
export class Token {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserTokens, (userToken) => userToken.refreshTokens)
  userToken: UserTokens;

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
