import { Body, Controller, Delete, Param, Patch, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../guards';

import { UpdateUserDataDto } from './dtos';
import { UserService } from './user.service';

/**
 * Контроллер для управления пользователями
 * Предоставляет API-эндпоинты для работы с данными пользователей
 */
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Обновляет данные пользователя (имя и/или пароль)
   *
   * @param userId - идентификатор пользователя
   * @param updateUserDataDto - данные для обновления
   * @returns обновленный объект пользователя
   * @requires Bearer токен для аутентификации
   */
  @Patch(':id/update-user-data')
  @UseGuards(AuthGuard)
  async updateUserData(@Param('id') userId: string, @Body() updateUserDataDto: UpdateUserDataDto) {
    return this.userService.updateUserData(userId, updateUserDataDto);
  }

  /**
   * Удаляет аккаунт пользователя
   *
   * @param userId - идентификатор пользователя
   * @returns объект с сообщением об успешном удалении
   * @requires Bearer токен для аутентификации
   */
  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteUser(@Param('id') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
