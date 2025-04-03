import type { Meta, StoryObj } from '@storybook/react';
import Text from '../Text';
import { Dropdown } from './index';

const meta = {
  title: 'Atomic/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const dropdownOptions = [
  <Text key="profile" color="white" size="body_M">
    Профиль
  </Text>,
  <Text key="settings" color="white" size="body_M">
    Настройки
  </Text>,
  <Text key="logout" color="white" size="body_M">
    Выйти
  </Text>,
];

export const Default: Story = {
  args: {
    title: 'Меню',
    options: dropdownOptions,
  },
};
