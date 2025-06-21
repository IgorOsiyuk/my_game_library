import { GameSearchResult } from '@/actions/searchGames';
import Box from '@/atomic/Box';
import FlexBox from '@/atomic/FlexBox';
import Text from '@/atomic/Text';
import { css } from 'styled-components';

interface GameSearchDropdownProps {
  searchResults: GameSearchResult[];
  isSearching: boolean;
  onSelectGame: (game: GameSearchResult) => void;
  isVisible: boolean;
}

const GameSearchDropdown = ({ searchResults, isSearching, onSelectGame, isVisible }: GameSearchDropdownProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <Box
      $sx={css`
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 1000;
        background: #1a1a1a;
        border: 1px solid #333;
        border-radius: 8px;
        max-height: 300px;
        overflow-y: auto;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      `}
    >
      {isSearching ? (
        <Box $px="s_12" $py="s_12">
          <Text color="greySecondary" size="body_M">
            Поиск...
          </Text>
        </Box>
      ) : searchResults.length === 0 ? (
        <Box $px="s_12" $py="s_12">
          <Text color="greySecondary" size="body_M">
            Игры не найдены
          </Text>
        </Box>
      ) : (
        searchResults.map((game) => (
          <Box
            key={game.id}
            $px="s_12"
            $py="s_12"
            $sx={css`
              cursor: pointer;
              border-bottom: 1px solid #333;
              &:hover {
                background: #333;
              }
              &:last-child {
                border-bottom: none;
              }
            `}
            onClick={() => onSelectGame(game)}
          >
            <FlexBox $gap="s_12" $align="center">
              <FlexBox
                $direction="column"
                $gap="s_4"
                $sx={css`
                  flex: 1;
                `}
              >
                <Text color="white" size="body_M" fontWeight="medium">
                  {game.title}
                </Text>
                <FlexBox $gap="s_8">
                  {game.developer && (
                    <Text color="greySecondary" size="body_S">
                      {game.developer}
                    </Text>
                  )}
                  {game.releaseYear && (
                    <Text color="greySecondary" size="body_S">
                      {game.releaseYear}
                    </Text>
                  )}
                </FlexBox>
                {game.platform && (
                  <Text color="greySecondary" size="body_S">
                    {game.platform}
                  </Text>
                )}
              </FlexBox>
            </FlexBox>
          </Box>
        ))
      )}
    </Box>
  );
};

export default GameSearchDropdown;
