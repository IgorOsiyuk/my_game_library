import { css } from 'styled-components';
import Box from '../Box';
import * as S from './style';

interface TextAreaIProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  placeholder: string;
  isError?: boolean;
  error?: string;
}

function TextArea({ name, onChange, value, placeholder, isError, error }: TextAreaIProps) {
  return (
    <Box
      $sx={css`
        width: 100%;
        height: 100%;
      `}
    >
      <S.TextArea $isError={isError} name={name} value={value} placeholder={placeholder} onChange={onChange} />
      {isError && <S.Error>{error}</S.Error>}
    </Box>
  );
}

export default TextArea;
