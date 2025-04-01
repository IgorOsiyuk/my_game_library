import colors from '@/styles/colors';
import fontSizes from '@/styles/fontSizes';
import radius from '@/styles/radius';
import spacing from '@/styles/spacing';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ButtonComponent, { SizeEnum } from '.';

import CalendarIcon from '@/icons/calendar.svg';
import CardViewIcon from '@/icons/card_view.svg';
import InfoIcon from '@/icons/info.svg';
import ListViewIcon from '@/icons/list_view.svg';

const icons = {
  CalendarIcon,
  CardViewIcon,
  ListViewIcon,
  InfoIcon,
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
          CalendarIcon: 'CalendarIcon',
          CardViewIcon: 'CardViewIcon',
          ListViewIcon: 'ListViewIcon',
          InfoIcon: 'InfoIcon',
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
