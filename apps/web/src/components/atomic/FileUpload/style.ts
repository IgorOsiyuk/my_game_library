import styled, { css } from 'styled-components';

const UploadContainer = styled.div<{ $isDragging: boolean }>`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.radius.rounded_xmedium};
  background-color: ${({ theme }) => theme.colors.darkSecondary};
  transition: all 0.2s;

  ${({ $isDragging }) =>
    $isDragging &&
    css`
      background-color: ${({ theme }) => theme.colors.dark};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.rounded_small};
  margin-bottom: ${({ theme }) => theme.spacing.s_16};
`;

const RemoveButton = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.s_8};
  right: ${({ theme }) => theme.spacing.s_8};
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius.rounded_circle};

  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.accentSecondary};
  }
`;

export { HiddenInput, PreviewImage, RemoveButton, UploadContainer };
