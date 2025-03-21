import { Colors } from '@/styles/colors';
import styled from 'styled-components';

interface SvgImageProps {
  $width?: string;
  $height?: string;
  $fill?: keyof Colors;
}

const SvgImage = styled.div<SvgImageProps>`
  display: flex;
  align-items: center;
  svg {
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    fill: ${({ theme, $fill }) => ($fill ? theme.colors[$fill].dark : theme.colors.white.dark)};
    stroke: ${({ theme, $fill }) => ($fill ? theme.colors[$fill].dark : theme.colors.white.dark)};
  }
`;

export default SvgImage;
