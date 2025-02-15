import { Inter } from 'next/font/google';
import { DefaultTheme } from 'styled-components';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
});

const theme: DefaultTheme = {
  fonts: {
    main: inter.style.fontFamily,
  },
  colors: {
    background: '#ffffff',
    text: '#000000',
  },
};

export { theme };
