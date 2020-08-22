/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode, MouseEvent } from 'react';
import { colors } from '../../styles';
import Group from './Group';
import GroupMenu from './GroupMenu';

interface AsideProps {
  visible: boolean;
  children: ReactNode;
}

function Aside(props: AsideProps): JSX.Element {
  const { visible, children } = props;
  const handlePreventDefault = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  return (
    <StyledAside visible={visible} onClick={handlePreventDefault}>
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
  z-index: 500;
`;

Aside.Group = Group;
Aside.GroupMenu = GroupMenu;

export default Aside;
