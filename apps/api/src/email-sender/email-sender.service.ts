import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';

import { VerificationEmailDto } from './dtos';

@Injectable()
export class EmailSenderService {
  constructor(
    private readonly mailService: MailerService,
    private configService: ConfigService,
  ) {}

  sendVerificationEmail(data: VerificationEmailDto) {
    const { email, name, verificationUrl } = data;

    return this.mailService.sendMail({
      from: `MyCatCompany >^_^< ${this.configService.getOrThrow<string>('GMAIL_SENDER_EMAIL')}`,
      to: email,
      subject: `MyCatCompany >^_^< Проверка почты`,
      text: `Hello ${name}! Click on the link to verify your email ${verificationUrl}`,
    });
  }
}
