import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';

import { VerificationEmailDto } from './dtos';

@Injectable()
export class EmailSenderService {
  private mailSend: MailerSend;
  private senderInfo: Sender;
  constructor(private configService: ConfigService) {
    this.mailSend = new MailerSend({
      apiKey: this.configService.getOrThrow<string>('MAILER_API_KEY'),
    });
    this.senderInfo = new Sender(`${this.configService.getOrThrow<string>('SENDER_DOMAIN')}`, 'ATest name');
  }

  async sendVerificationEmail(data: VerificationEmailDto) {
    const { email, name, verificationUrl } = data;

    const recipients = [new Recipient(email, name)];
    const emailParams = new EmailParams()
      .setFrom(this.senderInfo)
      .setTo(recipients)
      .setReplyTo(this.senderInfo)
      .setSubject('Validate your email')
      .setHtml(`<p>Hello ${name}! Click on the link to verify your email ${verificationUrl}</p>`)
      .setText(`Click on the link to verify email ${verificationUrl}`);

    try {
      await this.mailSend.email.send(emailParams);
    } catch (error) {
      console.log(error);
      // throw new BadRequestException('Something bad happened');
    }
  }
}
