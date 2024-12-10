'use client';

import { BreadcrumbItem, Breadcrumbs as BreadcrumbsUI } from '@nextui-org/breadcrumbs';
import { usePathname } from 'next/navigation';

const breadcrumbRepresentation: Record<string, string> = {
  dashboard: 'Моя Библиотека',
  user: 'Профиль',
  game: 'Описание игры',
  games: 'Список игр',
  reviews: 'Обзоры',
  review: 'Мой обзор',
  collage: 'Коллаж',
  'create-review': 'Создать обзор',
};

const Breadcrumbs = () => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  const listOfBreadcrumbItem = pathNames.filter((el) => breadcrumbRepresentation[el]);
  return (
    <BreadcrumbsUI>
      {listOfBreadcrumbItem.map((el, index) => {
        return (
          <BreadcrumbItem href={`/${listOfBreadcrumbItem.slice(0, index + 1).join('/')}`} key={el}>
            {breadcrumbRepresentation[el]}
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbsUI>
  );
};

export default Breadcrumbs;
