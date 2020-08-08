/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useRef, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

export const useModal = () => {
  const MODAL_WRAPPER = 'NotionUiModal';
  const bodyElement = document.querySelector('body');
  const modalRef = useRef<HTMLDivElement>(null);
  let modalWrapper: HTMLDivElement | null = null;

  const close = () => {
    if (bodyElement && modalRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      modalRef.current!.style!.transform = 'translateY(100vh)';
      setTimeout(() => {
        if (modalWrapper) {
          bodyElement.removeChild(modalWrapper);
          modalWrapper = null;
        }
      }, 300);
    }
  };

  const openModal = (params: { title: string; contents: ReactNode }) => {
    const { title, contents } = params;
    const modal = (
      <Modal title={title} handleClose={close} ref={modalRef}>
        {contents}
      </Modal>
    );
    modalWrapper = document.createElement('div');
    modalWrapper.classList.add(MODAL_WRAPPER);
    if (bodyElement && modalWrapper) {
      ReactDOM.render(modal, modalWrapper);
      bodyElement.appendChild(modalWrapper);
    }
  };

  return {
    openModal,
    close,
  };
};
