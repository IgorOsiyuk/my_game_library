// styled.d.ts
import 'styled-components';
import { Colors } from './colors';
import { FontSizes } from './fontSizes';
import { Radius } from './radius';
import { Spacing } from './spacing';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      main: string;
    };
    fontSizes: FontSizes;
    fontWeights: {
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
    colors: Colors;
    spacing: Spacing;
    radius: Radius;
  }
}
