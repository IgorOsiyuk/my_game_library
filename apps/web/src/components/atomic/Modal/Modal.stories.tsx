import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '../Button';
import Text from '../Text';
import { Modal } from './index';

const meta = {
  title: 'Atomic/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Text color="white" size="body_M">
          Это пример содержимого модального окна. Здесь может быть любой контент.
        </Text>
      </Modal>
    </>
  );
};

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: <></>,
  },
  render: () => <ModalExample />,
};
