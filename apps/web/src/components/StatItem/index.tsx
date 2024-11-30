'use client';

import { ReactNode } from 'react';

interface StatItemIProps {
  title: string;
  count: number;
  icon: ReactNode;
}

const StatItem = ({ title, count, icon }: StatItemIProps) => {
  return (
    <div className="relative rounded-2xl border border-default-100 p-4 align-top shadow-xl">
      <div className="absolute bottom-4 right-3 h-14 w-14">{icon}</div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-medium leading-8 text-default-600">{count}</div>
    </div>
  );
};

export default StatItem;
