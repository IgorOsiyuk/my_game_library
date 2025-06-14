import { UseFormRegisterReturn } from 'react-hook-form';
import { css } from 'styled-components';
import Box from '../Box';
import * as S from './style';

interface TextAreaIProps {
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  isError?: boolean;
  error?: string;
}

function TextArea({ placeholder, register, isError, error }: TextAreaIProps) {
  return (
    <Box
      $sx={css`
        width: 100%;
        height: 100%;
      `}
    >
      <S.TextArea $isError={isError} placeholder={placeholder} {...register} />
      {isError && <S.Error>{error}</S.Error>}
    </Box>
  );
}

export default TextArea;
