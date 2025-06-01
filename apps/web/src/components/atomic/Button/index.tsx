import { Colors } from '@/styles/colors';
import { FontSizes } from '@/styles/fontSizes';
import { Radius } from '@/styles/radius';
import { Spacing } from '@/styles/spacing';
import { MouseEventHandler, ReactNode } from 'react';
import { css, ExecutionContext } from 'styled-components';
import * as S from './style';

export enum SizeEnum {
  DEFAULT = 'default',
  FULL = 'full',
}

interface ButtonIProps {
  color?: keyof Colors;
  children?: React.ReactNode;
  buttonSize?: SizeEnum;
  icon?: ReactNode;
  radius?: keyof Radius;
  textSize?: keyof FontSizes;
  spacing?: keyof Spacing;
  isActive?: boolean;
  as?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  sx?: ((context: ExecutionContext) => ReturnType<typeof css>) | ReturnType<typeof css>;
  type?: 'button' | 'submit' | 'reset';
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
  onMouseDown,
  sx,
  type,
}: ButtonIProps) => {
  return (
    <S.Button
      type={type}
      as={as}
      $color={color}
      $radius={radius}
      $buttonSize={buttonSize}
      $textSize={textSize}
      $spacing={spacing}
      onClick={onClick}
      onMouseDown={onMouseDown}
      $isActive={isActive}
      $sx={sx}
    >
      {icon}
      {children}
    </S.Button>
  );
};

export default Button;
