import { Colors } from '@/styles/colors';
import { FontSizes } from '@/styles/fontSizes';
import { FontWeights } from '@/styles/fontWeight';
import { ReactNode } from 'react';
import * as S from './style';

interface TextIProps {
  color?: keyof Colors;
  size?: keyof FontSizes;
  fontWeight?: keyof FontWeights;
  children: ReactNode;
}

const Text = ({ color = 'black', size = 'body_S', fontWeight = 'regular', children }: TextIProps) => {
  return (
    <S.Text $color={color} $size={size} $weight={fontWeight}>
      {children}
    </S.Text>
  );
};

export default Text;
