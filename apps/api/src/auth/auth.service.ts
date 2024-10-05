import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';

import { User } from '../user/entities/user.entity';

import { RegistrationDto } from './dtos/registration.dto';
import { Token } from './entities/token.entity';
import { UserTokens } from './entities/userTokens.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>,
    @InjectRepository(UserTokens)
    private userTokensRepository: Repository<UserTokens>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async registration(user: RegistrationDto, userAgent: string) {
    const { name, email, password } = user;
    const existedUser = await this.userRepository.findOneBy({ email });

    if (existedUser) {
      throw new BadRequestException('Email is already used');
    }

    const hashedPassword = await argon2.hash(password);

    const newUser = await this.userRepository.save({
      name,
      email,
      password: hashedPassword,
    });

    const newUserTokens = await this.userTokensRepository.save({
      userId: newUser.id,
    });

    await this.tokenRepository.save({
      user: newUserTokens,
      device: userAgent,
    });
    //TODO email send module
    return {
      message: 'Please Verify your email',
    };
    // const { JWT_REFRESH_TOKEN_TTL, JWT_ACCESS_TOKEN_TTL } = this.getConfigJWTVariables();

    // const accessToken = this.generateToken({ userId: newUser.id }, JWT_ACCESS_TOKEN_TTL);
    // const refreshToken = this.generateToken({ userId: newUser.id }, JWT_REFRESH_TOKEN_TTL);
  }

  private async findLastCreatedToken(userAgent: string, userId: string) {
    const lastCreatedToken = await this.tokenRepository
      .createQueryBuilder('token')
      .where({
        device: userAgent,
      })
      .leftJoinAndSelect('token.userToken', 'userToken', 'userToken.userId = :userId', { userId })
      .orderBy('token.created_date', 'DESC')
      .getOne();

    return lastCreatedToken;
  }

  private getConfigJWTVariables() {
    const JWT_SECRET = this.configService.getOrThrow<string>('JWT_SECRET');
    const JWT_REFRESH_TOKEN_TTL = this.configService.getOrThrow<string>('JWT_REFRESH_TOKEN_TTL');
    const JWT_ACCESS_TOKEN_TTL = this.configService.getOrThrow<string>('JWT_ACCESS_TOKEN_TTL');
    const VERIFICATION_TOKEN_TTL = this.configService.getOrThrow<string>('VERIFICATION_TOKEN_TTL');
    const VERIFICATION_TOKEN_SECRET = this.configService.getOrThrow<string>('VERIFICATION_TOKEN_SECRET');

    return {
      JWT_SECRET,
      JWT_REFRESH_TOKEN_TTL,
      JWT_ACCESS_TOKEN_TTL,
      VERIFICATION_TOKEN_TTL,
      VERIFICATION_TOKEN_SECRET,
    };
  }

  private generateToken(payload: Record<string, unknown>, expiresIn: string) {
    const { JWT_SECRET } = this.getConfigJWTVariables();

    const generatedToken = this.jwtService.sign(payload, {
      secret: JWT_SECRET,
      expiresIn,
    });

    return generatedToken;
  }
}
