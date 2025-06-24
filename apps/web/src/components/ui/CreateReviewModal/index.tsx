import { GameSearchResult } from '@/actions/searchGames';
import Box from '@/atomic/Box';
import Button, { SizeEnum } from '@/atomic/Button';
import { FileUpload } from '@/atomic/FileUpload';
import FlexBox from '@/atomic/FlexBox';
import Input from '@/atomic/Input';
import { Modal } from '@/atomic/Modal';
import TextArea from '@/atomic/TextArea';
import { theme } from '@/styles/theme';
import { GameStatus as GameStatusEnum } from '@/types/game';
import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';
import { css } from 'styled-components';
import GameScoreSlider from '../GameScoreSlider';
import GameSearchDropdown from '../GameSearchDropdown';
import GameStatus from '../GameStatus';

export interface CreateReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  register: UseFormRegister<any>;
  control: Control<any>;
  errors: FieldErrors<any>;
  validationRules: any;
  watchedScores: {
    gameScore: number;
    plotScore: number;
    artScore: number;
    gameplayScore: number;
  };
  imgPreview?: string;
  searchResults?: GameSearchResult[];
  isSearching?: boolean;
  onSelectGame?: (game: GameSearchResult) => void;
  showSearchDropdown?: boolean;
  onDelete?: () => void;
  showDeleteButton?: boolean;
}

const CreateReviewModal = ({
  isOpen,
  onClose,
  onSubmit,
  register,
  control,
  errors,
  validationRules,
  watchedScores,
  imgPreview,
  searchResults = [],
  isSearching = false,
  onSelectGame = () => {},
  showSearchDropdown = false,
  onDelete,
  showDeleteButton = false,
}: CreateReviewModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <FlexBox
          $direction="row"
          $gap="s_20"
          $sx={css`
            padding: 0 157px;
          `}
        >
          <Box $width="448px" $height="448px">
            <FileUpload
              name="gameImage"
              control={control}
              accept="image/*"
              rules={validationRules.gameImage}
              imgPreview={imgPreview}
            />
          </Box>
          <Box $width="100%">
            <FlexBox $direction="column" $gap="s_14" $width="100%">
              <Box
                $sx={css`
                  position: relative;
                `}
              >
                <Input
                  placeholder="Название игры"
                  register={register('gameTitle', validationRules.gameTitle)}
                  isError={!!errors.gameTitle}
                  error={errors.gameTitle?.message as string}
                />
                <GameSearchDropdown
                  searchResults={searchResults}
                  isSearching={isSearching}
                  onSelectGame={onSelectGame}
                  isVisible={showSearchDropdown}
                />
              </Box>
              <FlexBox $direction="row" $gap="s_14">
                <Input
                  placeholder="Разработчик"
                  register={register('developer', validationRules.developer)}
                  isError={!!errors.developer}
                  error={errors.developer?.message as string}
                />
                <Input
                  placeholder="Жанр"
                  register={register('genre', validationRules.genre)}
                  isError={!!errors.genre}
                  error={errors.genre?.message as string}
                />
              </FlexBox>
              <FlexBox $direction="row" $gap="s_14">
                <Input
                  placeholder="Платформа"
                  register={register('platform', validationRules.platform)}
                  isError={!!errors.platform}
                  error={errors.platform?.message as string}
                />
                <Input
                  placeholder="Год выпуска"
                  register={register('releaseYear', validationRules.releaseYear)}
                  isError={!!errors.releaseYear}
                  error={errors.releaseYear?.message as string}
                />
              </FlexBox>
              <Box
                $radius="rounded_small"
                $backgroundColor="dark"
                $py="s_14"
                $px="s_12"
                $sx={css`
                  border: 1px solid ${theme.colors.grey};
                `}
              >
                <FlexBox $direction="row" $gap="s_14" $width="100%">
                  <GameStatus
                    register={register('gameStatus', validationRules.gameStatus)}
                    label={GameStatusEnum.IN_PROGRESS}
                    name="gameStatus"
                    value={GameStatusEnum.IN_PROGRESS}
                  />
                  <GameStatus
                    register={register('gameStatus', validationRules.gameStatus)}
                    label={GameStatusEnum.COMPLETED}
                    name="gameStatus"
                    value={GameStatusEnum.COMPLETED}
                  />
                  <GameStatus
                    register={register('gameStatus', validationRules.gameStatus)}
                    label={GameStatusEnum.ABANDONED}
                    name="gameStatus"
                    value={GameStatusEnum.ABANDONED}
                  />
                  <GameStatus
                    register={register('gameStatus', validationRules.gameStatus)}
                    label={GameStatusEnum.PLANNED}
                    name="gameStatus"
                    value={GameStatusEnum.PLANNED}
                  />
                </FlexBox>
              </Box>
              <Input
                placeholder="Сложность"
                register={register('difficulty', validationRules.difficulty)}
                isError={!!errors.difficulty}
                error={errors.difficulty?.message as string}
              />
              <Box
                $sx={css`
                  & textarea {
                    min-height: 206px;
                  }
                `}
              >
                <TextArea
                  placeholder="Сюжет"
                  register={register('plotDescription', validationRules.plotDescription)}
                  isError={!!errors.plotDescription}
                  error={errors.plotDescription?.message as string}
                />
              </Box>
              <FlexBox $direction="row" $gap="s_14">
                <GameScoreSlider
                  label="Оцени игру"
                  value={watchedScores.gameScore}
                  register={register('gameScore', validationRules.gameScore)}
                />
                <GameScoreSlider
                  label="Оценка сюжет"
                  value={watchedScores.plotScore}
                  register={register('plotScore', validationRules.plotScore)}
                />
              </FlexBox>
              <FlexBox $direction="row" $gap="s_14">
                <GameScoreSlider
                  label="Оценка art"
                  value={watchedScores.artScore}
                  register={register('artScore', validationRules.artScore)}
                />
                <GameScoreSlider
                  label="Оценка геймплей"
                  value={watchedScores.gameplayScore}
                  register={register('gameplayScore', validationRules.gameplayScore)}
                />
              </FlexBox>
              <Box
                $sx={css`
                  & textarea {
                    min-height: 206px;
                  }
                `}
              >
                <TextArea
                  placeholder="Напиши отзыв"
                  register={register('reviewText', validationRules.reviewText)}
                  isError={!!errors.reviewText}
                  error={errors.reviewText?.message as string}
                />
              </Box>
            </FlexBox>
            <FlexBox
              $direction="row"
              $gap="s_24"
              $width="100%"
              $mt="s_24"
              $sx={css`
                & > button {
                  align-items: center;
                  justify-content: center;
                }
                button:disabled {
                  opacity: 0.5;
                  cursor: not-allowed;
                }
              `}
            >
              <Button type="submit" buttonSize={SizeEnum.FULL} color="accent" spacing="s_24">
                Сохранить
              </Button>
              {showDeleteButton && (
                <Button type="button" buttonSize={SizeEnum.FULL} color="grey" spacing="s_24" onClick={onDelete}>
                  Delete game
                </Button>
              )}
            </FlexBox>
          </Box>
        </FlexBox>
      </form>
    </Modal>
  );
};

export default CreateReviewModal;
