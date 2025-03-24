import styled, { css } from 'styled-components';

const InputWrapper = styled.div`
  ${({ theme }) => {
    return css`
      padding: ${theme.spacing.s_12} ${theme.spacing.s_18};
      border-radius: ${theme.radius.rounded_small};
      border-width: 1px;
      border-style: solid;
      border-color: ${theme.colors.grey};
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
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

const TextArea = styled.textarea`
  ${({ theme }) => {
    return css`
      font-size: ${theme.fontSizes.body_M};
      font-weight: ${theme.fontWeights.light};
      color: ${theme.colors.white};
      width: 100%;
      resize: vertical;
    `;
  }}
`;

export { Input, InputWrapper, Label, TextArea };
