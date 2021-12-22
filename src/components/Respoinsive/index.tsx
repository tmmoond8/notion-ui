/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactNode, useState, useEffect } from 'react';
import { throttle } from 'throttle-debounce';
import { BreakPoints } from '../../styles/mediaQuery';

interface ResponseProps {
  mobileComponent?: ReactNode;
  desktopComponent?: ReactNode;
}

export const Reponsive = (props: ResponseProps) => {
  const { mobileComponent, desktopComponent } = props;
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const onSizeEvent = throttle(50, false, () => {
      const windowWidth = document.body.clientWidth;
      const isMobileWidth = windowWidth < BreakPoints.Tablet;
      setIsMobile(isMobileWidth);
    });
    onSizeEvent();
    window.addEventListener('resize', onSizeEvent);
    return () => {
      window.removeEventListener('resize', onSizeEvent);
    };
  }, [isMobile, setIsMobile]);
  return (
    <React.Fragment>
      {isMobile === true && mobileComponent && mobileComponent}
      {isMobile === false && desktopComponent && desktopComponent}
    </React.Fragment>
  );
};
