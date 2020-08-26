/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import {
  ReactNode,
  useState,
  useEffect,
  RefObject,
  forwardRef,
  useCallback,
  MouseEvent,
} from 'react';
import cx from 'classnames';
import Head from './Head';
import { moreThan } from '../../styles/mediaQuery';
import { colors } from '../../styles';

export interface ModalProps {
  className?: string;
  title: string;
  contents: ReactNode;
  handleClose: () => void;
}

const Modal = forwardRef(
  (props: ModalProps, ref): JSX.Element => {
    const { className, title, contents, handleClose } = props;
    const [open, setOpen] = useState<boolean>(false);
    const handleClickWrapper = useCallback(
      (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      },
      [handleClose],
    );

    useEffect(() => {
      if (!open) {
        setTimeout(() => {
          setOpen(true);
        }, 300);
      }
    }, [title, open]);
    return (
      <Wrapper
        onClick={handleClickWrapper}
        className={cx('ModalWrapper', className)}
        open={open}
      >
        <ModalBox open={open} ref={ref as RefObject<HTMLDivElement>}>
          <Head title={title} handleClose={handleClose} />
          <ModalBody>{contents}</ModalBody>
        </ModalBox>
      </Wrapper>
    );
  },
);

export default Modal;

const Wrapper = styled.div<{ open: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  font-family: 'Inter', Helvetica, 'Apple Color Emoji', Arial, sans-serif,
    'Segoe UI Emoji', 'Segoe UI Symbol';
  overflow: hidden;
  background-color: ${p => (p.open ? colors.modalDimmed : colors.notDimmed)};
  z-index: 700;
  transition: background-color 0.2s ease 0s;
`;

const ModalBox = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: 100%;

  transition: all 0.2s ease 0s;
  transform: translateY(${p => (p.open ? '0' : '100vh')});

  ${moreThan(
    512,
    css`
      max-width: 414px;
      max-height: 484px;
      border-radius: 3px;
      overflow: hidden;
    `,
  )}
`;

const ModalBody = styled.div`
  flex: 1;
  padding: 0;
  background-color: ${colors.modalBody};
  color: ${colors.grey};
  overflow: scroll;
`;
