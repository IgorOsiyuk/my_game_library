import CloseIcon from '@/icons/close.svg';
import PlusIcon from '@/icons/plus.svg';
import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import { css } from 'styled-components';
import Box from '../Box';
import FlexBox from '../FlexBox';
import SvgImage from '../SvgImage';
import Text from '../Text';
import * as S from './style';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSize?: number; // in MB
}

export const FileUpload = ({ onFileSelect, accept = 'image/*', maxSize = 5 }: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && validateFile(file)) {
      handleFile(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validateFile(file)) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    onFileSelect(file);
  };

  const handleRemove = () => {
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateFile = (file: File): boolean => {
    if (file.size > maxSize * 1024 * 1024) {
      alert(`Файл слишком большой. Максимальный размер: ${maxSize}MB`);
      return false;
    }

    if (accept && !file.type.match(accept.replace('*', '.*'))) {
      alert('Неподдерживаемый формат файла');
      return false;
    }

    return true;
  };

  return (
    <S.UploadContainer $isDragging={isDragging}>
      <FlexBox $direction="column" $align="center" $gap="s_8" $width="100%" $height="100%">
        {previewUrl ? (
          <Box
            $sx={css`
              position: relative;
            `}
            $width="100%"
            $height="100%"
          >
            <S.PreviewImage src={previewUrl} alt="Preview" />
            <S.RemoveButton onClick={handleRemove}>
              <SvgImage $height="14px" $width="14px" $fill="white">
                <CloseIcon />
              </SvgImage>
            </S.RemoveButton>
          </Box>
        ) : (
          <FlexBox
            $direction="column"
            $align="center"
            $justify="center"
            $gap="s_12"
            $width="100%"
            $height="100%"
            $padding="s_24"
            onClick={handleClick}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            $sx={css`
              cursor: pointer;
            `}
          >
            <SvgImage $height="20px" $width="20px" $fill="white">
              <PlusIcon />
            </SvgImage>

            <Text color="white" size="body_M">
              Добавить обложку
            </Text>
          </FlexBox>
        )}
      </FlexBox>
      <S.HiddenInput ref={fileInputRef} type="file" accept={accept} onChange={handleFileSelect} />
    </S.UploadContainer>
  );
};
