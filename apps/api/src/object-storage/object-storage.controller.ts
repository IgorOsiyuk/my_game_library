import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { ObjectStorageService } from './object-storage.service';

/**
 * Контроллер для работы с хранилищем объектов
 * Обрабатывает HTTP-запросы для загрузки файлов
 */
@Controller('object-storage')
export class ObjectStorageController {
  constructor(private readonly objectStorageService: ObjectStorageService) {}

  /**
   * Загружает файл в хранилище объектов MinIO
   * @param file - Загруженный файл с метаданными и буфером содержимого
   * @returns Объект с URL-адресом загруженного файла
   */
  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) // Интерцептор обрабатывает multipart/form-data для поля 'file'
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.objectStorageService.upload(file.originalname, file.buffer);
  }
}
