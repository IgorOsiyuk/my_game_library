'use client';
import PasswordInput from '@/components/PasswordInput';
import { Button, Input } from '@nextui-org/react';
import { signIn } from 'next-auth/react';

export default function Signin() {
  return (
    <form className="w-full max-w-md">
      <div className="relative mt-6 flex items-center">
        <Input type="email" label="Email" variant="bordered" />
      </div>

      <div className="relative mt-4 flex items-center">
        <PasswordInput label="Password" />
      </div>

      <div className="mt-6">
        <Button
          color="primary"
          size="lg"
          className="h-auto w-full rounded-lg px-6 py-3"
          onClick={async () =>
            await signIn('credentials', {
              email: 'wimx@tut.by',
              password: '12345lL@',
              redirect: true,
              callbackUrl: '/dashboard',
            })
          }
        >
          Sign In
        </Button>
      </div>
    </form>
  );
}
