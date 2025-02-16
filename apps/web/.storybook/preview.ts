import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/GlobalStyles';
import { theme } from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      Provider: ThemeProvider,
      GlobalStyles,
      themes: {
        light: theme,
      },
    }),
  ],
};

export default preview;
