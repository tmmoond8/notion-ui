/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import {
  ReactNode,
  useState,
  useCallback,
  useEffect,
  MouseEvent,
  useContext,
} from 'react';
import { IconButton } from '../Icon';
import { colors } from '../../styles';
import AppLayoutContext from './context';

interface MobileLayoutProps {
  children: ReactNode;
}

export default function MoibleLayout(props: MobileLayoutProps): JSX.Element {
  const { children } = props;
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
        <MobileMenuBar handleOpen={handleOpen} />
        {children}
      </ContentWrapper>
    </Layout>
  );
}

function AsideMenu(props: { handleClose: () => void }): JSX.Element {
  const { handleClose } = props;
  const [visible, setVisible] = useState(false);
  const { aside } = useContext(AppLayoutContext);
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
        {aside}
      </Aside>
    </AsideWrapper>
  );
}

interface MobileMenuBarProps {
  handleOpen: () => void;
}

function MobileMenuBar(props: MobileMenuBarProps): JSX.Element {
  const { handleOpen } = props;
  const { leftMenus, rightMenus, handleGoBack, handleGoNext } = useContext(
    AppLayoutContext,
  );
  return (
    <MenuBar>
      <LeftMenus>
        <IconButton
          icon="hambugMenu"
          size="Big"
          className="HambugIcon"
          onClick={handleOpen}
        />
        {handleGoBack && (
          <IconButton
            icon="arrowLeft"
            size="Big"
            className="ArrowLeft"
            onClick={handleGoBack}
          />
        )}
        {handleGoNext && (
          <IconButton
            icon="arrowRight"
            size="Big"
            className="ArrowRight"
            onClick={handleGoNext}
          />
        )}
        {leftMenus}
      </LeftMenus>
      <RightMenus>{rightMenus}</RightMenus>
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

const LeftMenus = styled.div`
  display: flex;
  align-items: center;
`;
const RightMenus = styled.div`
  display: flex;
  align-items: center;
`;

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
  overflow: hidden;
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
