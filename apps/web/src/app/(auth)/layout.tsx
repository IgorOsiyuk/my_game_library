'use client';
import FlexBox from '@/atomic/FlexBox';
import * as S from './style';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FlexBox $height="100vh" $align="center" $justify="center" $backgroundColor="accent">
        <S.FormWrapper>{children}</S.FormWrapper>
      </FlexBox>
    </>
  );
}
