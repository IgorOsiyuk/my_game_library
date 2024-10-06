import { Body, Controller, Get, Headers, Param, Post, Request, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../guards';

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

  @UseGuards(AuthGuard)
  @Post('/logout')
  logout(@Request() req: Request, @Headers('User-Agent') userAgent: string) {
    return this.authService.logout(req['userId'], userAgent);
  }

  @UseGuards(AuthGuard)
  @Post('/refresh-token')
  refreshToken(
    @Request() req: Request,
    @Headers('User-Agent') userAgent: string,
    @Headers('Authorization') refreshToken: string,
  ) {
    return this.authService.refreshToken(refreshToken, req['userId'], userAgent);
  }
}
