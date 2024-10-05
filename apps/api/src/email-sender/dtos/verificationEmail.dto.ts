import { IsEmail, IsString } from 'class-validator';

export class VerificationEmailDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  verificationUrl: string;
}
