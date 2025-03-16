import { Colors } from '@/styles/colors';
import { FontSizes } from '@/styles/fontSizes';
import styled, { css } from 'styled-components';

interface TextIProps {
  $color: keyof Colors;
  $size: keyof FontSizes;
}

export const Text = styled.span<TextIProps>`
  ${({ theme, $color, $size }) => {
    return css`
      font-size: ${theme.fontSizes[$size]};
      color: ${theme.colors[$color].dark};
    `;
  }}
`;
