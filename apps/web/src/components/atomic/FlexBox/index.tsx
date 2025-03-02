import { Colors } from '@/styles/colors';
import { Spacing } from '@/styles/spacing';
import styled from 'styled-components';

interface FlexBoxProps {
  $direction?: 'row' | 'column';
  $justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  $align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  $gap?: keyof Spacing;
  $padding?: keyof Spacing;
  backgroundColor?: keyof Colors;
  $width?: string;
  $height?: string;
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'stretch'};
  gap: ${({ theme, $gap }) => ($gap ? theme.spacing[$gap] : '0')};
  padding: ${({ theme, $padding }) => ($padding ? theme.spacing[$padding] : '0')};
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || 'auto'};
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor].dark : 'transparent'};
`;

export default FlexBox;
