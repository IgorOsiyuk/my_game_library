import { Colors } from '@/styles/colors';
import { Spacing } from '@/styles/spacing';
import styled, { css, ExecutionContext } from 'styled-components';

interface FlexBoxProps {
  $direction?: 'row' | 'column';
  $justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  $align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  $gap?: keyof Spacing;
  $padding?: keyof Spacing;
  $px?: keyof Spacing;
  $py?: keyof Spacing;
  $pl?: keyof Spacing;
  $pr?: keyof Spacing;
  $pt?: keyof Spacing;
  $pb?: keyof Spacing;
  $margin?: keyof Spacing;
  $mx?: keyof Spacing;
  $my?: keyof Spacing;
  $ml?: keyof Spacing;
  $mr?: keyof Spacing;
  $mt?: keyof Spacing;
  $mb?: keyof Spacing;
  $backgroundColor?: keyof Colors;
  $width?: string;
  $height?: string;
  $sx?: ((context: ExecutionContext) => ReturnType<typeof css>) | ReturnType<typeof css>;
}

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align};
  gap: ${({ theme, $gap }) => ($gap ? theme.spacing[$gap] : '0')};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};

  padding: ${({ theme, $padding, $px, $py }) =>
    $padding ? theme.spacing[$padding] : `${$py ? theme.spacing[$py] : '0'} ${$px ? theme.spacing[$px] : '0'}`};
  padding-left: ${({ theme, $pl }) => $pl && theme.spacing[$pl]};
  padding-right: ${({ theme, $pr }) => $pr && theme.spacing[$pr]};
  padding-top: ${({ theme, $pt }) => $pt && theme.spacing[$pt]};
  padding-bottom: ${({ theme, $pb }) => $pb && theme.spacing[$pb]};

  margin: ${({ theme, $margin, $mx, $my }) =>
    $margin ? theme.spacing[$margin] : `${$my ? theme.spacing[$my] : '0'} ${$mx ? theme.spacing[$mx] : '0'}`};
  margin-left: ${({ theme, $ml }) => $ml && theme.spacing[$ml]};
  margin-right: ${({ theme, $mr }) => $mr && theme.spacing[$mr]};
  margin-top: ${({ theme, $mt }) => $mt && theme.spacing[$mt]};
  margin-bottom: ${({ theme, $mb }) => $mb && theme.spacing[$mb]};

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor ? theme.colors[$backgroundColor].dark : 'transparent'};
  ${({ $sx }) => $sx};
`;

export default FlexBox;
