/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode } from 'react';
import MobileLayout from './MobileLayout';

interface AppLayoutProps {
  children: ReactNode;
  handleGoBack?: () => void;
  handleGoNext?: () => void;
}

export default function AppLayout(props: AppLayoutProps): JSX.Element {
  const { children, handleGoBack, handleGoNext } = props;
  return (
    <MobileLayout handleGoBack={handleGoBack} handleGoNext={handleGoNext}>
      {children}
    </MobileLayout>
  );
}
