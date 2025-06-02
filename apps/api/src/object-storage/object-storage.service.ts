import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MinioService } from 'nestjs-minio-client';

/**
 * Сервис для работы с хранилищем объектов MinIO
 * Предоставляет методы для загрузки файлов в хранилище
 */
@Injectable()
export class ObjectStorageService {
  constructor(
    private readonly minioService: MinioService,
    private configService: ConfigService,
  ) {}

  /**
   * Загружает файл в хранилище MinIO
   * @param fileName - Имя файла для сохранения
   * @param fileData - Буфер с содержимым файла
   * @returns Объект с URL-адресом загруженного файла
   * @throws BadRequestException - при ошибке загрузки
   */
  async upload(fileName: string, fileData: Buffer) {
    const res = await this.minioService.client.putObject(this.minioBucket, fileName, fileData);

    if (!res) {
      throw new BadRequestException('Error uploading file');
    }

    return {
      url: `http://${this.minioHost}:${this.minioPort}/${this.minioBucket}/${fileName}`,
    };
  }

  // Приватные поля, инициализируемые из конфигурации
  private minioHost = this.configService.getOrThrow<string>('MINIO_HOST');
  private minioPort = this.configService.getOrThrow<number>('MINIO_PORT');
  private minioBucket = this.configService.getOrThrow<string>('MINIO_BUCKET');
}
