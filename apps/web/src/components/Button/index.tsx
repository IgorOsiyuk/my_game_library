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
  color?: keyof Colors;
  children: string;
  buttonSize?: SizeEnum;
  icon?: ReactNode;
  radius?: keyof Radius;
  textSize?: keyof FontSizes;
  spacing?: keyof Spacing;
  isActive?: boolean;
  onClick?: () => void;
}

const Button = ({
  color = 'black',
  children,
  buttonSize = SizeEnum.DEFAULT,
  icon,
  radius = 'rounded_small',
  textSize = 'button',
  spacing = 's_8',
  isActive = false,
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
      {children}
    </S.Button>
  );
};

export default Button;
