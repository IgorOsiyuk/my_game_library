'use client';
import Button, { SizeEnum } from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import Input from '@/atomic/Input';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { css } from 'styled-components';

type FormValues = {
  email: string;
  password: string;
};

export default function Signin() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (formValues: FormValues) => {
    console.log(formValues);
    const toastId = toast.loading('Загрузка...');
    signIn('credentials', {
      ...formValues,
      redirect: false,
    })
      .then((res) => {
        toast.dismiss(toastId);
        if (res?.error) {
          const errors = JSON.parse(res.error);
          if (Array.isArray(errors.message)) {
            errors.message.forEach((text: string) => toast.error(text));
          } else {
            toast.error(errors.message);
          }
        }
        router.push('/dashboard');
      })
      .catch((err) => {
        toast.dismiss(toastId);
        toast.error(err.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FlexBox $direction="column" $gap="s_24">
        <FlexBox $direction="column" $gap="s_14">
          <Input
            type="email"
            label="Логин"
            placeholder="Логин"
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
          sx={css`
            justify-content: center;
          `}
        >
          Войти
        </Button>
      </FlexBox>
    </form>
  );
}
