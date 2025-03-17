import PlaySmile from '@/icons/play_smile.svg';
import colors from '@/styles/colors';
import fontSizes from '@/styles/fontSizes';
import radius from '@/styles/radius';
import spacing from '@/styles/spacing';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ButtonComponent, { SizeEnum } from '.';

import DoneSmile from '@/icons/done_smile.svg';
import FunSmile from '@/icons/fun_smile.svg';
import SadSmile from '@/icons/sad_smile.svg';

const icons = {
  DoneSmile,
  FunSmile,
  SadSmile,
  PlaySmile,
};

const meta: Meta<typeof ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: [...Object.keys(colors)],
    },
    buttonSize: {
      options: [SizeEnum.DEFAULT, SizeEnum.FULL],
    },
    radius: {
      options: [...Object.keys(radius)],
    },
    textSize: {
      options: [...Object.keys(fontSizes)],
    },
    spacing: {
      options: [...Object.keys(spacing)],
    },
    isActive: {
      type: 'boolean',
    },
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          DoneSmile: 'DoneSmile',
          FunSmile: 'FunSmile',
          SadSmile: 'SadSmile',
          PlaySmile: 'PlaySmile',
        },
      },
    },
  },
  args: {
    children: 'Button',
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {};
