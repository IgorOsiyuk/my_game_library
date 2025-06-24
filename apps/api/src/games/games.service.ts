import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GameGenre } from './entities/game-genre.entity';
import { GamePlatform } from './entities/game-platform.entity';
import { Game } from './entities/game.entity';
import { Genre } from './entities/genre.entity';
import { Platform } from './entities/platform.entity';

/**
 * Сервис для работы с играми
 * Предоставляет функционал поиска, получения и добавления игр
 */
@Injectable()
export class GamesService {
  constructor(
    private configService: ConfigService,
    @InjectRepository(Game)
    private gameRepository: Repository<Game>,
    @InjectRepository(GameGenre)
    private gameGenreRepository: Repository<GameGenre>,
    @InjectRepository(Genre)
    private genreRepository: Repository<Genre>,
    @InjectRepository(Platform)
    private platformRepository: Repository<Platform>,
    @InjectRepository(GamePlatform)
    private gamePlatformRepository: Repository<GamePlatform>,
  ) {}

  /**
   * Поиск игр по запросу (поиск как по slug, так и по title)
   * Если игры не найдены в локальной БД, выполняет поиск через внешний API
   * и сохраняет результаты в БД
   *
   * @param search - строка для поиска
   * @returns массив найденных игр или результаты из внешнего API
   */
  async searchGame(search: string) {
    // Создаем QueryBuilder для гибкого поиска
    const queryBuilder = this.gameRepository
      .createQueryBuilder('game')
      .leftJoinAndSelect('game.gameGenres', 'gameGenre')
      .leftJoinAndSelect('gameGenre.genre', 'genre')
      .leftJoinAndSelect('game.gamePlatforms', 'gamePlatform')
      .leftJoinAndSelect('gamePlatform.platform', 'platform');

    // Разбиваем поисковый запрос на слова
    const searchTerms = search.split(' ').filter((term) => term.length > 0);

    // Для каждого слова добавляем условие поиска
    if (searchTerms.length > 0) {
      const whereConditions = searchTerms
        .map((_, index) => `(game.slug ILIKE :term${index} OR game.title ILIKE :term${index})`)
        .join(' OR ');

      queryBuilder.where(whereConditions);

      // Добавляем параметры для каждого слова
      searchTerms.forEach((term, index) => {
        queryBuilder.setParameter(`term${index}`, `%${term}%`);
      });
    }

    const games = await queryBuilder.getMany();

    // Если игры найдены в локальной БД, преобразуем их в нужный формат
    if (games.length > 0) {
      return games.map((game) => ({
        slug: game.slug,
        title: game.title,
        genres: game.gameGenres?.map((gameGenre) => gameGenre.genre.name) || [],
        platforms: game.gamePlatforms?.map((gamePlatform) => gamePlatform.platform.name) || [],
        releaseDate: game.releaseDate,
        image: game.image,
      }));
    }

    // Если игры не найдены, выполняем поиск через внешний API
    const response = await fetch(`${this.gameApiUrl}&search=${search}`);
    const data = await response.json();
    console.log(data);
    // Преобразуем результаты API в нужный формат
    const returnData = data.results.map((game) => ({
      slug: game['slug'],
      title: game['name'],
      genres: game['genres'].map((genre) => genre['name']),
      platforms: game['platforms'].map((platform) => platform['platform']['name']),
      releaseDate: game['released'],
      image: game['background_image'],
    }));

    // Сохраняем все найденные игры в БД для будущих запросов
    for (const game of returnData) {
      await this.addGameToDb(game);
    }

    return returnData;
  }

  /**
   * Добавляет игру, её жанры и платформы в базу данных
   * Проверяет существование игры перед добавлением, чтобы избежать дубликатов
   *
   * @param gameData - данные игры для добавления
   * @returns сохраненный объект игры или undefined, если игра уже существует
   */
  private async addGameToDb(gameData) {
    // Проверяем, существует ли уже игра с таким slug
    const existingGame = await this.gameRepository.findOne({
      where: { slug: gameData.slug },
    });

    // Если игра уже существует, не добавляем её снова
    if (existingGame) {
      return;
    }

    // Создаем новую игру
    const game = new Game();
    game.slug = gameData.slug;
    game.title = gameData.title;
    game.releaseDate = gameData.releaseDate;
    game.image = gameData.image;

    // Сохраняем игру в БД
    const savedGame = await this.gameRepository.save(game);

    // Создаем связи с жанрами
    const gameGenres: GameGenre[] = [];

    // Обрабатываем каждый жанр игры
    for (const genreName of gameData.genres) {
      // Находим или создаем жанр
      let genre = await this.genreRepository.findOne({ where: { name: genreName } });

      // Если жанр не существует, создаем его
      if (!genre) {
        genre = new Genre();
        genre.name = genreName;
        genre = await this.genreRepository.save(genre);
      }

      // Создаем связь между игрой и жанром в промежуточной таблице
      const gameGenre = new GameGenre();
      gameGenre.game = savedGame;
      gameGenre.genre = genre;

      // Сохраняем связь и добавляем её в массив
      gameGenres.push(await this.gameGenreRepository.save(gameGenre));
    }

    // Обновляем игру с добавленными связями с жанрами
    savedGame.gameGenres = gameGenres;

    // Создаем связи с платформами
    const gamePlatforms: GamePlatform[] = [];

    // Проверяем, есть ли платформы в данных игры
    if (gameData.platforms && gameData.platforms.length > 0) {
      // Обрабатываем каждую платформу игры
      for (const platformName of gameData.platforms) {
        // Находим или создаем платформу
        let platform = await this.platformRepository.findOne({ where: { name: platformName } });

        // Если платформа не существует, создаем её
        if (!platform) {
          platform = new Platform();
          platform.name = platformName;
          platform = await this.platformRepository.save(platform);
        }

        // Создаем связь между игрой и платформой в промежуточной таблице
        const gamePlatform = new GamePlatform();
        gamePlatform.game = savedGame;
        gamePlatform.platform = platform;

        // Сохраняем связь и добавляем её в массив
        gamePlatforms.push(await this.gamePlatformRepository.save(gamePlatform));
      }

      // Обновляем игру с добавленными связями с платформами
      savedGame.gamePlatforms = gamePlatforms;
    }

    return savedGame;
  }

  // Переменные для работы с внешним API
  /**
   * API ключ для доступа к внешнему API игр
   * Получается из конфигурации приложения
   */
  private gameApiKey = this.configService.getOrThrow<string>('GAME_API_KEY');

  /**
   * Базовый URL для доступа к внешнему API игр
   * Получается из конфигурации приложения
   */
  private gameApiDbUrl = this.configService.getOrThrow<string>('GAME_API_DB_URL');

  /**
   * Полный URL для запросов к API игр, включая ключ
   */
  private gameApiUrl = `${this.gameApiDbUrl}/games?key=${this.gameApiKey}`;
}
