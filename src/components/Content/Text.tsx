import { css } from '@emotion/core';
import React, { ReactNode } from 'react';
import { cssToReactStyle } from 'src/styles/utils';
import * as styles from './styles';

export enum TagName {
  P = 'P',
  Span = 'Span',
  Strong = 'Strong',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  U = 'U',
  DT = 'DT',
  DD = 'DD',
  LI = 'LI',
}

interface TextProps {
  marginTop?: number;
  children: ReactNode;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  as?: TagName;
  className?: string;
  fontWeight?: number;
  backgroundColor?: string;
}

export default function Text(props: TextProps): JSX.Element {
  const {
    as = TagName.Span, children, marginTop, fontWeight, lineHeight, fontSize, color, backgroundColor,
  } = props;
  const defaultStyle = styles.text[as];
  const style = css`
    ${marginTop && `margin-top: ${marginTop}px`};
    ${fontWeight && `font-weight: ${fontWeight}`};
    ${lineHeight && `line-height: ${lineHeight}`};
    ${fontSize && `font-size: ${fontSize}`};
    ${color && `color: ${color}`};
    ${backgroundColor && `background-color: ${backgroundColor}`};
  `;

  return (
    React.createElement(as.toLowerCase(), { ...props, style: cssToReactStyle(defaultStyle, style) }, children)
  );
}
