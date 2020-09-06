/* eslint-disable no-underscore-dangle */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import cx from 'classnames';
import { colors } from '../../styles';
import Group from './Group';
import Menu from './Menu';
import global from '../../types/global';

interface AsideProps {
  className?: string;
  visible: boolean;
  children: React.ReactNode;
}

function Aside(props: AsideProps): JSX.Element {
  const { className, visible, children } = props;
  const handlePreventDefault = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  return (
    <StyledAside
      className={cx('Aside', className)}
      visible={visible}
      onClick={handlePreventDefault}
    >
      {children}
    </StyledAside>
  );
}

const StyledAside = styled.aside<{ visible: boolean }>`
  height: 100%;
  width: 240px;
  background-color: ${colors.backgroundAside};
  transform: translateX(${p => (p.visible ? '0' : '-100%')});
  transition: all 0.2s ease 0s;
  box-shadow: rgba(15, 15, 15, 0.025) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.05) 0px 3px 6px, rgba(15, 15, 15, 0.1) 0px 9px 24px;
  overflow: hidden;
  font-family: 'Inter', Helvetica, 'Apple Color Emoji', Arial, sans-serif,
    'Segoe UI Emoji', 'Segoe UI Symbol';
  z-index: 500;
`;

Aside.Group = Group;
Aside.Menu = Menu;
Aside.useCloseCallback = () => () => global.__NOTION_UI.closeAside();

export default Aside;
