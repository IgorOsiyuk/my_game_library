import SearchIcon from '@/icons/search.svg';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';

const meta: Meta<typeof Input> = {
  title: 'Atomic/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    name: 'default',
    placeholder: 'Введите текст',
    value: '',
    onChange: (e) => console.log('Input value:', e.target.value),
  },
};

export const WithIcon: Story = {
  args: {
    name: 'withIcon',
    placeholder: 'Поиск...',
    value: '',
    icon: <SearchIcon />,
    onChange: (e) => console.log('Input value:', e.target.value),
  },
};

export const WithValue: Story = {
  args: {
    name: 'withValue',
    label: 'Email',
    placeholder: 'Введите email',
    value: 'example@email.com',
    onChange: (e) => console.log('Input value:', e.target.value),
  },
};

export const WithError: Story = {
  args: {
    name: 'withError',
    label: 'Пароль',
    placeholder: 'Введите пароль',
    value: '123',
    isError: true,
    error: 'Пароль должен содержать минимум 8 символов',
    onChange: (e) => console.log('Input value:', e.target.value),
  },
};
