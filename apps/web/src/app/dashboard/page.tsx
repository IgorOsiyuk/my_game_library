'use client';

import Box from '@/atomic/Box';
import Button from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import Grid from '@/atomic/Grid';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import FilterOptions from '@/components/FilterOptions';
import ViewOptions from '@/components/ViewOptions';
import PlusIcon from '@/icons/plus.svg';
import SearchIcon from '@/icons/search.svg';

export default function Dashboard() {
  return (
    <FlexBox $py="s_24" $direction="column" $gap="s_56">
      <FlexBox $align="center" $justify="space-between" $width="100%">
        <Box>
          <Text color="white" size="title_M" fontWeight="bold">
            Моя библиотека
          </Text>
        </Box>
        <FlexBox $gap="s_16">
          <Button
            textSize="button"
            color="grey"
            spacing="s_14"
            onClick={(e) => {
              e.preventDefault();
            }}
            icon={
              <SvgImage $height="20px" $width="20px" $fill="white">
                <SearchIcon />
              </SvgImage>
            }
          >
            Поиск
          </Button>
          <Button
            textSize="button"
            color="accent"
            spacing="s_14"
            onClick={(e) => {
              e.preventDefault();
            }}
            icon={
              <SvgImage $height="20px" $width="20px" $fill="white">
                <PlusIcon />
              </SvgImage>
            }
          >
            Добавить игру
          </Button>
        </FlexBox>
      </FlexBox>
      <FlexBox $direction="column" $gap="s_32">
        <FlexBox $justify="space-between">
          <FilterOptions />
          <ViewOptions />
        </FlexBox>
        <Grid>
          <Box>asds</Box>
        </Grid>
      </FlexBox>
      {/* <div className="mt-8">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-2">
            <StatItem title={'Игр в библиотеке:'} count={20} icon={<FunSmile />} />
          </div>
          <div className="col-span-2">
            <StatItem title={'Пройдено игр:'} count={20} icon={<DoneSmile />} />
          </div>
          <div className="col-span-2">
            <StatItem title={'Играю в:'} count={20} icon={<PlaySmile />} />
          </div>
          <div className="col-span-2">
            <StatItem title={'Заброшено игр:'} count={20} icon={<SadSmile />} />
          </div>
        </div>
      </div>
      <Slider />
      <GameList /> */}
    </FlexBox>
  );
}
