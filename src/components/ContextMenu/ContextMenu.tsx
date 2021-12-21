/* eslint-disable @typescript-eslint/no-use-before-define */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import {
  ReactNode,
  useRef,
  useState,
  useEffect,
  useCallback,
  MouseEvent,
} from 'react';
import cx from 'classnames';
import { moreThan } from '../../styles/mediaQuery';
import { colors } from '../../styles';

export interface ContextMenuProps {
  pointX: number;
  pointY: number;
  contents: ReactNode;
  className?: string;
  zIndex?: number;
  handleClose: () => void;
}

const ContextMenu = (props: ContextMenuProps) => {
  const {
    className,
    contents,
    handleClose,
    zIndex = 700,
    pointX,
    pointY,
  } = props;
  const [open, setOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { x, y } = getContextMenuPosition(
    pointX,
    pointY,
    wrapperRef?.current as HTMLDivElement | undefined,
  );
  console.log('x', x);
  console.log('y', y);
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
  }, [open]);
  return (
    <Wrapper
      onClick={handleClickWrapper}
      className={cx('ContextMenuWrapper', className)}
      open={open}
      zIndex={zIndex}
    >
      <ContextMenuBox open={open} ref={wrapperRef} x={x} y={y}>
        <ModalBody>{contents}</ModalBody>
      </ContextMenuBox>
    </Wrapper>
  );
};

export default ContextMenu;

const Wrapper = styled.div<{ open: boolean; zIndex: number }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  font-family: 'Inter', Helvetica, 'Apple Color Emoji', Arial, sans-serif,
    'Segoe UI Emoji', 'Segoe UI Symbol';
  overflow: hidden;
  background-color: transparent;
  z-index: ${p => p.zIndex};
`;

const ContextMenuBox = styled.div<{ open: boolean; x: number; y: number }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  margin: auto;
  height: fit-content;
  width: auto;
  min-width: 220px;
  border-radius: 3px;

  opacity: ${p => (p.open ? 1 : 0)};

  ${moreThan(
    512,
    css`
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
  overflow: auto;
`;

function getContextMenuPosition(
  pointX: number,
  pointY: number,
  targetElement?: HTMLElement,
) {
  const targetRec = targetElement?.getBoundingClientRect();
  console.log('targetRec', targetRec);

  return {
    x: pointX,
    y: pointY,
  };
}
