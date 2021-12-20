/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

interface SpaceBetweenProps {
  flexDirection?: 'row' | 'column';
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  children?: React.ReactNode;
}

export default function SpaceBetween({
  flexDirection = 'row',
  width = '100%',
  height = '100%',
  maxWidth = '100%',
  maxHeight = '100%',
  children,
}: SpaceBetweenProps): JSX.Element {
  return (
    <Block
      className="SpaceBetween"
      w={width}
      d={flexDirection}
      h={height}
      maxW={maxWidth}
      maxH={maxHeight}
    >
      {children}
    </Block>
  );
}

const Block = styled.div<{
  d: 'row' | 'column';
  w: string;
  h: string;
  maxW: string;
  maxH: string;
}>`
  display: flex;
  justify-content: space-between;
  width: ${p => p.w};
  height: ${p => p.h};
  max-width: ${p => p.maxW};
  max-height: ${p => p.maxH};
`;
