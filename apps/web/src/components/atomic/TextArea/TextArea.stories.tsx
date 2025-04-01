import type { Meta, StoryObj } from '@storybook/react';
import { css } from 'styled-components';
import Box from '../Box';
import TextArea from './index';

const meta: Meta<typeof TextArea> = {
  title: 'Atomic/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box
        $sx={css`
          height: 300px;
          width: 300px;
        `}
      >
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    name: 'default',
    placeholder: 'Введите текст',
  },
};

export const WithValue: Story = {
  args: {
    name: 'withValue',
    placeholder: 'Описание',
    value: 'Это пример текста в TextArea. Здесь может быть длинный текст, который занимает несколько строк.',
    onChange: (e) => console.log('TextArea value:', e.target.value),
  },
};

export const WithError: Story = {
  args: {
    name: 'withError',
    placeholder: 'Комментарий',
    value: '',
    isError: true,
    error: 'Это поле обязательно для заполнения',
    onChange: (e) => console.log('TextArea value:', e.target.value),
  },
};
