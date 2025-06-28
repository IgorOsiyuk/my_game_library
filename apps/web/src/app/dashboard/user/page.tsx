'use client';

import Box from '@/atomic/Box';
import Button, { SizeEnum } from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import Image from '@/atomic/Image';
import Input from '@/atomic/Input';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import EyeClosedIcon from '@/icons/eye_closed.svg';
import EyeOpenedIcon from '@/icons/eye_opened.svg';
import DefaultProfileImage from '@/images/default_profile_image.jpg';
import { useGetUserData } from '@/lib/hooks/api/useGetUserData';
import { useUpdateUserData } from '@/lib/hooks/api/useUpdateUserData';
import { useAppData } from '@/lib/hooks/useAppData';
import { useEffect, useState } from 'react';
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
  const { user } = useAppData();
  const updateUserData = useUpdateUserData();
  // Состояния для управления видимостью паролей
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

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
    reset,
  } = form;

  useEffect(() => {
    if (user) {
      setValue('nickname', user.nickname);
      setValue('email', user.email);
    }
  }, [user, setValue]);

  const onSubmit = async (formValues: UserFormValues) => {
    await updateUserData({
      name: formValues.nickname,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
    }).finally(() => {
      reset();
    });
  };

  // Функции переключения видимости паролей
  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
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
                    type="text"
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
                  label="Новый пароль"
                  placeholder="Новый пароль"
                  type={showCurrentPassword ? 'text' : 'password'}
                  register={register('password', validationRules.password)}
                  isError={!!errors.password}
                  error={errors.password?.message}
                  icon={
                    <Box
                      $sx={css`
                        cursor: pointer;
                        &:hover {
                          opacity: 0.7;
                        }
                        transition: opacity 0.3s ease;
                      `}
                      onClick={toggleCurrentPasswordVisibility}
                    >
                      <SvgImage $height="20px" $width="20px" $fill="white">
                        {showCurrentPassword ? <EyeClosedIcon /> : <EyeOpenedIcon />}
                      </SvgImage>
                    </Box>
                  }
                />
                <Input
                  label="Повторите новый пароль"
                  placeholder="Повторите новый пароль"
                  type={showNewPassword ? 'text' : 'password'}
                  register={register('confirmPassword', validationRules.confirmPassword)}
                  isError={!!errors.confirmPassword}
                  error={errors.confirmPassword?.message}
                  icon={
                    <Box
                      $sx={css`
                        cursor: pointer;
                        &:hover {
                          opacity: 0.7;
                        }
                        transition: opacity 0.3s ease;
                      `}
                      onClick={toggleNewPasswordVisibility}
                    >
                      <SvgImage $height="20px" $width="20px" $fill="white">
                        {showNewPassword ? <EyeClosedIcon /> : <EyeOpenedIcon />}
                      </SvgImage>
                    </Box>
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
