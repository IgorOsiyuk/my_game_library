import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginDto, RegistrationDto } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/registration')
  registration(@Body() body: RegistrationDto) {
    return this.authService.registration(body);
  }

  @Get('/verify/:verificationToken')
  verifyEmail(@Param('verificationToken') verificationToken: string, @Headers('User-Agent') userAgent: string) {
    return this.authService.verifyToken(verificationToken, userAgent);
  }

  @Post('/login')
  login(@Body() body: LoginDto, @Headers('User-Agent') userAgent: string) {
    return this.authService.login(body, userAgent);
  }
}
