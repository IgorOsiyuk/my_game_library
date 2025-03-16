import { Colors } from '@/styles/colors';
import { Spacing } from '@/styles/spacing';
import styled, { css, ExecutionContext } from 'styled-components';

interface GridProps {
  $rows?: string;
  $columns?: string;
  $gap?: keyof Spacing;
  $padding?: keyof Spacing;
  $backgroundColor?: keyof Colors;
  $width?: string;
  $height?: string;
  $sx?: ((context: ExecutionContext) => ReturnType<typeof css>) | ReturnType<typeof css>;
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-rows: ${({ $rows }) => $rows || 'auto'};
  grid-template-columns: ${({ $columns }) => $columns || 'auto'};
  gap: ${({ theme, $gap }) => ($gap ? theme.spacing[$gap] : '0')};
  padding: ${({ theme, $padding }) => ($padding ? theme.spacing[$padding] : '0')};
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || 'auto'};
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor ? theme.colors[$backgroundColor].dark : 'transparent'};
  ${({ $sx }) => $sx};
`;

export default Grid;
