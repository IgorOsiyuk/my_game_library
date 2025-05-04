'use client';
import FlexBox from '@/atomic/FlexBox';
import Text from '@/atomic/Text';
import { signIn } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function Verify() {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    console.log(params['token']);
    const toastId = toast.loading('Загрузка...');

    signIn('verify-email', {
      verifyToken: params['token'],
      redirect: false,
    })
      .then((res) => {
        if (res?.error) {
          toast.dismiss(toastId);
          const errors = JSON.parse(res.error);
          if (Array.isArray(errors.message)) {
            errors.message.forEach((text: string) => toast.error(text));
          } else {
            toast.error(errors.message);
          }
          setTimeout(() => {
            router.push('/signin');
          }, 500);
        }
        setTimeout(() => {
          toast.dismiss(toastId);
          router.push('/dashboard');
        }, 500);
      })
      .catch((err) => {
        toast.dismiss(toastId);
        toast.error(err.message);
      });
  }, [params, router]);

  return (
    <FlexBox $height="100vh" $align="center" $justify="center" $backgroundColor="accent">
      <Text color="white">Спасибо за подтверждение email</Text>
    </FlexBox>
  );
}
