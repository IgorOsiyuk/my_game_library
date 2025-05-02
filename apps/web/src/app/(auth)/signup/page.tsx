'use client';

import Button, { SizeEnum } from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import Input from '@/atomic/Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { css } from 'styled-components';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export default function Signup() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (formValues: FormValues) => {
    const toastId = toast.loading('Загрузка...');
    try {
      await axios.post('/api/auth/signUp', {
        body: { ...formValues },
      });
      toast.dismiss(toastId);
      router.push('/thanks');
    } catch (error: any) {
      toast.dismiss(toastId);
      if (Array.isArray(error.response.data.message)) {
        error.response.data.message.forEach((text: string) => toast.error(text));
      } else {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FlexBox $direction="column" $gap="s_24">
        <FlexBox $direction="column" $gap="s_14">
          <Input
            type="text"
            label="Имя"
            placeholder="Ваш ник"
            register={register('name', {
              required: true,
            })}
          />
          <Input
            type="email"
            label="Email"
            placeholder="Ваша почта"
            register={register('email', {
              required: true,
            })}
          />
          <Input
            type="password"
            label="Пароль"
            placeholder="Пароль"
            register={register('password', {
              required: true,
            })}
          />
        </FlexBox>
        <Button
          buttonSize={SizeEnum.FULL}
          color="accent"
          spacing="s_24"
          radius="rounded_small"
          textSize="button"
          isActive={false}
          sx={css`
            justify-content: center;
          `}
        >
          Создать аккаунт
        </Button>
      </FlexBox>
    </form>
  );
}
