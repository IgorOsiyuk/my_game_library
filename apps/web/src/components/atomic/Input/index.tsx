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
  register: UseFormRegisterReturn<string>;
}

function Input({ label, placeholder, icon, isError, error, type, register }: InputIProps) {
  return (
    <>
      <S.InputWrapper $isError={isError}>
        <S.Label>{label}</S.Label>
        <S.Input placeholder={placeholder} type={type} {...register} />
        {/* <S.IconWrapper>{icon}</S.IconWrapper> */}
        {icon}
      </S.InputWrapper>
      {isError && <S.Error>{error}</S.Error>}
    </>
  );
}

export default Input;
