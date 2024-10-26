'use client';

import PasswordInput from '@/components/shared/PasswordInput';
import { Button, Input, Link } from '@nextui-org/react';

export default function Signup() {
  return (
    <form className="w-full max-w-md">
      <div className="relative mt-6 flex items-center">
        <Input type="text" label="Name" variant="bordered" />
      </div>

      <div className="relative mt-6 flex items-center">
        <Input type="email" label="Email" variant="bordered" />
      </div>

      <div className="relative mt-4 flex items-center">
        <PasswordInput label="Password" />
      </div>

      <div className="relative mt-4 flex items-center">
        <PasswordInput label="Confirm Password" />
      </div>

      <div className="mt-6">
        <Button color="primary" size="lg" className="h-auto w-full rounded-lg px-6 py-3">
          Sign Up
        </Button>
        <div className="mt-6 text-center">
          <Link href="/signin" size="sm">
            Already have an account?
          </Link>
        </div>
      </div>
    </form>
  );
}
