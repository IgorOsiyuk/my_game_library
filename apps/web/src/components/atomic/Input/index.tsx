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

interface TextAreaIProps {
  label?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  placeholder: string;
  icon?: ReactNode;
}

function TextArea({ label, name, onChange, value, placeholder, icon }: TextAreaIProps) {
  return (
    <S.InputWrapper>
      {icon}
      <S.Label>{label}</S.Label>
      <S.TextArea name={name} value={value} placeholder={placeholder} onChange={onChange} />
    </S.InputWrapper>
  );
}

function Input({ label, name, onChange, value, placeholder, icon }: InputIProps) {
  return (
    <S.InputWrapper>
      {icon}
      <S.Label>{label}</S.Label>
      <S.Input name={name} value={value} placeholder={placeholder} onChange={onChange} />
    </S.InputWrapper>
  );
}

Input.TextArea = TextArea;

export default Input;
