/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode } from 'react';
import { Reponsive } from '../../styles/mediaQuery';
import MobileLayout from './MobileLayout';
import DesktopLayout from './DesktopLayout';
import AppLayoutContext, { AppLayoutContextInteface } from './context';

interface AppLayoutProps extends AppLayoutContextInteface {
  children?: ReactNode;
}

export default function AppLayout(props: AppLayoutProps): JSX.Element {
  const {
    children,
    handleGoBack,
    handleGoNext,
    aside,
    leftMenus,
    rightMenus,
  } = props;
  return (
    <AppLayoutContext.Provider
      value={{
        handleGoBack,
        handleGoNext,
        aside,
        leftMenus,
        rightMenus,
      }}
    >
      <Reponsive
        mobileComponent={<MobileLayout>{children}</MobileLayout>}
        desktopComponent={<DesktopLayout>{children}</DesktopLayout>}
      />
    </AppLayoutContext.Provider>
  );
}
