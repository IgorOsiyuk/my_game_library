import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

import { EmailSenderService } from './email-sender.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          transport: {
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
              user: configService.getOrThrow<string>('GMAIL_SENDER_EMAIL'),
              pass: configService.getOrThrow<string>('GMAIL_SENDER_API_KEY'),
            },
          },
        };
      },
    }),
  ],
  providers: [EmailSenderService],
  exports: [EmailSenderService],
})
export class EmailSenderModule {}
