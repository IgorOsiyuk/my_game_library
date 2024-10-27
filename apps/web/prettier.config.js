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
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
};

export default config;
