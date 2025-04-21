import { ReactNode } from 'react';
import * as S from './style';

interface InputIProps {
  label?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  placeholder: string;
  icon?: ReactNode;
  isError?: boolean;
  error?: string;
  type?: string;
}

function Input({ label, name, onChange, value, placeholder, icon, isError, error, type }: InputIProps) {
  return (
    <>
      <S.InputWrapper $isError={isError}>
        <S.Label>{label}</S.Label>
        <S.Input name={name} value={value} placeholder={placeholder} onChange={onChange} type={type} />
        {/* <S.IconWrapper>{icon}</S.IconWrapper> */}
        {icon}
      </S.InputWrapper>
      {isError && <S.Error>{error}</S.Error>}
    </>
  );
}

export default Input;
