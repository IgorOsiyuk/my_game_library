import styled, { css } from 'styled-components';
import SvgImage from '../SvgImage';
import Text from '../Text';

const CheckboxContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.s_8};
  align-items: center;
  cursor: pointer;
`;

const CheckboxIcon = styled.div<{ $isChecked?: boolean; $isError?: boolean }>`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme, $isError }) => ($isError ? theme.colors.red : theme.colors.white)};
  border-radius: ${({ theme }) => theme.radius.rounded_xsmall};
  transition: all 0.2s ease-in-out;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  &:hover {
    opacity: 0.7;
  }
  ${SvgImage} {
    display: none;
  }
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked + ${CheckboxIcon} {
    opacity: 0.9;
    &:hover {
      opacity: 0.9;
    }
    ${SvgImage} {
      display: block;
    }
  }
`;

const Label = styled(Text)`
  cursor: pointer;
  user-select: none;
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

export { CheckboxContainer, CheckboxIcon, Error, HiddenCheckbox, Label };
