'use client';

import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import Text from '@/atomic/Text';
import SearchComponent from '@/components/SearchComponent';
import { useState } from 'react';
export default function FindGame() {
  const [gameScore, setGameScore] = useState(0);
  return (
    <FlexBox $py="s_24" $direction="column" $gap="s_36">
      <FlexBox $direction="column" $gap="s_40" $width="100%">
        <Box>
          <Text color="white" size="title_M" fontWeight="bold">
            Найти игру
          </Text>
        </Box>
        <SearchComponent />
      </FlexBox>
      {/* <FlexBox $direction="column" $gap="s_24">
        <Text color="white" size="body_M" fontWeight="light">
          10 совпадений
        </Text>
        <Grid $width="100%" $gap="s_24" $columns="repeat(5,1fr)">
          {[].map((game) => (
            <GameCard key={game.id} title={game.title} genres={game.genres} rating={game.rating} image={game.image} />
          ))}
        </Grid>
      </FlexBox> */}
      {/* <GameScoreSlider
        min={0}
        max={5}
        step={0.1}
        defaultValue={0}
        onChange={setGameScore}
        value={gameScore}
        label="Оцени игру"
      /> */}
    </FlexBox>
  );
}
