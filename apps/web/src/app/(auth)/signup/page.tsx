'use client';

import FlexBox from '@/atomic/FlexBox';
import Button, { SizeEnum } from '@/components/Button';
import Input from '@/components/Input';
import Text from '@/components/Text';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Signup() {
  const router = useRouter();

  const [value, setValue] = useState('');

  const handleSubmit = async (event: React.BaseSyntheticEvent) => {
    const toastId = toast.loading('Загрузка...');

    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
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
    <form onSubmit={handleSubmit}>
      <FlexBox $direction="column" $gap="s_56">
        <Text color="white" size="small_titles">
          Создай себе свою картотеку!
        </Text>

        <FlexBox $direction="column" $gap="s_24">
          <FlexBox $direction="column" $gap="s_14">
            <Input
              label="name"
              name="name"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ваш ник"
              value={value}
            />
            <Input
              label="email"
              name="email"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ваша почта"
              value={value}
            />
            <Input
              label="password"
              name="password"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Пароль"
              value={value}
            />
          </FlexBox>
          <FlexBox $gap="s_16">
            <Button buttonSize={SizeEnum.FULL} color="dark" spacing="s_24">
              Создать аккаунт
            </Button>
          </FlexBox>
        </FlexBox>
        <Link href={'/signin'}>
          <Text color="white" size="body_S">
            Уже есть аккаунт?
          </Text>
        </Link>
      </FlexBox>
    </form>
  );
}
