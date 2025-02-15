'use client';

// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
// import { Input } from '@nextui-org/react';
import { useState } from 'react';

interface PasswordInputIProps {
  label: string;
  name: string;
}
export default function PasswordInput({ label, name }: PasswordInputIProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <></>
    // <Input
    //   name={name}
    //   label={label}
    //   variant="bordered"
    //   endContent={
    //     <button
    //       className="h-full w-6 focus:outline-none"
    //       type="button"
    //       onClick={toggleVisibility}
    //       aria-label="toggle password visibility"
    //     >
    //       {isVisible ? (
    //         <EyeSlashIcon className="pointer-events-none text-default-400" />
    //       ) : (
    //         <EyeIcon className="pointer-events-none text-default-400" />
    //       )}
    //     </button>
    //   }
    //   type={isVisible ? 'text' : 'password'}
    // />
  );
}
