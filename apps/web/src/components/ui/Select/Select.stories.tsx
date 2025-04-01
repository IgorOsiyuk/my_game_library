import Box from '@/atomic/Box';
import type { Meta, StoryObj } from '@storybook/react';
import { CustomSelect } from './index';

const meta = {
  title: 'Example/Select',
  component: CustomSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box $backgroundColor="grey" $padding="s_24">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof CustomSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'action', label: 'Экшен' },
  { value: 'rpg', label: 'РПГ' },
  { value: 'strategy', label: 'Стратегия' },
  { value: 'adventure', label: 'Приключение' },
  { value: 'simulator', label: 'Симулятор' },
];

export const Single: Story = {
  args: {
    options,
    placeholder: 'Выберите жанр',
    isMulti: false,
    onChange: (option) => console.log('Selected:', option),
  },
};

export const Multi: Story = {
  args: {
    options,
    placeholder: 'Выберите жанры',
    isMulti: true,
    onChange: (option) => console.log('Selected:', option),
  },
};

export const WithValue: Story = {
  args: {
    options,
    value: options[0],
    placeholder: 'Выберите жанр',
    isMulti: false,
    onChange: (option) => console.log('Selected:', option),
  },
};

export const WithMultiValue: Story = {
  args: {
    options,
    value: [options[0], options[1]],
    placeholder: 'Выберите жанры',
    isMulti: true,
    onChange: (option) => console.log('Selected:', option),
  },
};
