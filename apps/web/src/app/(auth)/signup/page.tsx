'use client';

import PasswordInput from '@/components/PasswordInput';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function Signup() {
  const router = useRouter();

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
    <>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="relative mt-6 flex items-center">
          <input type="text" name="name" />
        </div>

        <div className="relative mt-6 flex items-center">
          <input type="email" name="email" />
        </div>

        <div className="relative mt-4 flex items-center">
          <PasswordInput label="Password" name="password" />
        </div>

        <div className="mt-6">
          <button type="submit" color="primary" className="h-auto w-full rounded-lg px-6 py-3">
            Sign Up
          </button>
          <div className="mt-6 text-center">
            <a href="/signin">Already have an account?</a>
          </div>
        </div>
      </form>
    </>
  );
}
