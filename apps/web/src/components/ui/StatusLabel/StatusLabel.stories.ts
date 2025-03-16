import type { Meta, StoryObj } from '@storybook/react';
import StatusLabelComponent, { StatusEnum } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/StatusLabel',
  component: StatusLabelComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  argTypes: {
    variant: {
      options: [StatusEnum.ERROR, StatusEnum.INFO, StatusEnum.SUCCESS, StatusEnum.WARNING],
    },
  },
  args: {
    label: 'Try Me!',
    // variant:
    variant: StatusEnum.ERROR,
  },
} satisfies Meta<typeof StatusLabelComponent>;

export default meta;
type Story = StoryObj<typeof StatusLabelComponent>;

export const StatusLabel: Story = {};

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
