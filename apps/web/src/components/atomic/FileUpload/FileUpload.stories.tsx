import type { Meta, StoryObj } from '@storybook/react';
import Box from '../Box';
import { FileUpload } from './index';

const meta = {
  title: 'Atomic/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onFileSelect: (file) => console.log('Selected file:', file),
    maxSize: 5,
    accept: 'image/*',
  },
  decorators: [
    (Story) => (
      <Box $padding="s_36" $backgroundColor="darkSecondary">
        <Box $width="448px" $height="448px">
          <Story />
        </Box>
      </Box>
    ),
  ],
};
