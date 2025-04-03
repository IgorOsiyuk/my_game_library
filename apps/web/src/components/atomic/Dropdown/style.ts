import { styled } from 'styled-components';
import SvgImage from '../SvgImage';

const DropdownTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.s_20};
  padding: ${({ theme }) => theme.spacing.s_12} ${({ theme }) => theme.spacing.s_18};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.rounded_small};
  background-color: ${({ theme }) => theme.colors.darkSecondary};

  border: 1px solid ${({ theme }) => theme.colors.grey};
  transition: background-color 0.2s;
  div {
    transition: transform 0.2s;
  }
`;

const DropdownContent = styled.div`
  /* margin-top: ${({ theme }) => theme.spacing.s_4}; */
  background-color: ${({ theme }) => theme.colors.darkSecondary};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.radius.rounded_small};
  padding: ${({ theme }) => theme.spacing.s_4};
`;

const DropdownContentWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing.s_4};
  max-height: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: -1;
  overflow: hidden;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    ${DropdownTitle} {
      background-color: ${({ theme }) => theme.colors.grey};
      ${SvgImage} {
        transform: rotate(180deg);
      }
    }
    ${DropdownContentWrapper} {
      max-height: 800px;
      z-index: 1;
      transition: max-height 0.75s ease-in-out;
    }
  }
`;

const DropdownItem = styled.div`
  padding: ${({ theme }) => theme.spacing.s_6} ${({ theme }) => theme.spacing.s_8};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.rounded_small};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export { DropdownContainer, DropdownContent, DropdownContentWrapper, DropdownItem, DropdownTitle };
