import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmailSenderModule } from './../email-sender/email-sender.module';
import { User } from './../user/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Token } from './entities/token.entity';
import { UserTokens } from './entities/userTokens.entity';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [TypeOrmModule.forFeature([User, UserTokens, Token]), JwtModule.register({}), EmailSenderModule],
})
export class AuthModule {}
