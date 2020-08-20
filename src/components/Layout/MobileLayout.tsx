/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode, useState, useCallback, useEffect, useContext } from 'react';
import { IconButton } from '../Icon';
import { colors } from '../../styles';
import AppLayoutContext from './context';
import Aside from '../Aside';
import { useNoScrollOutside } from './hooks';

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

  useNoScrollOutside();

  return (
    <Layout>
      {open && <AsideMenu handleClose={handleClose} />}
      <MobileMenuBar handleOpen={handleOpen} />
      <ContentWrapper>{children}</ContentWrapper>
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

  const handleCloseWithAnimation = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      handleClose();
    }, 200);
  }, [handleClose]);

  return (
    <AsideWrapper visible={visible} onClick={handleCloseWithAnimation}>
      <Aside visible={visible}>{aside}</Aside>
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

const MenuBar = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  top: 0;
  left: 0;
  padding: 0 4px;
  box-shadow: ${colors.grey16} 0px 1px 0px;
  background-color: ${colors.background};
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
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
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

const Layout = styled.div`
  overflow: hidden;
`;
