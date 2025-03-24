import { Colors } from '@/styles/colors';
import { FontSizes } from '@/styles/fontSizes';
import { FontWeights } from '@/styles/fontWeight';
import styled, { css } from 'styled-components';

interface TextIProps {
  $color: keyof Colors;
  $size: keyof FontSizes;
  $weight: keyof FontWeights;
}

export const Text = styled.span<TextIProps>`
  ${({ theme, $color, $size, $weight }) => {
    return css`
      font-size: ${theme.fontSizes[$size]};
      color: ${theme.colors[$color]};
      font-weight: ${theme.fontWeights[$weight]};
    `;
  }}
`;
