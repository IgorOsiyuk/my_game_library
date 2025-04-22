import { IsOptional, IsString, IsStrongPassword, MinLength, ValidateIf } from 'class-validator';

/**
 * DTO для обновления данных пользователя
 * Позволяет обновлять имя и пароль пользователя
 * Все поля являются опциональными, можно обновить только нужные поля
 */
export class UpdateUserDataDto {
  /**
   * Новое имя пользователя
   * Должно содержать минимум 2 символа
   */
  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'Имя должно содержать минимум 2 символа' })
  name?: string;

  /**
   * Новый пароль пользователя
   * Должен соответствовать требованиям безопасности:
   * - Минимум 8 символов
   * - Минимум 1 строчная буква
   * - Минимум 1 заглавная буква
   * - Минимум 1 цифра
   * - Минимум 1 специальный символ
   */
  @IsOptional()
  @IsString()
  @MinLength(8, { message: 'Пароль должен содержать минимум 8 символов' })
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password?: string;

  /**
   * Подтверждение нового пароля
   * Должно совпадать с полем password
   * Валидируется только если указано поле password
   */
  @ValidateIf((o) => o.password)
  @IsString()
  @MinLength(8, { message: 'Подтверждение пароля должно содержать минимум 8 символов' })
  confirmPassword?: string;
}
