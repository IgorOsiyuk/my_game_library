import { FormValues } from '@/actions/createReview';
import { GameSearchResult } from '@/actions/searchGames';
import CreateReviewModal from '@/components/CreateReviewModal';
import { useCreateReview } from '@/lib/hooks/useCreateReview';
import { useGameSearch } from '@/lib/hooks/useGameSearch';
import { GameStatus as GameStatusEnum } from '@/types/game';
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
  const watchedGameTitle = watch('gameTitle');
  const watchedImgUrl = watch('imgUrl');

  // Обновляем поисковой запрос при изменении названия игры
  // НО НЕ во время выбора игры из списка
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
  }, [isOpen, clearSearch]);

  const onSubmit = async (formValues: FormValues) => {
    createNewReview(formValues).then(() => {
      clearSearch();
      reset();
      onClose();
    });
  };

  // Обработчик выбора игры из результатов поиска
  const handleSelectGame = (game: GameSearchResult) => {
    // Сначала заполняем все поля
    setShowSearchDropdown(false);
    setValue('gameTitle', game.title);
    if (game.developer) setValue('developer', game.developer);
    if (game.genre) setValue('genre', game.genre);
    if (game.platform) setValue('platform', game.platform);
    if (game.releaseYear) setValue('releaseYear', game.releaseYear);
    if (game.image) setValue('imgUrl', game.image);

    setValue('developer', 'game.developer');
    setValue('genre', 'game.genre');
    setValue('platform', 'game.platform');
    setValue('releaseYear', '2022');
    setValue('gameStatus', GameStatusEnum.COMPLETED);
    setValue('difficulty', 'Normal');
    setValue('plotDescription', 'testtestasdasdasdastestasdasdasdastestasdasdasdastestasdasdasdastestasdasdasdas');
    setValue('gameScore', 5);
    setValue('plotScore', 5);
    setValue('artScore', 5);
    setValue('gameplayScore', 5);
    setValue(
      'reviewText',
      'testasdasdasdastestasdasdasdastestasdasdasdastestasdasdasdastestasdasdasdastestasdasdasdas',
    );

    // Даем время на обновление полей, затем закрываем поиск
  };

  // Валидационные правила (динамические)
  const validationRules = {
    gameTitle: {
      required: 'Название игры обязательно для заполнения',
      minLength: {
        value: 2,
        message: 'Название должно содержать минимум 2 символа',
      },
    },
    developer: {
      required: 'Разработчик обязателен для заполнения',
    },
    genre: {
      required: 'Жанр обязателен для заполнения',
    },
    platform: {
      required: 'Платформа обязательна для заполнения',
    },
    releaseYear: {
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
    },
    gameStatus: {
      required: true,
    },
    difficulty: {
      required: 'Сложность обязательна для заполнения',
    },
    plotDescription: {
      required: 'Описание сюжета обязательно для заполнения',
      minLength: {
        value: 10,
        message: 'Описание должно содержать минимум 10 символов',
      },
    },
    gameScore: {
      required: true,
      valueAsNumber: true,
    },
    plotScore: {
      required: true,
      valueAsNumber: true,
    },
    artScore: {
      required: true,
      valueAsNumber: true,
    },
    gameplayScore: {
      required: true,
      valueAsNumber: true,
    },
    reviewText: {
      required: 'Отзыв обязателен для заполнения',
      minLength: {
        value: 20,
        message: 'Отзыв должен содержать минимум 20 символов',
      },
    },
    gameImage: {
      // Файл обязателен только если нет imgUrl из поиска
      required: !watchedImgUrl ? 'Обложка игры обязательна для загрузки' : false,
      validate: {
        // Если есть imgUrl из поиска, то файл необязателен
        requiredOrPreview: (file: File | null) => {
          if (watchedImgUrl) return true; // Есть превью из поиска - валидация пройдена
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
      // Поисковые пропсы
      searchResults={searchResults}
      isSearching={isSearching}
      onSelectGame={handleSelectGame}
      showSearchDropdown={showSearchDropdown}
    />
  );
};

export default CreateReviewModalContainer;
