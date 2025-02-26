import { Colors } from '@/styles/colors';
import { Spacing } from '@/styles/spacing';
import styled from 'styled-components';

interface BoxProps {
  width?: string;
  height?: string;
  backgroundColor?: keyof Colors;
  padding?: keyof Spacing;
  margin?: keyof Spacing;
}

const Box = styled.div<BoxProps>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor].dark : 'transparent'};
  padding: ${({ theme, padding }) => (padding ? theme.spacing[padding] : '0')};
  margin: ${({ theme, margin }) => (margin ? theme.spacing[margin] : '0')};
`;

export default Box;
