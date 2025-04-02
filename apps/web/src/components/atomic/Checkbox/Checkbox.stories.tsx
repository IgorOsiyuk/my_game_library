import type { Meta, StoryObj } from '@storybook/react';
import Box from '../Box';
import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Atomic/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box $backgroundColor="darkSecondary" $padding="s_16" $radius="rounded_medium">
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    name: 'default',
    onChange: (e) => console.log('Checkbox changed:', e.target.checked),
  },
};

export const WithLabel: Story = {
  args: {
    name: 'with-label',
    label: 'Я согласен с условиями',
    onChange: (e) => console.log('Checkbox changed:', e.target.checked),
  },
};

export const Checked: Story = {
  args: {
    name: 'checked',
    label: 'Отмеченный чекбокс',
    checked: true,
    onChange: (e) => console.log('Checkbox changed:', e.target.checked),
  },
};

export const WithError: Story = {
  args: {
    name: 'with-error',
    label: 'Чекбокс с ошибкой',
    isError: true,
    error: 'Это поле обязательно для заполнения',
    onChange: (e) => console.log('Checkbox changed:', e.target.checked),
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    label: 'Отключенный чекбокс',
    disabled: true,
    onChange: (e) => console.log('Checkbox changed:', e.target.checked),
  },
};

export const DisabledChecked: Story = {
  args: {
    name: 'disabled-checked',
    label: 'Отключенный отмеченный чекбокс',
    disabled: true,
    checked: true,
    onChange: (e) => console.log('Checkbox changed:', e.target.checked),
  },
};
