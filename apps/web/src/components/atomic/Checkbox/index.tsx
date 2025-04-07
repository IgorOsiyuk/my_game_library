import CheckIcon from '@/icons/check.svg';
import Box from '../Box';
import SvgImage from '../SvgImage';
import * as S from './style';

interface CheckboxIProps {
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  error?: string;
  checked?: boolean;
  disabled?: boolean;
}

const Checkbox = ({ label, checked, onChange, error, isError, disabled, name }: CheckboxIProps) => {
  return (
    <Box>
      <S.CheckboxContainer as="label">
        <S.HiddenCheckbox type="checkbox" checked={checked} onChange={onChange} disabled={disabled} name={name} />
        <S.CheckboxIcon $isChecked={checked} $isError={isError}>
          <SvgImage $height="100%" $width="100%" $fill="dark">
            <CheckIcon />
          </SvgImage>
        </S.CheckboxIcon>
        <S.Label color={disabled ? 'greySecondary' : 'white'} size="body_S">
          {label}
        </S.Label>
      </S.CheckboxContainer>
      {error && <S.Error>{error}</S.Error>}
    </Box>
  );
};

export default Checkbox;
