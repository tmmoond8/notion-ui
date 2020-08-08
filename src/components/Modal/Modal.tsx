/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode, useState, useEffect, RefObject, forwardRef } from 'react';
import cx from 'classnames';
import Head from './Head';
import { moreThan } from '../../styles/mediaQuery';
import { colors } from '../../styles';

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
      <Wrapper>
        <ModalBox
          css={cx('NotionUiModal', className)}
          open={open}
          ref={ref as RefObject<HTMLDivElement>}
        >
          <Head title={title} handleClose={handleClose} />
          <ModalBody>sfdsfdsf</ModalBody>
        </ModalBox>
      </Wrapper>
    );
  },
);

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
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
  max-width: 414px;
  transition: all 0.2s ease 0s;
  transform: translateY(${p => (p.open ? '0' : '100vh')});

  ${moreThan(
    414,
    css`
      max-height: 484px;
      border-radius: 3px;
      overflow: hidden;
    `,
  )}
`;

const ModalBody = styled.div`
  flex: 1;
  background-color: ${colors.backgroundAside};
  padding: 16px 0;
  overflow: scroll;
`;
