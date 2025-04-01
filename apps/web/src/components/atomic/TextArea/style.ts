import styled, { css } from 'styled-components';

const TextArea = styled.textarea<{ $isError?: boolean }>`
  ${({ theme, $isError }) => {
    return css`
      display: block;
      background-color: ${theme.colors.darkSecondary};
      padding: ${theme.spacing.s_12} ${theme.spacing.s_18};
      padding-bottom: ${theme.spacing.s_4};
      padding-right: ${theme.spacing.s_4};
      border-radius: ${theme.radius.rounded_small};
      border-width: 1px;
      border-style: solid;
      border-color: ${$isError ? theme.colors.red : theme.colors.grey};
      font-size: ${theme.fontSizes.body_M};
      font-weight: ${theme.fontWeights.light};
      color: ${theme.colors.white};
      width: 100%;
      height: 100%;
    `;
  }}
`;
const Error = styled.div`
  ${({ theme }) => {
    return css`
      padding: ${theme.spacing.s_8} ${theme.spacing.s_12};
      font-size: ${theme.fontSizes.tech};
      font-weight: ${theme.fontWeights.medium};
      color: ${theme.colors.red};
      width: 100%;
    `;
  }}
`;

export { Error, TextArea };
