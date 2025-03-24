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
          background-color: ${theme.colors.greenSecondary};
          color: ${theme.colors.green};
        `;
      case StatusEnum.INFO:
        return css`
          background-color: ${theme.colors.blueSecondary};
          color: ${theme.colors.blue};
        `;
      case StatusEnum.ERROR:
        return css`
          background-color: ${theme.colors.redSecondary};
          color: ${theme.colors.red};
        `;
      case StatusEnum.WARNING:
        return css`
          background-color: ${theme.colors.yellowSecondary};
          color: ${theme.colors.yellow};
        `;

      default:
        break;
    }
  }}
`;
