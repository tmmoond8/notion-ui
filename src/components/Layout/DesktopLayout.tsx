/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode, useContext } from 'react';
import cx from 'classnames';
import AppLayoutContext from './context';
import Aside from '../Aside';
import { useNoScrollOutside } from './hooks';
import { colors } from '../../styles';

interface AppLayoutProps {
  className?: string;
  children: ReactNode;
}

export default function DesktopLayout(props: AppLayoutProps): JSX.Element {
  const { children, className } = props;
  const { aside, leftMenus, rightMenus, center } = useContext(AppLayoutContext);
  useNoScrollOutside();

  return (
    <Layout className={cx('DesktopLayout', className)}>
      <Aside visible>{aside}</Aside>
      <MenuBar>
        <LeftMenus>{leftMenus}</LeftMenus>
        <Center>{center}</Center>
        <RightMenus>{rightMenus}</RightMenus>
      </MenuBar>
      <ContentWrapper>{children}</ContentWrapper>
    </Layout>
  );
}

const MenuBar = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 240px);
  height: 45px;
  padding: 0 12px;
  box-sizing: border-box;
`;

const LeftMenus = styled.nav`
  display: flex;
  height: 100%;
  flex: 1;
  align-items: center;
`;
const RightMenus = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin: 44px 0 0 0;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 12px;
    background-color: ${colors.scrollBar};
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.scrollBar};
  }
`;

const Layout = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  margin: auto;
  font-family: 'Inter', Helvetica, 'Apple Color Emoji', Arial, sans-serif,
    'Segoe UI Emoji', 'Segoe UI Symbol';
  overflow: hidden;
`;
