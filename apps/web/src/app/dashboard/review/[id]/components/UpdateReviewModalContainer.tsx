import { UpdateFormValues } from '@/actions/updateReview';
import deleteReviewClient from '@/lib/api/deleteReview';
import { useAppData } from '@/lib/hooks/useAppData';
import { useUpdateReview } from '@/lib/hooks/useUpdateReview';
import { Review } from '@/types/reviews';
import CreateReviewModal from '@/ui/CreateReviewModal';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface UpdateReviewModalContainerIProps {
  onClose: () => void;
  review?: Review;
}

const UpdateReviewModalContainer = ({ onClose, review }: UpdateReviewModalContainerIProps) => {
  const updateExistingReview = useUpdateReview();
  const router = useRouter();
  const { removeReview } = useAppData();

  const form = useForm<UpdateFormValues>({
    defaultValues: {
      title: review?.title,
      playTime: review?.playTime,
      genres: review?.genres,
      platforms: review?.platforms,
      releaseDate: review?.releaseDate,
      status: review?.status,
      difficulty: review?.difficulty,
      plot: review?.plot,
      gameScore: review?.gameScore || 0,
      plotScore: review?.plotScore || 0,
      artScore: review?.artScore || 0,
      gameplayScore: review?.gameplayScore || 0,
      review: review?.review || '',
      img: undefined,
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
      // Обновляем store: удаляем отзыв из списка, обнуляем selectedReview и пересчитываем статистику
      removeReview(review.id);

      onClose();
      router.push('/dashboard');
    }
  };

  // Валидационные правила (изображение не обязательно при обновлении)
  const validationRules = {
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
      isOpen={true}
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
      updatedReview={true}
    />
  );
};

export default UpdateReviewModalContainer;
