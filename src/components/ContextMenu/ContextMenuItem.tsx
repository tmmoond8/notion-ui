/* eslint-disable @typescript-eslint/no-use-before-define */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import cx from 'classnames';
import { colors } from '../../styles';

interface Props {
  className?: string;
  left?: ReactNode;
  center: ReactNode;
  right?: ReactNode;
  onClick?: () => void;
}

export function ContextMenuItem({
  className,
  left,
  center,
  right,
  onClick = () => console.info('not initialized'),
}: Props) {
  return (
    <Item className={cx('ContextMenu', className)} onClick={onClick}>
      {left && <div className="ContextMenu-left">{left}</div>}
      <div className="ContextMenu-center">{center}</div>
      {right && <div className="ContextMenu-right">{right}</div>}
    </Item>
  );
}

export function ContextMenuHR() {
  return <HR />;
}

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding: 0 14px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.grey16};
  }

  .ContextMenu-left {
    color: ${colors.grey};
    margin-right: 8px;
  }
  .ContextMenu-center {
    flex: 1;
    text-align: left;
    color: ${colors.grey};
  }
  .ContextMenu-right {
    color: ${colors.grey40};
    margin-left: 8px;
  }
`;

const HR = styled.hr`
  padding: 0;
  border: none;
  border-top: 1px solid ${colors.grey08};
`;
