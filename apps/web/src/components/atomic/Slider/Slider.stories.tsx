import type { Meta, StoryObj } from '@storybook/react';
import Box from '../Box';
import { Slider } from './index';

const meta = {
  title: 'Atomic/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 1.0,
    min: 0,
    max: 5,
    step: 0.1,
    onChange: (value) => console.log('Value changed:', value),
  },
  decorators: [
    (Story) => (
      <Box $width="200px" $height="100%" $padding="s_32">
        <Story />
      </Box>
    ),
  ],
};
