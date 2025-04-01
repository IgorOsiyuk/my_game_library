import { ReactNode } from 'react';
import Box from '../Box';
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
}

function Input({ label, name, onChange, value, placeholder, icon, isError, error }: InputIProps) {
  return (
    <Box>
      <S.InputWrapper $isError={isError}>
        <S.Label>{label}</S.Label>
        <S.Input name={name} value={value} placeholder={placeholder} onChange={onChange} />
        <S.IconWrapper>{icon}</S.IconWrapper>
      </S.InputWrapper>
      {isError && <S.Error>{error}</S.Error>}
    </Box>
  );
}

export default Input;
