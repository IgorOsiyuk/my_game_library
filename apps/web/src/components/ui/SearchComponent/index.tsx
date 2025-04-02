import Box from '@/atomic/Box';
import Checkbox from '@/atomic/Checkbox';
import FlexBox from '@/atomic/FlexBox';
import Input from '@/atomic/Input';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import CloseIcon from '@/icons/close.svg';
import SearchIcon from '@/icons/search.svg';
import { useState } from 'react';
import { css } from 'styled-components';

const SelectedFilterItem = () => {
  return (
    <Box $radius="rounded_small" $backgroundColor="accent" $px="s_12" $py="s_8">
      <FlexBox $align="flex-end" $gap="s_8">
        <Text color="white" size="body_M" fontWeight="medium">
          Mac
        </Text>
        <Box
          $height="16px"
          $width="16px"
          as="button"
          onClick={() => {
            console.log('clicked');
          }}
          $sx={css`
            cursor: pointer;
          `}
        >
          <SvgImage $height="100%" $width="100%" $fill="white">
            <CloseIcon />
          </SvgImage>
        </Box>
      </FlexBox>
    </Box>
  );
};

const SelectedFilters = () => {
  return (
    <FlexBox $gap="s_12">
      <SelectedFilterItem />
      <SelectedFilterItem />
      <SelectedFilterItem />
    </FlexBox>
  );
};

const FilterItem = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Checkbox
      label="Выбрать опцию"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
      name="filter-option"
    />
  );
};

const Filters = () => {
  return (
    <FlexBox $gap="s_12">
      <FilterItem />
      <FilterItem />
      <FilterItem />
    </FlexBox>
  );
};

const SearchComponent = () => {
  return (
    <FlexBox $width="100%" $height="100%" $gap="s_32" $direction="column" $align="flex-start">
      <Input
        name="search"
        onChange={() => {}}
        value=""
        placeholder="Поиск"
        icon={
          <Box
            $backgroundColor="accent"
            $radius="rounded_small"
            $padding="s_12"
            $height="44px"
            $width="44px"
            $sx={css`
              flex-shrink: 0;
            `}
          >
            <SvgImage $height="100%" $width="100%">
              <SearchIcon />
            </SvgImage>
          </Box>
        }
      />
      <FlexBox $direction="column" $gap="s_44">
        <Filters />
        <SelectedFilters />
      </FlexBox>
    </FlexBox>
  );
};

export default SearchComponent;
