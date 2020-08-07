/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode, useContext } from 'react';
import AppLayoutContext from './context';
import Aside from '../Aside';

interface AppLayoutProps {
  children: ReactNode;
}

export default function DesktopLayout(props: AppLayoutProps): JSX.Element {
  const { children } = props;
  const { aside, leftMenus, rightMenus } = useContext(AppLayoutContext);
  return (
    <Layout>
      <Aside visible>{aside}</Aside>
      <ContentWrapper>
        <MenuBar>
          <LeftMenus>{leftMenus}</LeftMenus>
          <RightMenus>{rightMenus}</RightMenus>
        </MenuBar>
        {children}
      </ContentWrapper>
    </Layout>
  );
}

const MenuBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
`;

const LeftMenus = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
`;
const RightMenus = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  flex: 1;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 16px;
`;

const Layout = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;
