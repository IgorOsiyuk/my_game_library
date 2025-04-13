'use client';
import Box from '@/atomic/Box';
import Button, { SizeEnum } from '@/atomic/Button';
import { Button as ButtonStyle } from '@/atomic/Button/style';
import FlexBox from '@/atomic/FlexBox';
import { InputWrapper } from '@/atomic/Input/style';
import Text from '@/atomic/Text';
import BgImage from '@/images/singin_pic.jpg';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { css } from 'styled-components';
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const isSignIn = pathname === '/signin';

  return (
    <FlexBox
      $width="100%"
      $align="center"
      $justify="flex-end"
      $sx={css`
        min-height: 100vh;
        position: relative;
        isolation: isolate;
      `}
    >
      <Image
        src={BgImage}
        alt="Background"
        fill
        priority
        quality={75}
        sizes="100vw"
        style={{
          zIndex: -1,
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <Box
        $width="100%"
        $padding="s_40"
        $radius="rounded_large"
        $sx={css`
          margin-right: 188px;
          max-width: 606px;
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(40px);
          position: relative;
          z-index: 1;
          ${InputWrapper} {
            background-color: transparent;
          }
        `}
      >
        <FlexBox $direction="column" $gap="s_56" $mb="s_24">
          <Box
            $sx={css`
              text-align: center;
            `}
          >
            <Text color="white" size="small_titles">
              Привет!
            </Text>
          </Box>

          <FlexBox
            $direction="row"
            $sx={({ theme }) => css`
              border-radius: ${theme.radius.rounded_small};
              border-width: 1px;
              border-style: solid;
              border-color: ${theme.colors.grey};
              position: relative;
              overflow: hidden;
              ${ButtonStyle} {
                text-align: center;
                width: 50%;
                justify-content: center;
                background-color: transparent;
                &:hover ~ .special-box {
                  transform: ${isSignIn ? 'translateX(100%)' : 'translateX(0%)'};
                  transition: transform 0.3s ease-in-out;
                }
              }
            `}
          >
            <Button
              as={isSignIn ? 'div' : 'button'}
              buttonSize={SizeEnum.FULL}
              spacing="s_16"
              textSize="body_M"
              sx={css`
                pointer-events: ${isSignIn ? 'none' : 'auto'};
              `}
              onClick={
                !isSignIn
                  ? (e) => {
                      e.preventDefault();
                      router.push('/signin');
                    }
                  : undefined
              }
            >
              Войти
            </Button>
            <Button
              as={isSignIn ? 'button' : 'div'}
              textSize="body_M"
              buttonSize={SizeEnum.FULL}
              spacing="s_16"
              onClick={
                isSignIn
                  ? (e) => {
                      e.preventDefault();
                      router.push('/signup');
                    }
                  : undefined
              }
              sx={css`
                pointer-events: ${isSignIn ? 'auto' : 'none'};
              `}
            >
              Регистрация
            </Button>
            <Box
              className="special-box"
              $sx={({ theme }) => css`
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                transform: ${isSignIn ? 'translateX(0%)' : 'translateX(100%)'};
                transition: transform 0.3s ease-in-out;

                display: block;
                border-radius: ${theme.radius.rounded_small};
                width: 50%;
                height: 100%;
                background-color: ${theme.colors.accent};
                z-index: -1;
              `}
            />
          </FlexBox>
        </FlexBox>
        {children}
      </Box>
    </FlexBox>
  );
}
