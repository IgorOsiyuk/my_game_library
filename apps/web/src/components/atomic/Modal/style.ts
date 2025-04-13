import { css, styled } from 'styled-components';

const modalFadeIn = css`
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  padding: 0 ${({ theme }) => theme.spacing.s_188};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 90vh;
  background-color: ${({ theme }) => theme.colors.darkSecondary};
  border-radius: ${({ theme }) => theme.radius.rounded_large};
  animation: ${modalFadeIn} 0.75s ease-out;
  position: relative;
`;

const ModalHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.s_24};
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.grey}; */
  flex-shrink: 0;
  position: relative;
`;

const ModalBody = styled.div`
  padding: ${({ theme }) => theme.spacing.s_16};
  overflow-y: auto;
  flex-grow: 1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.dark};
    border-radius: ${({ theme }) => theme.radius.rounded_small};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grey};
    border-radius: ${({ theme }) => theme.radius.rounded_small};

    &:hover {
      background: ${({ theme }) => theme.colors.greySecondary};
    }
  }
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 32px;
  transition: background-color 0.2s;
  border-radius: ${({ theme }) => theme.radius.rounded_xsmall};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export { CloseButton, ModalBody, ModalContent, ModalHeader, ModalOverlay };
