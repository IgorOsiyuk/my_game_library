import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';

import { UpdateUserDataDto } from './dtos/update-user-data.dto';
import { User } from './entities/user.entity';

/**
 * Сервис для работы с пользователями
 * Предоставляет методы для управления данными пользователей
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Обновляет данные пользователя (имя и/или пароль)
   *
   * @param userId - идентификатор пользователя
   * @param updateUserDataDto - DTO с данными для обновления
   * @returns обновленный объект пользователя
   * @throws NotFoundException - если пользователь не найден
   * @throws BadRequestException - если пароли не совпадают
   */
  async updateUserData(userId: string, updateUserDataDto: UpdateUserDataDto): Promise<User> {
    // Находим пользователя по ID
    const user = await this.userRepository.findOne({ where: { id: userId } });

    // Проверяем существование пользователя
    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    // Обновляем имя, если оно передано в запросе
    if (updateUserDataDto.name) {
      user.name = updateUserDataDto.name;
    }

    // Обновляем пароль, если он передан в запросе
    if (updateUserDataDto.password) {
      // Проверяем совпадение пароля и его подтверждения
      if (updateUserDataDto.password !== updateUserDataDto.confirmPassword) {
        throw new BadRequestException('Пароли не совпадают');
      }
      // Хешируем пароль перед сохранением
      user.password = await argon2.hash(updateUserDataDto.password);
    }

    // Сохраняем обновленного пользователя в базе данных
    return this.userRepository.save(user);
  }

  /**
   * Удаляет аккаунт пользователя
   *
   * @param userId - идентификатор пользователя
   * @returns объект с сообщением об успешном удалении
   * @throws NotFoundException - если пользователь не найден
   */
  async deleteUser(userId: string): Promise<{ message: string }> {
    // Находим пользователя по ID
    const user = await this.userRepository.findOne({ where: { id: userId } });

    // Проверяем существование пользователя
    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    // Удаляем пользователя из базы данных
    await this.userRepository.remove(user);

    // Возвращаем сообщение об успешном удалении
    return { message: 'Аккаунт пользователя успешно удален' };
  }
}
