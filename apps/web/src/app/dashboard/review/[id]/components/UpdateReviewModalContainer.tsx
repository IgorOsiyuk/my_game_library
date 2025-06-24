import { UpdateFormValues } from '@/actions/updateReview';
import CreateReviewModal from '@/components/CreateReviewModal';
import deleteReviewClient from '@/lib/api/deleteReview';
import { useAppData } from '@/lib/hooks/useAppData';
import { useUpdateReview } from '@/lib/hooks/useUpdateReview';
import { calculateStats } from '@/lib/utils';
import { Review } from '@/types/reviews';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface UpdateReviewModalContainerIProps {
  isOpen: boolean;
  onClose: () => void;
  review?: Review;
}

const UpdateReviewModalContainer = ({ isOpen, onClose, review }: UpdateReviewModalContainerIProps) => {
  const updateExistingReview = useUpdateReview();
  const router = useRouter();
  const { removeReview, setSelectedReview, reviews, setStats } = useAppData();

  const form = useForm<UpdateFormValues>({
    defaultValues: {
      gameTitle: review?.title,
      developer: '',
      genre: '',
      platform: '',
      releaseYear: '',
      gameStatus: review?.status,
      difficulty: review?.difficulty,
      plotDescription: '',
      gameScore: review?.score || 0,
      plotScore: review?.plotScore || 0,
      artScore: review?.artScore || 0,
      gameplayScore: review?.gameplayScore || 0,
      reviewText: review?.review || '',
      gameImage: undefined,
      imgUrl: review?.img,
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

  const onSubmit = async (formValues: UpdateFormValues) => {
    const dataToSend = {
      ...formValues,
      id: review?.id || '',
    };
    updateExistingReview(dataToSend).then(() => {
      onClose();
    });
  };

  const handleDelete = async () => {
    if (!review?.id) return;

    const result = await deleteReviewClient(review.id);
    if (result?.success) {
      // Обновляем store: удаляем отзыв из списка и обнуляем selectedReview
      removeReview(review.id);
      setSelectedReview(null);

      // Пересчитываем статистику
      const updatedReviews = reviews.filter((r) => r.id !== review.id);
      const newStats = calculateStats(updatedReviews);
      setStats(newStats);

      onClose();
      router.push('/dashboard');
    }
  };

  // Валидационные правила (изображение не обязательно при обновлении)
  const validationRules = {
    gameTitle: {
      required: 'Название игры обязательно для заполнения',
      minLength: {
        value: 2,
        message: 'Название должно содержать минимум 2 символа',
      },
    },
    developer: {
      required: false, // Не обязательно при обновлении
    },
    genre: {
      required: false, // Не обязательно при обновлении
    },
    platform: {
      required: false, // Не обязательно при обновлении
    },
    releaseYear: {
      required: false, // Не обязательно при обновлении
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
      required: false, // Не обязательно при обновлении
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
      required: false, // Изображение не обязательно при обновлении
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
      imgPreview={watch('imgUrl') || ''}
      watchedScores={{
        gameScore: watchedGameScore,
        plotScore: watchedPlotScore,
        artScore: watchedArtScore,
        gameplayScore: watchedGameplayScore,
      }}
      onDelete={handleDelete}
      showDeleteButton={true}
    />
  );
};

export default UpdateReviewModalContainer;
