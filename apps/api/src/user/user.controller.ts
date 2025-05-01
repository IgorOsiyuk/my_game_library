import { Body, Controller, Delete, Param, Patch, UseGuards, UseInterceptors } from '@nestjs/common';

import { AuthGuard } from '../guards';

import { UpdateUserDataDto } from './dtos';
import { TransformUserInterceptor } from './interceptors';
import { UserService } from './user.service';

/**
 * Контроллер для управления пользователями
 * Предоставляет API-эндпоинты для работы с данными пользователей
 */

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Обновляет данные пользователя (имя и/или пароль)
   *
   * @param userId - идентификатор пользователя
   * @param updateUserDataDto - данные для обновления
   * @returns обновленный объект пользователя с полем name
   * @requires Bearer токен для аутентификации
   */
  @Patch(':id/update-user-data')
  @UseInterceptors(TransformUserInterceptor)
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
  async deleteUser(@Param('id') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
