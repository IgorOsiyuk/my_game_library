import { ReactNode } from 'react';
import * as S from './style';

interface InputIProps {
  label?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  placeholder: string;
  icon?: ReactNode;
}
export default function Input({ label, name, onChange, value, placeholder, icon }: InputIProps) {
  return (
    <S.InputWrapper>
      {icon}
      <S.Label>{label}</S.Label>
      <S.Input name={name} value={value} placeholder={placeholder} onChange={onChange} />
    </S.InputWrapper>
  );
}
