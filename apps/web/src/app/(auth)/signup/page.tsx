'use client';

import Button, { SizeEnum } from '@/atomic/Button';

import FlexBox from '@/atomic/FlexBox';
import Input from '@/atomic/Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { css } from 'styled-components';

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
        <Button
          buttonSize={SizeEnum.FULL}
          color="accent"
          spacing="s_24"
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
