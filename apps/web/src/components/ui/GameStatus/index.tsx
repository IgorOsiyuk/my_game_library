import Text from '@/atomic/Text';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './style';

interface RadioIProps {
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  value: string;
  register: UseFormRegisterReturn<string>;
}

const GameStatus = ({ label, checked, value, register }: RadioIProps) => {
  return (
    <S.RadioContainer as="label">
      <S.HiddenRadio type="radio" checked={checked} value={value} {...register} />
      <S.Label>
        <Text color="greySecondary" size="body_M">
          {label}
        </Text>
      </S.Label>
    </S.RadioContainer>
  );
};

export default GameStatus;
