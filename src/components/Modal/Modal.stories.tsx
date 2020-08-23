/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { useModal } from '.';
import Modal from './Modal';
import Button from '../Button';

export default {
  title: 'Modal',
  component: Modal,
};

export const ModalMobile$DEV = (): JSX.Element => (
  <div>
    <Modal
      title="Share"
      handleClose={action('modal close')}
      contents={<p>any contents</p>}
    />
  </div>
);

export const openModal = (): JSX.Element => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const modal = useModal();
  const handleOpenModal = () => {
    modal.openModal({ title: 'share', contents: <div>abc</div> });
  };
  return (
    <div>
      <Button onClick={handleOpenModal}>Open Modal</Button>
    </div>
  );
};
