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
  const handleClickWrapper = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        e.preventDefault();
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    if (!open) {
      setOpen(true);
    }
  }, [open]);
  return (
    <Wrapper
      onClick={handleClickWrapper}
      className={cx('ContextMenuWrapper', className)}
      open={open}
      zIndex={zIndex}
      onContextMenu={handleClickWrapper}
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
  background-color: ${colors.modalContentWrapper};
  color: ${colors.grey};
  padding: 8px 0;
  overflow: auto;
`;

function getContextMenuPosition(
  pointX: number,
  pointY: number,
  targetElement?: HTMLElement,
) {
  if (!targetElement) {
    return {
      x: -Number.MAX_VALUE,
      y: -Number.MAX_VALUE,
    };
  }
  const { width, height } = targetElement.getBoundingClientRect();
  const { innerWidth, innerHeight } = window;

  return {
    x: pointX + width > innerWidth ? innerWidth - width - 8 : pointX,
    y: pointY + height > innerHeight ? innerHeight - height - 8 : pointY,
  };
}
