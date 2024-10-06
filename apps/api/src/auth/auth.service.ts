import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';

import { EmailSenderService } from './../email-sender/email-sender.service';
import { User } from './../user/entities/user.entity';
import { RegistrationDto } from './dtos';
import { Token } from './entities/token.entity';
import { UserAuthTokens } from './entities/userAuthTokens.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>,
    @InjectRepository(UserAuthTokens)
    private userAuthTokensRepository: Repository<UserAuthTokens>,
    private jwtService: JwtService,
    private configService: ConfigService,
    private emailSenderService: EmailSenderService,
  ) {}
  async registration(user: RegistrationDto) {
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

    await this.userAuthTokensRepository.save({
      userId: newUser.id,
    });

    // await this.tokenRepository.save({
    //   user: newUserTokens,
    //   device: userAgent,
    // });

    const { VERIFICATION_TOKEN_SECRET, VERIFICATION_TOKEN_TTL } = this.getConfigJWTVariables();

    const verificationToken = this.jwtService.sign(
      { userId: newUser.id },
      {
        secret: VERIFICATION_TOKEN_SECRET,
        expiresIn: VERIFICATION_TOKEN_TTL,
      },
    );

    this.emailSenderService.sendVerificationEmail({
      email,
      name,
      verificationUrl: `${this.publicDomain}/auth/verify/${verificationToken}`,
    });

    return {
      message: 'Please Verify your email',
    };
  }

  async verifyToken(token: string, userAgent: string) {
    const { VERIFICATION_TOKEN_SECRET, JWT_REFRESH_TOKEN_TTL, JWT_ACCESS_TOKEN_TTL } = this.getConfigJWTVariables();
    try {
      const payload = this.jwtService.verifyAsync(token, {
        secret: VERIFICATION_TOKEN_SECRET,
      });
      const userId = payload['userId'];

      const user = await this.userAuthTokensRepository.findOneBy({ userId });

      if (!user) {
        throw new NotFoundException('This user does not exist');
      }

      const accessToken = this.generateToken({ userId }, JWT_ACCESS_TOKEN_TTL);
      const refreshToken = this.generateToken({ userId }, JWT_REFRESH_TOKEN_TTL);

      const hashedRefreshToken = await argon2.hash(refreshToken);

      this.tokenRepository.save({
        userId: user,
        device: userAgent,
        refreshToken: hashedRefreshToken,
      });

      Object.assign(user, {
        isVerified: true,
      });

      this.userAuthTokensRepository.save(user);
      return {
        accessToken,
        refreshToken,
      };
    } catch (error) {
      throw new UnauthorizedException('Your verification token is expired or not valid');
    }
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

  private findOneByIdOrThrow(userId: string, repository: Repository<any>) {
    const user = repository.findOneBy({ userId });
    if (!user) {
      throw new NotFoundException('This user does not exist');
    }
    return user;
  }

  private publicDomain = this.configService.getOrThrow<string>('PUBLIC_BASE_URL');
}
