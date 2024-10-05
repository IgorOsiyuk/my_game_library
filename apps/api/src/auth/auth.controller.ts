import { Body, Controller, Headers, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { RegistrationDto } from './dtos';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/registration')
  registration(@Body() body: RegistrationDto, @Headers('User-Agent') userAgent: string) {
    return this.authService.registration(body, userAgent);
  }
}
