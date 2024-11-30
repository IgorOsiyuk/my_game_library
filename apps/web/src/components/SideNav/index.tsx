'use client';
import DefaultIcon from '@/icons/default.svg';
import useAxiosAuth from '@/lib/hooks/useAxiosAuth';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import { signOut } from 'next-auth/react';

const SideNav = () => {
  const axiosAuth = useAxiosAuth();
  return (
    <aside className="sticky top-0 min-h-screen flex flex-col border-r bg-white px-4 py-8">
      <div className="-mx-2 mt-6 flex flex-col items-center">
        <Image
          className="mx-2 h-24 w-24 object-cover bg-red-300"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
        />
        <h4 className="mx-2 mt-2 font-medium">John Doe</h4>
        <p className="mx-2 mt-1 text-sm font-medium">john@example.com</p>
      </div>

      <div className="mt-6 flex flex-col flex-1 justify-between">
        <nav className="flex flex-col gap-6">
          <Link size="lg" href="/dashboard">
            <div className="h-5 w-5">
              <DefaultIcon />
            </div>
            <span className="mx-4 font-medium">My library</span>
          </Link>
          <Link size="lg" href="/dashboard/games">
            <div className="h-5 w-5">
              <DefaultIcon />
            </div>

            <span className="mx-4 font-medium">Games</span>
          </Link>
          <Link size="lg" href="/dashboard/reviews">
            <div className="h-5 w-5">
              <DefaultIcon />
            </div>
            <span className="mx-4 font-medium">Reviews</span>
          </Link>
          <Link size="lg" href="/dashboard/user">
            <div className="h-5 w-5">
              <DefaultIcon />
            </div>
            <span className="mx-4 font-medium">Settings</span>
          </Link>
        </nav>
      </div>
      <button
        className="text-red-500"
        onClick={() => {
          axiosAuth.post('/auth/logout').then(() => signOut({ callbackUrl: '/signout' }));
        }}
      >
        Sign Out
      </button>
    </aside>
  );
};
export default SideNav;
