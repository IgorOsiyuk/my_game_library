import styled, { css } from 'styled-components';

export const Body = styled.body`
  ${({ theme }) => {
    return css`
      min-height: '100vh';
      background: ${theme.colors.black};
      font-smooth: antialiased;
    `;
  }}
`;
