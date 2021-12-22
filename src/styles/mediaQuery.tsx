import { css, SerializedStyles } from '@emotion/core';
import React from 'react';
import { throttle } from 'throttle-debounce';

export const BreakPoints = {
  Mobile: 425,
  Tablet: 768,
  Desktop: 1440,
};

export const moreThan = (
  minWidth: number,
  style: SerializedStyles,
): SerializedStyles => css`
  @media (min-width: ${minWidth}px) {
    ${style};
  }
`;

export const desktop = (style: SerializedStyles): SerializedStyles => css`
  @media (min-width: ${BreakPoints.Tablet + 1}px) {
    ${style};
  }
`;

export const useMediaQuery = () => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  React.useEffect(() => {
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
  }, []);
  return {
    mobile: isMobile,
    desktop: !isMobile,
  };
};
