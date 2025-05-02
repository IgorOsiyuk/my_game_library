import { Colors } from '@/styles/colors';
import { FontSizes } from '@/styles/fontSizes';
import { Radius } from '@/styles/radius';
import { Spacing } from '@/styles/spacing';
import styled, { css, ExecutionContext } from 'styled-components';
import { SizeEnum } from '.';

interface ButtonIProps {
  $color: keyof Colors;
  $buttonSize: SizeEnum;
  $radius: keyof Radius;
  $textSize: keyof FontSizes;
  $spacing: keyof Spacing;
  $isActive: boolean;
  $sx?: ((context: ExecutionContext) => ReturnType<typeof css>) | ReturnType<typeof css>;
}

export const Button = styled.button<ButtonIProps>`
  ${({ theme, $color, $buttonSize, $radius, $textSize, $spacing, $isActive }) => {
    return css`
      display: flex;
      align-items: center;
      gap: ${theme.spacing.s_8};
      width: ${$buttonSize === SizeEnum.DEFAULT ? 'auto' : '100%'};
      border-radius: ${theme.radius[$radius]};
      background-color: ${$isActive ? theme.colors.accent : theme.colors[$color]};
      font-size: ${theme.fontSizes[$textSize]};
      color: ${theme.colors.white};
      padding: ${theme.spacing[$spacing]};
      &:hover {
        background-color: ${$isActive ? theme.colors.accentSecondary : `${theme.colors[$color]}`};
      }
      cursor: pointer;
      transition: all 0.25s;
    `;
  }}
  ${({ $sx }) => $sx && $sx};
`;
