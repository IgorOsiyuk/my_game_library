import CloseIcon from '@/icons/close.svg';
import PlusIcon from '@/icons/plus.svg';
import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { css } from 'styled-components';
import Box from '../Box';
import FlexBox from '../FlexBox';
import SvgImage from '../SvgImage';
import Text from '../Text';
import * as S from './style';

interface FileUploadProps {
  name: string;
  control: Control<any>;
  accept?: string;
  isError?: boolean;
  error?: string;
  rules?: object;
}

export const FileUpload = ({
  name,
  control,
  accept = 'image/*',
  isError = false,
  error,
  rules = {},
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(control._getWatch(name));
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, onChange: (file: File | null) => void) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file, onChange);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>, onChange: (file: File | null) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file, onChange);
    }
  };

  const handleFile = (file: File, onChange: (file: File | null) => void) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    onChange(file);
  };

  const handleRemove = (onChange: (file: File | null) => void) => {
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onChange(null);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error: fieldError } }) => {
        return (
          <Box $width="100%" $height="100%">
            <S.UploadContainer $isDragging={isDragging} $isError={isError || !!fieldError}>
              <FlexBox $direction="column" $align="center" $gap="s_8" $width="100%" $height="100%">
                {previewUrl && value && !fieldError ? (
                  <Box
                    $sx={css`
                      position: relative;
                    `}
                    $width="100%"
                    $height="100%"
                  >
                    <S.PreviewImage src={previewUrl} alt="Preview" />
                    <S.RemoveButton onClick={() => handleRemove(onChange)}>
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
                    onDrop={(e) => handleDrop(e, onChange)}
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
              <S.HiddenInput
                ref={fileInputRef}
                type="file"
                accept={accept}
                onChange={(e) => handleFileSelect(e, onChange)}
              />
            </S.UploadContainer>
            {isError && error && <S.Error>{error}</S.Error>}
            {fieldError && <S.Error>{fieldError.message}</S.Error>}
          </Box>
        );
      }}
    />
  );
};
