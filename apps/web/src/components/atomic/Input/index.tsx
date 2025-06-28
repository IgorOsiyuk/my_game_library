import Box from '@/atomic/Box';
import { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './style';

interface InputIProps {
  label?: string;
  placeholder: string;
  icon?: ReactNode;
  isError?: boolean;
  error?: string;
  type?: string;
  disabled?: boolean;
  register: UseFormRegisterReturn<string>;
}

function Input({ label, placeholder, icon, isError, error, type, register, disabled }: InputIProps) {
  return (
    <Box $width="100%">
      <S.InputWrapper $isError={isError} $disabled={disabled}>
        <S.Label>{label}</S.Label>
        <S.Input placeholder={placeholder} type={type} {...register} disabled={disabled} />
        {/* <S.IconWrapper>{icon}</S.IconWrapper> */}
        {icon}
      </S.InputWrapper>
      {isError && <S.Error>{error}</S.Error>}
    </Box>
  );
}

export default Input;
