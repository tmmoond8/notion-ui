/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { ReactNode, useState, useEffect } from 'react';
import { throttle } from 'throttle-debounce';
import { BreakPoints } from '../../styles/mediaQuery';
import { useAppContext } from '../Layout/context';

interface ResponseProps {
  mobileComponent?: ReactNode;
  desktopComponent?: ReactNode;
}

export const Reponsive = (props: ResponseProps) => {
  const { mobileComponent, desktopComponent } = props;
  const { mediaQuery } = useAppContext();

  return (
    <React.Fragment>
      {mediaQuery.mobile && mobileComponent && mobileComponent}
      {mediaQuery.desktop && desktopComponent && desktopComponent}
    </React.Fragment>
  );
};
