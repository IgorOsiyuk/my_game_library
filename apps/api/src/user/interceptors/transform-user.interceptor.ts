import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../entities/user.entity';

/**
 * Интерцептор для трансформации ответа с данными пользователя
 * Возвращает только имя пользователя
 */
@Injectable()
export class TransformUserInterceptor implements NestInterceptor {
  /**
   * Перехватывает ответ и трансформирует его
   *
   * @param context - контекст выполнения
   * @param next - обработчик для продолжения выполнения запроса
   * @returns Observable с трансформированным ответом
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // Если данные - это пользователь, возвращаем только его имя
        if (data instanceof User) {
          return { name: data.name, email: data.email };
        }
        // Иначе возвращаем данные как есть
        return data;
      }),
    );
  }
}
