import Text from '@/atomic/Text';
import * as S from './style';

interface RadioIProps {
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  value: string;
}

const GameStatus = ({ label, checked, onChange, name, value }: RadioIProps) => {
  return (
    <S.RadioContainer as="label">
      <S.HiddenRadio type="radio" checked={checked} onChange={onChange} name={name} value={value} />
      <S.Label>
        <Text color="greySecondary" size="body_M">
          {label}
        </Text>
      </S.Label>
    </S.RadioContainer>
  );
};

export default GameStatus;
