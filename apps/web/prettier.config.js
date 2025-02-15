/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'all',
  endOfLine: 'lf',
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  arrowParens: 'always',
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-xml'],
  xmlWhitespaceSensitivity: 'ignore',
};

export default config;
