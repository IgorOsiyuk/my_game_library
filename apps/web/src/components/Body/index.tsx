import * as S from './style';

interface BodyIProps {
  children: React.ReactNode;
}

const Body = ({ children }: BodyIProps) => {
  return <S.Body>{children}</S.Body>;
};

export default Body;
