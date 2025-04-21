'use client';

import Box from '@/atomic/Box';
import Button, { SizeEnum } from '@/atomic/Button';
import FlexBox from '@/atomic/FlexBox';
import Image from '@/atomic/Image';
import Input from '@/atomic/Input';
import SvgImage from '@/atomic/SvgImage';
import Text from '@/atomic/Text';
import EyeIcon from '@/icons/eye.svg';
import PencilIcon from '@/icons/pencil.svg';
import DefaultProfileImage from '@/images/default_profile_image.jpg';
import { useState } from 'react';
import { css } from 'styled-components';

export default function User() {
  const [value, setValue] = useState('');
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
                  name="username"
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Username"
                  value={value}
                />
                <Input
                  label="Email"
                  name="email"
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Email"
                  value={value}
                  type="email"
                />
              </FlexBox>
            </FlexBox>
          </Box>
          <Box $backgroundColor="darkSecondary" $padding="s_32" $radius="rounded_xmedium">
            <FlexBox $direction="column" $gap="s_24">
              <FlexBox $direction="row" $gap="s_14" $align="center" $justify="space-between">
                <Text color="white" size="small_titles" fontWeight="bold">
                  Пароль
                </Text>
                <SvgImage $height="20px" $width="20px" $fill="grey">
                  <PencilIcon />
                </SvgImage>
              </FlexBox>
              <Input
                label="test"
                name="test"
                onChange={(e) => setValue(e.target.value)}
                placeholder="Логин"
                value={value}
              />
              <Input
                label="Пароль"
                name="password"
                onChange={(e) => setValue(e.target.value)}
                placeholder="Пароль"
                value={value}
                type="password"
                icon={
                  <SvgImage $height="20px" $width="20px" $fill="white">
                    <EyeIcon />
                  </SvgImage>
                }
              />
            </FlexBox>
          </Box>
          <FlexBox $direction="row" $gap="s_24">
            <Button
              buttonSize={SizeEnum.FULL}
              color="accent"
              spacing="s_24"
              sx={css`
                justify-content: center;
              `}
            >
              Сохранить изменения
            </Button>
            <Button
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
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
