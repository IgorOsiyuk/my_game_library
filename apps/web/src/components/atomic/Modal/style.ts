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
  padding: ${({ theme }) => theme.spacing.s_24} ${({ theme }) => theme.spacing.s_188};
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
  overflow-y: auto;
  padding-top: 5vh;
  padding-bottom: 5vh;

  /* Transparent scrollbar */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  /* Firefox */
  scrollbar-width: none;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-height: none;
  background-color: ${({ theme }) => theme.colors.darkSecondary};
  border-radius: ${({ theme }) => theme.radius.rounded_large};
  animation: ${modalFadeIn} 0.75s ease-out;
  position: relative;
  overflow: visible;
`;

const ModalHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.s_24};
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.grey}; */
  flex-shrink: 0;
  position: relative;
`;

const ModalBody = styled.div`
  padding: ${({ theme }) => theme.spacing.s_16};
  flex-grow: 1;
  overflow: visible;

  /* Transparent scrollbar */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  /* Firefox */
  scrollbar-width: none;
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
