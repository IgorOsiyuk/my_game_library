import { FormValues } from '@/actions/createReview';
import { GameSearchResult } from '@/actions/searchGames';
import { useCreateReview } from '@/lib/hooks/useCreateReview';
import { useGameSearch } from '@/lib/hooks/useGameSearch';
import { GameStatus as GameStatusEnum } from '@/types/game';
import CreateReviewModal from '@/ui/CreateReviewModal';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface CreateReviewModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateReviewModalContainer = ({ isOpen, onClose }: CreateReviewModalContainerProps) => {
  const createNewReview = useCreateReview();
  const { searchResults, isSearching, updateSearchQuery, clearSearch, searchQuery } = useGameSearch();
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      title: '',
      genres: '',
      platforms: '',
      releaseDate: '',
      status: GameStatusEnum.IN_PROGRESS,
      difficulty: '',
      playTime: '',
      plot: '',
      gameScore: 0,
      plotScore: 0,
      artScore: 0,
      gameplayScore: 0,
      review: '',
      img: undefined,
      imgUrl: '',
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
    reset,
  } = form;

  const watchedGameScore = watch('gameScore');
  const watchedPlotScore = watch('plotScore');
  const watchedArtScore = watch('artScore');
  const watchedGameplayScore = watch('gameplayScore');
  const watchedGameTitle = watch('title');
  const watchedImgUrl = watch('imgUrl');

  // Обновляем поисковой запрос при изменении названия игры
  useEffect(() => {
    if (watchedGameTitle !== searchQuery) {
      setShowSearchDropdown(true);
      updateSearchQuery(watchedGameTitle);
    }
  }, [watchedGameTitle, updateSearchQuery, searchQuery]);

  // Очищаем поиск при закрытии модалки
  useEffect(() => {
    if (!isOpen) {
      clearSearch();
      reset();
      setShowSearchDropdown(false);
    }
  }, [isOpen, clearSearch, reset]);

  const onSubmit = async (formValues: FormValues) => {
    createNewReview(formValues).then(() => {
      clearSearch();
      reset();
      onClose();
    });
  };

  // Обработчик выбора игры из результатов поиска
  const handleSelectGame = (game: GameSearchResult) => {
    setShowSearchDropdown(false);
    setValue('title', game.title);
    if (game.genres) setValue('genres', game.genres.join(', '));
    if (game.platforms) setValue('platforms', game.platforms.join(', '));
    if (game.releaseDate)
      setValue(
        'releaseDate',
        new Date(game.releaseDate).toLocaleDateString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' }),
      );
    if (game.image) setValue('imgUrl', game.image);
  };

  // Валидационные правила (обновленные для соответствия FormValues)
  const validationRules = {
    // Поле title в форме, но gameTitle в register
    title: {
      required: 'Название игры обязательно для заполнения',
      minLength: {
        value: 2,
        message: 'Название должно содержать минимум 2 символа',
      },
    },
    plot: {
      maxLength: {
        value: 1000,
        message: 'Описание должно содержать максимум 1000 символов',
      },
    },
    review: {
      maxLength: {
        value: 1000,
        message: 'Отзыв должен содержать максимум 1000 символов',
      },
    },
    img: {
      required: !watchedImgUrl ? 'Обложка игры обязательна для загрузки' : false,
      validate: {
        requiredOrPreview: (file: File | null) => {
          if (watchedImgUrl) return true;
          if (!file) return 'Обложка игры обязательна для загрузки';
          return true;
        },
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
    },
  };

  return (
    <CreateReviewModal
      imgPreview={watchedImgUrl}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      control={control}
      errors={errors}
      validationRules={validationRules}
      watchedScores={{
        gameScore: watchedGameScore,
        plotScore: watchedPlotScore,
        artScore: watchedArtScore,
        gameplayScore: watchedGameplayScore,
      }}
      searchResults={searchResults}
      isSearching={isSearching}
      onSelectGame={handleSelectGame}
      showSearchDropdown={showSearchDropdown}
    />
  );
};

export default CreateReviewModalContainer;
