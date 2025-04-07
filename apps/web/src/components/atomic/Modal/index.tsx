import CloseIcon from '@/icons/close.svg';
import { ReactNode, useEffect } from 'react';
import SvgImage from '../SvgImage';
import * as S from './style';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <S.ModalOverlay $isOpen={isOpen} onClick={onClose}>
      <S.ModalContent className={className} onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.CloseButton onClick={onClose}>
            <SvgImage $height="24px" $width="24px" $fill="white">
              <CloseIcon />
            </SvgImage>
          </S.CloseButton>
        </S.ModalHeader>
        <S.ModalBody>{children}</S.ModalBody>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
