// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      main: string;
    };
    fontSizes: {
      title_L: number;
      title_M: number;
      big_numbers: number;
      small_titles: number;
      button: number;
      body_M: number;
      body_S: number;
      body_XS: number;
      tech: number;
    };
    fontWeights: {
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
    colors: {
      black: string;
      dark_01: string;
      dark_02: string;
      grey_01: string;
      grey_02: string;
      white: string;
      accent: {
        main: string;
        hover: string;
      };
      accent_secondary: {
        main: string;
      };
      blue: {
        light: string;
        dark: string;
      };
      red: {
        light: string;
        dark: string;
      };
      yellow: {
        light: string;
        dark: string;
      };
      green: {
        light: string;
        dark: string;
      };
    };
    spacing: {
      s_2: string;
      s_4: string;
      s_8: string;
      s_12: string;
      s_16: string;
      s_20: string;
      s_24: string;
      s_32: string;
      s_40: string;
      s_48: string;
      s_56: string;
    };
    radius: {
      rounded_large: string;
      rounded_medium: string;
      rounded_small: string;
    };
  }
}
