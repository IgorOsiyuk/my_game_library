import styled, { css } from 'styled-components';

const FormWrapper = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      max-width: 606px;
      padding: ${theme.spacing.s_40};
      background-color: ${theme.colors.black.dark};
      border-radius: ${theme.radius.rounded_large};
    `;
  }}
`;

export { FormWrapper };
