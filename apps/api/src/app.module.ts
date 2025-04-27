import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { EmailSenderModule } from './email-sender/email-sender.module';
import { GamesModule } from './games/games.module';
import { ObjectStorageModule } from './object-storage/object-storage.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    DatabaseModule,
    UserModule,
    EmailSenderModule,
    GamesModule,
    ObjectStorageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
