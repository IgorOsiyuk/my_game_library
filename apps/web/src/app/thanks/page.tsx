'use client';
import FlexBox from '@/atomic/FlexBox';
import Text from '@/atomic/Text';

export default function Thanks() {
  return (
    <FlexBox $height="100vh" $align="center" $justify="center" $backgroundColor="accent">
      <Text color="white">Пожалуйста подтвердите свой email, перейдя по ссылке в письме</Text>
    </FlexBox>
  );
}
