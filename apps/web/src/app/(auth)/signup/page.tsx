'use client';

import Alert from '@/components/Alert';
import PasswordInput from '@/components/PasswordInput';
import { Button, Input, Link } from '@nextui-org/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signup() {
  const router = useRouter();
  const [isAlert, setIsAlert] = useState(false);

  const handleSubmit = async (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    try {
      const response = await axios.post('/api/auth/signUp', {
        body: { ...formValues },
      });
      console.log(response.data.message);
      router.push('/thanks');
    } catch (error: any) {
      setIsAlert(true);
      console.log(error.response.data);
    }
  };

  return (
    <>
      {isAlert && <Alert />}
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="relative mt-6 flex items-center">
          <Input type="text" label="Name" variant="bordered" name="name" />
        </div>

        <div className="relative mt-6 flex items-center">
          <Input type="email" label="Email" variant="bordered" name="email" />
        </div>

        <div className="relative mt-4 flex items-center">
          <PasswordInput label="Password" name="password" />
        </div>

        {/* <div className="relative mt-4 flex items-center">
        <PasswordInput label="Confirm Password" /> //TODO 
      </div> */}

        <div className="mt-6">
          <Button type="submit" color="primary" size="lg" className="h-auto w-full rounded-lg px-6 py-3">
            Sign Up
          </Button>
          <div className="mt-6 text-center">
            <Link href="/signin" size="sm">
              Already have an account?
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
