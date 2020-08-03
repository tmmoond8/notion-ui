/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode, useContext } from 'react';
import { colors } from '../../styles';
import AppLayoutContext from './context';

interface AppLayoutProps {
  children: ReactNode;
}

export default function DesktopLayout(props: AppLayoutProps): JSX.Element {
  const { children } = props;
  const { aside } = useContext(AppLayoutContext);
  return (
    <Layout>
      <Aside>{aside}</Aside>
      <ContentWrapper>
        <DesktopMenuBar />
        {children}
      </ContentWrapper>
    </Layout>
  );
}

function DesktopMenuBar(): JSX.Element {
  const { leftMenus, rightMenus } = useContext(AppLayoutContext);
  return (
    <MenuBar>
      <LeftMenus>{leftMenus}</LeftMenus>
      <RightMenus>{rightMenus}</RightMenus>
    </MenuBar>
  );
}

const MenuBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
`;

const LeftMenus = styled.div``;
const RightMenus = styled.div``;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 16px;
`;
const Aside = styled.aside`
  height: 100%;
  width: 240px;
  background-color: ${colors.backgroundAside};
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
