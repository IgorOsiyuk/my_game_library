import { Colors } from '@/styles/colors';
import { FontSizes } from '@/styles/fontSizes';
import { Radius } from '@/styles/radius';
import { Spacing } from '@/styles/spacing';
import { MouseEventHandler, ReactNode } from 'react';
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
  as?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
  as = 'button',
  onClick,
}: ButtonIProps) => {
  return (
    <S.Button
      as={as}
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
