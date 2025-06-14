import styled from 'styled-components';

const RadioContainer = styled.div`
  cursor: pointer;
  text-align: center;
  width: 100%;
`;

const Label = styled.div`
  user-select: none;
  display: block;
  padding: ${({ theme }) => theme.spacing.s_12};
  border-radius: ${({ theme }) => theme.radius.rounded_small};
  background-color: ${({ theme }) => theme.colors.darkSecondary};
  cursor: pointer;
  & * {
    pointer-events: none;
  }
  &:hover {
    span {
      color: ${({ theme }) => theme.colors.white};
    }
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  &:checked + ${Label} {
    background-color: ${({ theme }) => theme.colors.accent};
    span {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export { HiddenRadio, Label, RadioContainer };
