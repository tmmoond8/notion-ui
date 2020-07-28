/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { IconButton } from 'src/components/Icon';
import { ReactNode, useState, useCallback, ReactElement } from 'react';

interface AppLayoutProps {
  children: ReactNode;
  left?: ReactElement;
  right?: ReactElement;
}

export default function MoibleLayout(props: AppLayoutProps): JSX.Element {
  const { children, left, right } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);
  return (
    <Layout>
      {open && <AsideMenu />}
      <ContentWrapper>
        <MobileMenuBar handleOpen={handleOpen} left={left} right={right} />
        {children}
      </ContentWrapper>
    </Layout>
  );
}

function AsideMenu(): JSX.Element {
  return <Aside>aside</Aside>;
}

interface MobileMenuBarProps {
  handleOpen: () => void;
  left?: ReactElement;
  right?: ReactElement;
}

function MobileMenuBar(props: MobileMenuBarProps): JSX.Element {
  const { handleOpen, left, right } = props;
  return (
    <MenuBar>
      <LeftMenus>
        <IconButton
          icon="hambugMenu"
          size="Big"
          className="HambugIcon"
          onClick={handleOpen}
        />
        {left}
      </LeftMenus>
      <RightMenus>{right}</RightMenus>
    </MenuBar>
  );
}

const MenuBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
`;

const LeftMenus = styled.div``;
const RightMenus = styled.div``;

const ContentWrapper = styled.div``;
const Aside = styled.aside`
  width: 240px;
`;
const Layout = styled.div``;
