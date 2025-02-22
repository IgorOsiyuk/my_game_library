type ColorVariant = {
  light: string;
  dark: string;
};

export type Colors = {
  black: ColorVariant;
  white: ColorVariant;
  dark: ColorVariant;
  grey: ColorVariant;
  accent: ColorVariant;
  accent_secondary: ColorVariant;
  blue: ColorVariant;
  red: ColorVariant;
  yellow: ColorVariant;
  green: ColorVariant;
};

const colors: Colors = {
  black: {
    light: '#000000',
    dark: '#000000',
  },
  white: {
    light: '#FFFFFF',
    dark: '#FFFFFF',
  },
  dark: {
    light: '#262529',
    dark: '#141316',
  },
  grey: {
    light: '#A8A8A9',
    dark: '#3E3C42',
  },
  accent: {
    light: '#6A61FD',
    dark: '#4F46E5',
  },
  accent_secondary: {
    light: '#FFE786',
    dark: '#FFE786',
  },
  blue: {
    light: '#DBEAFE',
    dark: '#1D4ED8',
  },
  red: {
    light: '#FEE2E2',
    dark: '#B91C1C',
  },
  yellow: {
    light: '#FEF9C3',
    dark: '#A16207',
  },
  green: {
    light: '#DCFCE7',
    dark: '#15803D',
  },
};

export default colors;
