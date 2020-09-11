/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Modal, Button } from 'notion-ui';
import ModalComponent from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

export const ModalMobile$DEV = (): JSX.Element => {
  const { tabs, selected, handleSelect } = Modal.useTabSelect(['tab1', 'tab2']);
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
  const modal = Modal.useModal();
  const handleCloseModal = modal.close;

  const handleOpenModal = () => {
    modal.open({
      title: 'share',
      contents: (
        <>
          <p>any content</p>
          <Button onClick={handleCloseModal}> close </Button>
        </>
      ),
    });
  };
  return (
    <div>
      <Button onClick={handleOpenModal}>Open Modal</Button>
    </div>
  );
};
