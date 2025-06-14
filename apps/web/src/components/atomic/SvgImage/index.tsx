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
  pointer-events: none;
  svg {
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    path {
      fill: ${({ theme, $fill }) => ($fill ? theme.colors[$fill] : theme.colors.white)};
    }
  }
`;

export default SvgImage;
