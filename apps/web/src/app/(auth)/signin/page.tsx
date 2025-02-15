'use client';
import PasswordInput from '@/components/PasswordInput';
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
    <form className="w-full max-w-md" onSubmit={handleSubmit}>
      <div className="relative mt-6 flex items-center">
        <input
          type="email"
          // label="Email"
          // variant="bordered"
          name="email"
          // onValueChange={setValue}
          value={value}
          // isInvalid={!validateEmail(debouncedEmail) ? true : false}
        />
      </div>

      <div className="relative mt-4 flex items-center">
        <PasswordInput label="Password" name="password" />
      </div>

      <div className="mt-6">
        <button type="submit" color="primary" className="h-auto w-full rounded-lg px-6 py-3">
          Sign In
        </button>
      </div>
    </form>
  );
}
