import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Token } from './token.entity';

@Entity()
export class UserTokens {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  userId: string;

  @OneToMany(() => Token, (token) => token.userToken)
  refreshTokens: Token[];

  @Column({ default: false })
  isVerified: boolean;
}
