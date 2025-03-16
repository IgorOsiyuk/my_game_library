import { Colors } from '@/styles/colors';
import { Radius } from '@/styles/radius';
import { Spacing } from '@/styles/spacing';
import styled, { css, ExecutionContext } from 'styled-components';

interface BoxProps {
  $width?: string;
  $height?: string;
  $backgroundColor?: keyof Colors;
  $padding?: keyof Spacing;
  $px?: keyof Spacing;
  $py?: keyof Spacing;
  $pl?: keyof Spacing;
  $pr?: keyof Spacing;
  $pt?: keyof Spacing;
  $pb?: keyof Spacing;
  $margin?: keyof Spacing;
  $radius?: keyof Radius;
  $sx?: ((context: ExecutionContext) => ReturnType<typeof css>) | ReturnType<typeof css>;
}

const Box = styled.div<BoxProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ theme, $backgroundColor }) =>
    $backgroundColor ? theme.colors[$backgroundColor].dark : 'transparent'};

  padding: ${({ theme, $padding, $px, $py }) =>
    $padding ? theme.spacing[$padding] : `${$py ? theme.spacing[$py] : '0'} ${$px ? theme.spacing[$px] : '0'}`};
  padding-left: ${({ theme, $pl }) => $pl && theme.spacing[$pl]};
  padding-right: ${({ theme, $pr }) => $pr && theme.spacing[$pr]};
  padding-top: ${({ theme, $pt }) => $pt && theme.spacing[$pt]};
  padding-bottom: ${({ theme, $pb }) => $pb && theme.spacing[$pb]};

  margin: ${({ theme, $margin }) => $margin && theme.spacing[$margin]};
  border-radius: ${({ theme, $radius }) => $radius && theme.radius[$radius]};
  ${({ $sx }) => $sx && $sx};
`;

export default Box;
