import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MinioModule } from 'nestjs-minio-client';

import { ObjectStorageController } from './object-storage.controller';
import { ObjectStorageService } from './object-storage.service';

/**
 * Модуль для работы с хранилищем объектов
 * Настраивает подключение к MinIO и предоставляет сервисы для работы с файлами
 */
@Module({
  providers: [ObjectStorageService],
  exports: [ObjectStorageService],
  imports: [
    // Асинхронная регистрация модуля MinIO с настройками из конфигурации
    MinioModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          endPoint: configService.getOrThrow<string>('MINIO_HOST'),
          port: parseInt(configService.getOrThrow<string>('MINIO_PORT')),
          accessKey: configService.getOrThrow<string>('MINIO_ACCESS_KEY'),
          secretKey: configService.getOrThrow<string>('MINIO_SECRET_KEY'),
          useSSL: JSON.parse(configService.getOrThrow<string>('MINIO_USE_SSL')),
        };
      },
    }),
  ],
  controllers: [ObjectStorageController],
})
export class ObjectStorageModule {}
