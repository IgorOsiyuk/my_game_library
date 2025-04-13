'use client';
import Button, { SizeEnum } from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import Input from '@/atomic/Input';
import useDebounce from '@/lib/hooks/useDebounce';
import { validateEmail } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { css } from 'styled-components';

export default function Signin() {
  const router = useRouter();

  const handleSubmit = async (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
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
  const [value, setValue] = useState('');
  const debouncedEmail = useDebounce(value, 500);

  useEffect(() => {
    if (!validateEmail(debouncedEmail)) {
      toast.error('Введите правильный email');
    }
  }, [debouncedEmail]);

  return (
    <form onSubmit={handleSubmit}>
      <FlexBox $direction="column" $gap="s_24">
        <FlexBox $direction="column" $gap="s_14">
          <Input
            label="test"
            name="test"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Логин"
            value={value}
          />
          <Input
            label="test"
            name="test"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Пароль"
            value={value}
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
