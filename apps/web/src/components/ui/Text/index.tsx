import { Colors } from '@/styles/colors';
import { FontSizes } from '@/styles/fontSizes';
import * as S from './style';

interface TextIProps {
  color?: keyof Colors;
  size?: keyof FontSizes;
  children: string;
}

const Text = ({ color = 'black', size = 'body_S', children }: TextIProps) => {
  return (
    <S.Text $color={color} $size={size}>
      {children}
    </S.Text>
  );
};

export default Text;
