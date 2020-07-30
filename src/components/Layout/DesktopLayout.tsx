/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode, ReactElement } from 'react';
import { colors } from 'src/styles';

interface AppLayoutProps {
  children: ReactNode;
  left?: ReactElement;
  right?: ReactElement;
}

export default function DesktopLayout(props: AppLayoutProps): JSX.Element {
  const { children, left, right } = props;
  return (
    <Layout>
      <Aside>aside</Aside>
      <ContentWrapper>
        <DesktopMenuBar left={left} right={right} />
        {children}
      </ContentWrapper>
    </Layout>
  );
}

interface DesktopMenuBarProps {
  left?: ReactElement;
  right?: ReactElement;
}

function DesktopMenuBar(props: DesktopMenuBarProps): JSX.Element {
  const { left, right } = props;
  return (
    <MenuBar>
      <LeftMenus>{left}</LeftMenus>
      <RightMenus>{right}</RightMenus>
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
