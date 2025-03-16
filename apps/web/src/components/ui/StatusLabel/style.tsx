import styled, { css } from 'styled-components';
import { StatusEnum } from '.';

interface StatusBoxIProps {
  variant: StatusEnum;
}

export const StatusBox = styled.div<StatusBoxIProps>`
  padding: ${({ theme }) => theme.spacing.s_8};
  border-radius: ${({ theme }) => theme.radius.rounded_small};
  font-size: ${({ theme }) => theme.fontSizes.body_S};
  ${({ variant, theme }) => {
    switch (variant) {
      case StatusEnum.SUCCESS:
        return css`
          background-color: ${theme.colors.green.light};
          color: ${theme.colors.green.dark};
        `;
      case StatusEnum.INFO:
        return css`
          background-color: ${theme.colors.blue.light};
          color: ${theme.colors.blue.dark};
        `;
      case StatusEnum.ERROR:
        return css`
          background-color: ${theme.colors.red.light};
          color: ${theme.colors.red.dark};
        `;
      case StatusEnum.WARNING:
        return css`
          background-color: ${theme.colors.yellow.light};
          color: ${theme.colors.yellow.dark};
        `;

      default:
        break;
    }
  }}
`;
