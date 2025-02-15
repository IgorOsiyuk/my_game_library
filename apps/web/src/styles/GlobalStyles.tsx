import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    scrollbar-gutter: stable;
  }

  html,
  body,
  * {
    padding: 0;
    margin: 0;
  }

  body {
    -webkit-overflow-scrolling: touch;
    font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
  }

  img {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @supports (font: -apple-system-body) and (-webkit-appearance: none) {
    img[loading='lazy'] {
      clip-path: inset(0px);
    }
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
  }
`;

export default GlobalStyles;
