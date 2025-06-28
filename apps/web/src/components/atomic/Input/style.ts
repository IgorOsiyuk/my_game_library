import styled, { css } from 'styled-components';

const InputWrapper = styled.div<{ $isError?: boolean; $disabled?: boolean }>`
  ${({ theme, $isError, $disabled }) => {
    return css`
      width: 100%;
      background-color: ${$disabled ? theme.colors.dark : theme.colors.darkSecondary};
      padding: ${theme.spacing.s_12} ${theme.spacing.s_18};
      border-radius: ${theme.radius.rounded_small};
      border-width: 1px;
      border-style: solid;
      border-color: ${$isError ? theme.colors.red : theme.colors.grey};
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      ${Input} {
        &:disabled {
          color: ${theme.colors.grey};
        }
      }
    `;
  }}
`;

const Input = styled.input`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.body_M};
      font-weight: ${theme.fontWeights.light};
      color: ${theme.colors.white};
      width: 100%;
    `;
  }}
`;

const Label = styled.label`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.body_M};
      font-weight: ${theme.fontWeights.light};
      color: ${theme.colors.white};
      width: 100%;
      visibility: hidden;
      display: none;
    `;
  }}
`;

const IconWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: ${theme.spacing.s_16};
      height: ${theme.spacing.s_16};
      svg {
        path {
          fill: ${theme.colors.white};
        }
      }
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

export { Error, IconWrapper, Input, InputWrapper, Label };
