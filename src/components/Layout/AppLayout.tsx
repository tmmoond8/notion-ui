/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode } from 'react';
import { Reponsive } from '../Respoinsive';
import MobileLayout from './MobileLayout';
import DesktopLayout from './DesktopLayout';
import AppLayoutContext, { AppLayoutContextInteface } from './context';
import { useMediaQuery } from '../../styles/mediaQuery';

interface AppLayoutProps extends Omit<AppLayoutContextInteface, 'mediaQuery'> {
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
    center,
  } = props;
  const { mobile, desktop } = useMediaQuery();
  return (
    <AppLayoutContext.Provider
      value={{
        handleGoBack,
        handleGoNext,
        aside,
        leftMenus,
        rightMenus,
        center,
        mediaQuery: {
          mobile,
          desktop,
        },
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
