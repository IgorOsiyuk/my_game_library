import Box from '@/atomic/Box';
import Button, { SizeEnum } from '@/atomic/Button';
import { FileUpload } from '@/atomic/FileUpload';
import FlexBox from '@/atomic/FlexBox';
import Input from '@/atomic/Input';
import { Modal } from '@/atomic/Modal';
import TextArea from '@/atomic/TextArea';
import { theme } from '@/styles/theme';
import { GameStatus as GameStatusEnum } from '@/types/game';
import { useForm } from 'react-hook-form';
import { css } from 'styled-components';
import GameScoreSlider from '../GameScoreSlider';
import GameStatus from '../GameStatus';

interface CreateReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormValues = {
  gameTitle: string;
  developer: string;
  genre: string;
  platform: string;
  releaseYear: string;
  gameStatus: string;
  difficulty: string;
  plotDescription: string;
  gameScore: number;
  plotScore: number;
  artScore: number;
  gameplayScore: number;
  reviewText: string;
  gameImage?: File;
};

const CreateReviewModal = ({ isOpen, onClose }: CreateReviewModalProps) => {
  const form = useForm<FormValues>({
    defaultValues: {
      gameTitle: '',
      developer: '',
      genre: '',
      platform: '',
      releaseYear: '',
      gameStatus: GameStatusEnum.IN_PROGRESS,
      difficulty: '',
      plotDescription: '',
      gameScore: 0,
      plotScore: 0,
      artScore: 0,
      gameplayScore: 0,
      reviewText: '',
      gameImage: undefined,
    },
    mode: 'onChange',
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    control,
  } = form;

  const watchedGameScore = watch('gameScore');
  const watchedPlotScore = watch('plotScore');
  const watchedArtScore = watch('artScore');
  const watchedGameplayScore = watch('gameplayScore');

  const onSubmit = (formValues: FormValues) => {
    console.log('Form Data:', formValues);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              rules={{
                required: 'Обложка игры обязательна для загрузки',
                validate: {
                  fileSize: (file: File | null) => {
                    if (!file) return true;
                    if (file.size > 1 * 1024 * 1024) {
                      return 'Файл слишком большой. Максимальный размер: 1MB';
                    }
                    return true;
                  },
                  fileType: (file: File | null) => {
                    if (!file) return true;
                    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
                      return 'Неподдерживаемый формат файла';
                    }
                    return true;
                  },
                },
              }}
            />
          </Box>
          <Box $width="100%">
            <FlexBox $direction="column" $gap="s_14" $width="100%">
              <Input
                placeholder="Название игры"
                register={register('gameTitle', {
                  required: 'Название игры обязательно для заполнения',
                  minLength: {
                    value: 2,
                    message: 'Название должно содержать минимум 2 символа',
                  },
                })}
                isError={!!errors.gameTitle}
                error={errors.gameTitle?.message}
              />
              <FlexBox $direction="row" $gap="s_14">
                <Input
                  placeholder="Разработчик"
                  register={register('developer', {
                    required: 'Разработчик обязателен для заполнения',
                  })}
                  isError={!!errors.developer}
                  error={errors.developer?.message}
                />
                <Input
                  placeholder="Жанр"
                  register={register('genre', {
                    required: 'Жанр обязателен для заполнения',
                  })}
                  isError={!!errors.genre}
                  error={errors.genre?.message}
                />
              </FlexBox>
              <FlexBox $direction="row" $gap="s_14">
                <Input
                  placeholder="Платформа"
                  register={register('platform', {
                    required: 'Платформа обязательна для заполнения',
                  })}
                  isError={!!errors.platform}
                  error={errors.platform?.message}
                />
                <Input
                  placeholder="Год выпуска"
                  register={register('releaseYear', {
                    required: 'Год выпуска обязателен для заполнения',
                    pattern: {
                      value: /^\d{4}$/,
                      message: 'Год должен состоять из 4 цифр',
                    },
                    min: {
                      value: 1970,
                      message: 'Год не может быть меньше 1970',
                    },
                    max: {
                      value: new Date().getFullYear() + 5,
                      message: `Год не может быть больше ${new Date().getFullYear() + 5}`,
                    },
                  })}
                  isError={!!errors.releaseYear}
                  error={errors.releaseYear?.message}
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
                    register={register('gameStatus', { required: true })}
                    label={GameStatusEnum.IN_PROGRESS}
                    name="gameStatus"
                    value={GameStatusEnum.IN_PROGRESS}
                  />
                  <GameStatus
                    register={register('gameStatus', { required: true })}
                    label={GameStatusEnum.COMPLETED}
                    name="gameStatus"
                    value={GameStatusEnum.COMPLETED}
                  />
                  <GameStatus
                    register={register('gameStatus', { required: true })}
                    label={GameStatusEnum.ABANDONED}
                    name="gameStatus"
                    value={GameStatusEnum.ABANDONED}
                  />
                  <GameStatus
                    register={register('gameStatus', { required: true })}
                    label={GameStatusEnum.PLANNED}
                    name="gameStatus"
                    value={GameStatusEnum.PLANNED}
                  />
                </FlexBox>
              </Box>
              <Input
                placeholder="Сложность"
                register={register('difficulty', {
                  required: 'Сложность обязательна для заполнения',
                })}
                isError={!!errors.difficulty}
                error={errors.difficulty?.message}
              />
              <Box
                $sx={css`
                  min-height: 206px;
                `}
              >
                <TextArea
                  placeholder="Сюжет"
                  register={register('plotDescription', {
                    required: 'Описание сюжета обязательно для заполнения',
                    minLength: {
                      value: 10,
                      message: 'Описание должно содержать минимум 10 символов',
                    },
                  })}
                  isError={!!errors.plotDescription}
                  error={errors.plotDescription?.message}
                />
              </Box>
              <FlexBox $direction="row" $gap="s_14">
                <GameScoreSlider
                  label="Оцени игру"
                  value={watchedGameScore}
                  register={register('gameScore', { required: true, valueAsNumber: true })}
                />
                <GameScoreSlider
                  label="Оценка сюжет"
                  value={watchedPlotScore}
                  register={register('plotScore', { required: true, valueAsNumber: true })}
                />
              </FlexBox>
              <FlexBox $direction="row" $gap="s_14">
                <GameScoreSlider
                  label="Оценка art"
                  value={watchedArtScore}
                  register={register('artScore', { required: true, valueAsNumber: true })}
                />
                <GameScoreSlider
                  label="Оценка геймплей"
                  value={watchedGameplayScore}
                  register={register('gameplayScore', { required: true, valueAsNumber: true })}
                />
              </FlexBox>
              <Box
                $sx={css`
                  min-height: 206px;
                `}
              >
                <TextArea
                  placeholder="Напиши отзыв"
                  register={register('reviewText', {
                    required: 'Отзыв обязателен для заполнения',
                    minLength: {
                      value: 20,
                      message: 'Отзыв должен содержать минимум 20 символов',
                    },
                  })}
                  isError={!!errors.reviewText}
                  error={errors.reviewText?.message}
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
              `}
            >
              <Button type="submit" buttonSize={SizeEnum.FULL} color="accent" spacing="s_24">
                Save
              </Button>
              <Button type="button" buttonSize={SizeEnum.FULL} color="grey" spacing="s_24">
                Delete game
              </Button>
            </FlexBox>
          </Box>
        </FlexBox>
      </form>
    </Modal>
  );
};

export default CreateReviewModal;
