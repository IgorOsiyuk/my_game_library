import { FormValues } from '@/actions/createReview';
import CreateReviewModal from '@/components/CreateReviewModal';
import { useCreateReview } from '@/lib/hooks/useCreateReview';
import { Review } from '@/types/reviews';
import { useForm } from 'react-hook-form';

interface UpdateReviewModalContainerIProps {
  isOpen: boolean;
  onClose: () => void;
  review?: Review;
}

const UpdateReviewModalContainer = ({ isOpen, onClose, review }: UpdateReviewModalContainerIProps) => {
  const createNewReview = useCreateReview();
  console.log(review);
  const form = useForm<FormValues>({
    defaultValues: {
      gameTitle: review?.title,
      developer: '',
      genre: '',
      platform: '',
      releaseYear: '',
      gameStatus: review?.status,
      difficulty: review?.difficulty,
      plotDescription: '',
      gameScore: review?.score,
      plotScore: review?.plotScore,
      artScore: review?.artScore,
      gameplayScore: review?.gameplayScore,
      reviewText: review?.review,
      gameImage: review?.img,
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

  const onSubmit = async (formValues: FormValues) => {
    createNewReview(formValues).then(() => {
      onClose();
    });
  };

  // Валидационные правила
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
    },
  };

  return (
    <CreateReviewModal
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
    />
  );
};

export default UpdateReviewModalContainer;
