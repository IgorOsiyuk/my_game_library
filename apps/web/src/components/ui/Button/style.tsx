import { Colors } from '@/styles/colors';
import { FontSizes } from '@/styles/fontSizes';
import { Radius } from '@/styles/radius';
import { Spacing } from '@/styles/spacing';
import styled, { css } from 'styled-components';
import { SizeEnum } from '.';

interface ButtonIProps {
  color: keyof Colors;
  buttonSize: SizeEnum;
  radius: keyof Radius;
  textSize: keyof FontSizes;
  spacing: keyof Spacing;
  isActive: boolean;
}

export const Button = styled.button<ButtonIProps>`
  ${({ theme, color, buttonSize, radius, textSize, spacing, isActive }) => {
    return css`
      width: ${buttonSize === SizeEnum.DEFAULT ? 'auto' : '100%'};
      border-radius: ${theme.radius[radius]};
      background-color: ${isActive ? theme.colors.accent.dark : theme.colors[color].dark};
      font-size: ${theme.fontSizes[textSize]};
      color: ${theme.colors.white.dark};
      padding: ${theme.spacing[spacing]};
      &:hover {
        background-color: ${isActive ? theme.colors.accent.light : theme.colors[color].light};
      }
      cursor: pointer;
      transition: all 0.25s;
    `;
  }}
`;
