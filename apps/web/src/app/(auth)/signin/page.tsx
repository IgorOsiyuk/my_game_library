'use client';
import Input from '@/components/Input';

import FlexBox from '@/atomic/FlexBox';
import Button, { SizeEnum } from '@/components/Button';
import Text from '@/components/Text';
import useDebounce from '@/lib/hooks/useDebounce';
import { validateEmail } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

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
      <FlexBox $direction="column" $gap="s_56">
        <Text color="white" size="small_titles">
          Привет!
        </Text>

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
          <FlexBox $gap="s_16">
            <Button buttonSize={SizeEnum.FULL} color="accent" spacing="s_24">
              Войти
            </Button>
            <Button
              buttonSize={SizeEnum.FULL}
              color="dark"
              spacing="s_24"
              onClick={(e) => {
                e.preventDefault();
                router.push('/signup');
              }}
            >
              Создать аккаунт
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </form>
  );
}
