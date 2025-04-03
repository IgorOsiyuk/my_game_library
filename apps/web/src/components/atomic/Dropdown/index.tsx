import ArrowDownIcon from '@/icons/arrow.svg';
import SvgImage from '../SvgImage';
import Text from '../Text';
import * as S from './style';

interface DropdownProps {
  title: string;
  options: React.ReactNode[];
}

export const Dropdown = ({ title, options }: DropdownProps) => {
  return (
    <S.DropdownContainer>
      <S.DropdownTitle>
        <Text color="white" size="body_M">
          {title}
        </Text>
        <SvgImage $width="16px" $height="16px">
          <ArrowDownIcon />
        </SvgImage>
      </S.DropdownTitle>
      <S.DropdownContentWrapper>
        <S.DropdownContent>
          {options.map((option, index) => (
            <S.DropdownItem key={`${index}-dropdown-item`}>{option}</S.DropdownItem>
          ))}
        </S.DropdownContent>
      </S.DropdownContentWrapper>
    </S.DropdownContainer>
  );
};
