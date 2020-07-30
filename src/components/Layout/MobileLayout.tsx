/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { IconButton } from 'src/components/Icon';
import {
  ReactNode,
  useState,
  useCallback,
  useEffect,
  ReactElement,
  MouseEvent,
} from 'react';
import { colors } from 'src/styles';

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
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  return (
    <Layout>
      {open && <AsideMenu handleClose={handleClose} />}
      <ContentWrapper>
        <MobileMenuBar handleOpen={handleOpen} left={left} right={right} />
        {children}
      </ContentWrapper>
    </Layout>
  );
}

function AsideMenu(props: { handleClose: () => void }): JSX.Element {
  const { handleClose } = props;
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 50);
  }, [setVisible]);
  const handlePreventDefault = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  const handleCloseWithAnimation = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      handleClose();
    }, 200);
  }, [handleClose]);

  return (
    <AsideWrapper visible={visible} onClick={handleCloseWithAnimation}>
      <Aside visible={visible} onClick={handlePreventDefault}>
        aside
      </Aside>
    </AsideWrapper>
  );
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
  border-bottom: 1px solid ${colors.grey16};
`;

const LeftMenus = styled.div``;
const RightMenus = styled.div``;

const ContentWrapper = styled.div``;
const Aside = styled.aside<{ visible: boolean }>`
  height: 100%;
  min-width: 240px;
  max-width: 320px;
  background-color: ${colors.background};
  transform: translateX(${p => (p.visible ? '0' : '-100%')});
  transition: all 0.2s ease 0s;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.2) 0px 3px 6px, rgba(15, 15, 15, 0.4) 0px 9px 24px;
`;
const AsideWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: ${p => (p.visible ? colors.dimmed : colors.notDimmed)};
  transition: all 0.2s ease 0s;
  z-index: 1000;
`;
const Layout = styled.div``;
