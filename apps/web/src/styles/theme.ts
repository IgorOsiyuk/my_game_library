import { Inter } from 'next/font/google';
import { DefaultTheme } from 'styled-components';
import colors from './colors';
import fontSizes from './fontSizes';
import fontWeights from './fontWeight';
import radius from './radius';
import spacing from './spacing';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
});

const theme: DefaultTheme = {
  fonts: {
    main: inter.style.fontFamily,
  },
  fontSizes,
  fontWeights,
  colors,
  spacing,
  radius,
};

export { theme };
