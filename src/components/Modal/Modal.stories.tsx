/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Modal from '.';
import { useModal, useTabSelect } from './hooks';
import ModalComponent from './Modal';
import Button from '../Button';

export default {
  title: 'Modal',
  component: Modal,
};

export const ModalMobile$DEV = (): JSX.Element => {
  const { tabs, selected, handleSelect } = useTabSelect(['tab1', 'tab2']);
  return (
    <div>
      <ModalComponent
        title="Share"
        handleClose={action('modal close')}
        contents={
          <>
            <Modal.TabSelect
              tabs={tabs}
              selected={selected}
              handleSelect={handleSelect}
            />
            {selected === tabs[0] && <Modal.Section>{selected}</Modal.Section>}
            {selected === tabs[1] && <Modal.Section>{selected}</Modal.Section>}
          </>
        }
      />
    </div>
  );
};

export const openModal = (): JSX.Element => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const modal = useModal();

  const handleOpenModal = () => {
    modal.openModal({
      title: 'share',
      contents: <p>any content</p>,
    });
  };
  return (
    <div>
      <Button onClick={handleOpenModal}>Open Modal</Button>
    </div>
  );
};
