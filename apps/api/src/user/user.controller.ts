import { Body, Controller, Delete, Get, Patch, Request, UseGuards, UseInterceptors } from '@nestjs/common';

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
   * Получает данные текущего авторизованного пользователя
   *
   * @param req - объект запроса с данными пользователя
   * @returns объект пользователя с полями name и email
   * @requires Bearer токен для аутентификации
   */
  @Get()
  @UseInterceptors(TransformUserInterceptor)
  async getCurrentUser(@Request() req: Request) {
    return this.userService.getUserById(req['userId']);
  }

  /**
   * Обновляет данные текущего авторизованного пользователя (имя и/или пароль)
   *
   * @param req - объект запроса с данными пользователя
   * @param updateUserDataDto - данные для обновления
   * @returns обновленный объект пользователя с полями name и email
   * @requires Bearer токен для аутентификации
   */
  @Patch('update-user-data')
  @UseInterceptors(TransformUserInterceptor)
  async updateUserData(@Request() req: Request, @Body() updateUserDataDto: UpdateUserDataDto) {
    return this.userService.updateUserData(req['userId'], updateUserDataDto);
  }

  /**
   * Удаляет аккаунт текущего авторизованного пользователя
   *
   * @param req - объект запроса с данными пользователя
   * @returns объект с сообщением об успешном удалении
   * @requires Bearer токен для аутентификации
   */
  @Delete('delete-account')
  async deleteUser(@Request() req: Request) {
    return this.userService.deleteUser(req['userId']);
  }
}
