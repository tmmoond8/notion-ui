/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import {
  ReactNode,
  useState,
  useEffect,
  RefObject,
  useRef,
  forwardRef,
} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import Head from './Head';

interface ModalProps {
  className?: string;
  title: string;
  children: ReactNode;
  handleClose: () => void;
}

const Modal = forwardRef(
  (props: ModalProps, ref): JSX.Element => {
    const { className, title, handleClose } = props;
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
      if (!open) {
        setTimeout(() => {
          setOpen(true);
        }, 300);
      }
    }, [title, open]);
    return (
      <ModalBox
        css={cx('NotionUiModal', className)}
        open={open}
        ref={ref as RefObject<HTMLDivElement>}
      >
        <Head title={title} handleClose={handleClose} />
        <ModalBody>sfdsfdsf</ModalBody>
      </ModalBox>
    );
  },
);

export default Modal;

export const useModal = () => {
  const MODAL_WRAPPER = 'NotionUiModal';
  const bodyElement = document.querySelector('body');
  const modalRef = useRef<HTMLDivElement>(null);
  let modalWrapper: HTMLDivElement | null = null;

  const close = () => {
    if (bodyElement && modalRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      modalRef.current!.style!.transform = 'translateY(100%)';
      setTimeout(() => {
        if (modalWrapper) {
          bodyElement.removeChild(modalWrapper);
        }
      }, 300);
    }
    modalWrapper = null;
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

const ModalBox = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transition: all 0.2s ease 0s;
  transform: translateY(${p => (p.open ? '0' : '100%')});
`;

const ModalBody = styled.div`
  flex: 1;
`;
