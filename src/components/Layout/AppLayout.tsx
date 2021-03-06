/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode } from 'react';
import { Reponsive } from '../../styles/mediaQuery';
import MobileLayout from './MobileLayout';
import DesktopLayout from './DesktopLayout';
import AppLayoutContext, { AppLayoutContextInteface } from './context';

interface AppLayoutProps extends AppLayoutContextInteface {
  children?: ReactNode;
  className?: string;
}

export default function AppLayout(props: AppLayoutProps): JSX.Element {
  const {
    className,
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
        mobileComponent={
          <MobileLayout className={className}>{children}</MobileLayout>
        }
        desktopComponent={
          <DesktopLayout className={className}>{children}</DesktopLayout>
        }
      />
    </AppLayoutContext.Provider>
  );
}
