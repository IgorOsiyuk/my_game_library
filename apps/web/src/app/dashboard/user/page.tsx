'use client';

import Box from '@/atomic/Box';
import Button, { SizeEnum } from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import Image from '@/atomic/Image';
import Input from '@/atomic/Input';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import EyeOpenedIcon from '@/icons/eye_opened.svg';
import DefaultProfileImage from '@/images/default_profile_image.jpg';
import { useAppData } from '@/lib/hooks/useAppData';
import { useGetUserData } from '@/lib/hooks/useGetUserData';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { css } from 'styled-components';

interface UserFormValues {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function User() {
  useGetUserData();
  const { user, updateUser } = useAppData();

  const form = useForm<UserFormValues>({
    defaultValues: {
      nickname: user.nickname,
      email: user.email,
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (user) {
      setValue('nickname', user.nickname);
      setValue('email', user.email);
    }
  }, [user, setValue]);

  const onSubmit = async (formValues: UserFormValues) => {
    try {
      // Обновляем данные пользователя в store
      if (formValues.nickname !== user.nickname) {
        updateUser({
          nickname: formValues.nickname,
        });
      }

      // Здесь можно добавить API вызов для сохранения на сервере
      console.log('Сохранение данных пользователя:', formValues);
    } catch (error) {
      console.error('Ошибка при сохранении:', error);
    }
  };

  // Валидационные правила
  const validationRules = {
    nickname: {
      minLength: {
        value: 2,
        message: 'Никнейм должен содержать минимум 2 символа',
      },
      maxLength: {
        value: 50,
        message: 'Никнейм должен содержать максимум 50 символов',
      },
    },
    password: {
      minLength: {
        value: 6,
        message: 'Пароль должен содержать минимум 6 символов',
      },
    },
    confirmPassword: {
      minLength: {
        value: 6,
        message: 'Пароль должен содержать минимум 6 символов',
      },
    },
  };

  return (
    <FlexBox $py="s_24" $direction="column" $gap="s_80" $align="center">
      <FlexBox $align="center" $justify="space-between" $width="100%">
        <Box>
          <Text color="white" size="title_M" fontWeight="bold">
            Аккаунт
          </Text>
        </Box>
      </FlexBox>

      <FlexBox
        $direction="column"
        $gap="s_32"
        $width="100%"
        $sx={css`
          max-width: 1074px;
        `}
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <FlexBox $direction="column" $gap="s_24">
            <Box $backgroundColor="darkSecondary" $padding="s_32" $radius="rounded_xmedium">
              <FlexBox $direction="column" $gap="s_32">
                <Box
                  $height="104px"
                  $width="104px"
                  $sx={css`
                    border-radius: 50%;
                    overflow: hidden;
                  `}
                >
                  <Image alt="profile-image" {...DefaultProfileImage} height={104} width={104} />
                </Box>
                <FlexBox $direction="column" $gap="s_24">
                  <Input
                    label="Username"
                    placeholder="Username"
                    register={register('nickname', validationRules.nickname)}
                    isError={!!errors.nickname}
                    error={errors.nickname?.message}
                  />
                  <Input label="Email" placeholder="Email" type="email" register={register('email')} disabled />
                </FlexBox>
              </FlexBox>
            </Box>
            <Box $backgroundColor="darkSecondary" $padding="s_32" $radius="rounded_xmedium">
              <FlexBox $direction="column" $gap="s_24">
                <Text color="white" size="small_titles" fontWeight="bold">
                  Пароль
                </Text>

                <Input
                  label="Текущий пароль"
                  placeholder="Текущий пароль"
                  type="password"
                  register={register('password', validationRules.password)}
                  isError={!!errors.password}
                  error={errors.password?.message}
                  icon={
                    <SvgImage $height="20px" $width="20px" $fill="white">
                      <EyeOpenedIcon />
                    </SvgImage>
                  }
                />
                <Input
                  label="Новый пароль"
                  placeholder="Новый пароль"
                  type="password"
                  register={register('confirmPassword', validationRules.confirmPassword)}
                  isError={!!errors.confirmPassword}
                  error={errors.confirmPassword?.message}
                  icon={
                    <SvgImage $height="20px" $width="20px" $fill="white">
                      <EyeOpenedIcon />
                    </SvgImage>
                  }
                />
              </FlexBox>
            </Box>
            <FlexBox $direction="row" $gap="s_24">
              <Button
                type="submit"
                buttonSize={SizeEnum.FULL}
                color="accent"
                spacing="s_24"
                sx={css`
                  justify-content: center;
                `}
              >
                Сохранить изменения
              </Button>
              {/* <Button
                type="button"
                buttonSize={SizeEnum.FULL}
                color="dark"
                spacing="s_24"
                sx={({ theme }) => css`
                  justify-content: center;
                  border: 1px solid ${theme.colors.grey};
                  color: ${theme.colors.grey};
                  &:hover {
                    background-color: ${theme.colors.grey};
                    color: ${theme.colors.white};
                  }
                `}
              >
                Удалить аккаунт
              </Button> */}
            </FlexBox>
          </FlexBox>
        </form>
      </FlexBox>
    </FlexBox>
  );
}
