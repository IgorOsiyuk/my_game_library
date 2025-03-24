import { Colors } from '@/styles/colors';
import { Spacing } from '@/styles/spacing';
import styled, { css, ExecutionContext } from 'styled-components';

interface GridProps {
  $rows?: string;
  $columns?: string;
  $justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  $align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
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
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align};
  gap: ${({ theme, $gap }) => ($gap ? theme.spacing[$gap] : '0')};
  padding: ${({ theme, $padding }) => ($padding ? theme.spacing[$padding] : '0')};
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || 'auto'};
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor ? theme.colors[$backgroundColor] : 'transparent'};
  ${({ $sx }) => $sx};
`;

export default Grid;
