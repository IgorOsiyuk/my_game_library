'use client';

import { Link } from '@nextui-org/react';
import Item from './Item';

export default function GameList() {
  return (
    <section className="mt-8">
      <div className="flex flex-col gap-4 rounded-2xl border border-default-100 p-4 align-top shadow-xl">
        <div className="flex flex-row justify-between">
          <h3 className="text-3xl font-bold text-default-600">Мои пройденные игры</h3>
          <Link href="/dashboard/games">View all</Link>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </section>
  );
}
