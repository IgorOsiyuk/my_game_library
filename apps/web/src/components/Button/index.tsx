import { Colors } from '@/styles/colors';
import { FontSizes } from '@/styles/fontSizes';
import { Radius } from '@/styles/radius';
import { Spacing } from '@/styles/spacing';
import { ReactNode } from 'react';
import * as S from './style';

export enum SizeEnum {
  DEFAULT = 'default',
  FULL = 'full',
}

interface ButtonIProps {
  color: keyof Colors;
  label: string;
  buttonSize?: SizeEnum;
  icon?: ReactNode;
  radius: keyof Radius;
  textSize: keyof FontSizes;
  spacing: keyof Spacing;
  isActive: boolean;
  onClick: () => void;
}

const Button = ({
  color = 'black',
  label,
  buttonSize = SizeEnum.DEFAULT,
  icon,
  radius = 'rounded_small',
  textSize = 'body_S',
  spacing = 's_8',
  isActive,
  onClick,
}: ButtonIProps) => {
  return (
    <S.Button
      color={color}
      radius={radius}
      buttonSize={buttonSize}
      textSize={textSize}
      spacing={spacing}
      onClick={onClick}
      isActive={isActive}
    >
      {icon}
      {label}
    </S.Button>
  );
};

export default Button;
