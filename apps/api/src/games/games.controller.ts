import { Body, Controller, Post } from '@nestjs/common';

import { GamesService } from './games.service';

/**
 * Контроллер для работы с играми
 * Предоставляет API-эндпоинты для поиска и управления играми
 */
@Controller('games')
export class GamesController {
  constructor(private gamesService: GamesService) {}

  /**
   * Поиск игр по запросу
   * Выполняет поиск в локальной БД, а если не находит - во внешнем API
   *
   * @param body объект с параметром search для поиска
   * @returns массив найденных игр
   * @example
   * // Запрос: POST /games/search
   * // Body: { "search": "elder scrolls" }
   */
  @Post('/search')
  searchGame(@Body() body: { search: string }) {
    return this.gamesService.searchGame(body.search);
  }
}
