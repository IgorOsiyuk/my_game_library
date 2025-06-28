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
  updatedReview?: boolean;
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
  updatedReview = false,
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
              name="img"
              control={control}
              accept="image/*"
              rules={validationRules.img}
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
                  register={register('title', validationRules.title)}
                  isError={!!errors.title}
                  error={errors.title?.message as string}
                  disabled={updatedReview}
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
                  placeholder="Жанр"
                  register={register('genres', validationRules.genres)}
                  isError={!!errors.genres}
                  error={errors.genres?.message as string}
                />
                {/* </FlexBox>
              <FlexBox $direction="row" $gap="s_14"> */}
                <Input
                  placeholder="Платформа"
                  register={register('platforms', validationRules.platforms)}
                  isError={!!errors.platforms}
                  error={errors.platforms?.message as string}
                />
                <Input
                  placeholder="Год выпуска"
                  register={register('releaseDate', validationRules.releaseDate)}
                  isError={!!errors.releaseDate}
                  error={errors.releaseDate?.message as string}
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
                    register={register('status', validationRules.status)}
                    label={GameStatusEnum.IN_PROGRESS}
                    name="status"
                    value={GameStatusEnum.IN_PROGRESS}
                  />
                  <GameStatus
                    register={register('status', validationRules.status)}
                    label={GameStatusEnum.COMPLETED}
                    name="status"
                    value={GameStatusEnum.COMPLETED}
                  />
                  <GameStatus
                    register={register('status', validationRules.status)}
                    label={GameStatusEnum.ABANDONED}
                    name="status"
                    value={GameStatusEnum.ABANDONED}
                  />
                  <GameStatus
                    register={register('status', validationRules.status)}
                    label={GameStatusEnum.PLANNED}
                    name="status"
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
              <Input
                placeholder="Затраченное время (в часах)"
                register={register('playTime', validationRules.playTime)}
                isError={!!errors.playTime}
                error={errors.playTime?.message as string}
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
                  register={register('plot', validationRules.plot)}
                  isError={!!errors.plot}
                  error={errors.plot?.message as string}
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
                  register={register('review', validationRules.review)}
                  isError={!!errors.review}
                  error={errors.review?.message as string}
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
              {updatedReview && (
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
