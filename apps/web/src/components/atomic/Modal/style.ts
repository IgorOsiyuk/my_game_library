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
  gap: ${({ theme }) => theme.spacing.s_32};
  background-color: ${({ theme }) => theme.colors.darkSecondary};
  border-radius: ${({ theme }) => theme.radius.rounded_large};
  padding: ${({ theme }) => theme.spacing.s_32};
  width: 100%;
  /* min-width: 400px; */
  /* max-width: 90vw; */
  /* max-height: 90vh; */
  overflow-y: auto;
  animation: ${modalFadeIn} 0.3s ease-out;
`;

const ModalHeader = styled.div`
  position: relative;
`;

const ModalBody = styled.div`
  /* padding: ${({ theme }) => theme.spacing.s_16}; */
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transition: background-color 0.2s;
  border-radius: ${({ theme }) => theme.radius.rounded_xsmall};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export { CloseButton, ModalBody, ModalContent, ModalHeader, ModalOverlay };
