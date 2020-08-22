/* eslint-disable @typescript-eslint/no-use-before-define */
import { css } from '@emotion/core';
import styled, { StyledComponent } from '@emotion/styled';
import React, { ReactNode, useMemo } from 'react';
import cx from 'classnames';
import { colors } from '../../styles';
import Enum from '../../types/enum';

export type TagName = keyof typeof Enum.TagName;

interface TextProps {
  className?: string;
  marginTop?: number;
  children: ReactNode;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  as?: TagName;
  fontWeight?: number;
  backgroundColor?: string;
}

export default function Text(props: TextProps): JSX.Element {
  const {
    as = 'Span',
    children,
    marginTop,
    fontWeight,
    lineHeight,
    fontSize,
    color,
    backgroundColor,
    className,
  } = props;
  const style = css`
    ${marginTop && `margin-top: ${marginTop}px`};
    ${fontWeight && `font-weight: ${fontWeight}`};
    ${lineHeight && `line-height: ${lineHeight}`};
    ${fontSize && `font-size: ${fontSize}`};
    ${color && `color: ${color}`};
    ${backgroundColor && `background-color: ${backgroundColor}`};
  `;

  const Tag = useMemo(() => Components(as), [as]);
  return (
    <Tag className={cx('Text', className)} css={style}>
      {children}
    </Tag>
  );
}

const textDefault = `
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: 0;
  padding: 3px 2px;
  margin: 0;
  color: ${colors.grey};
`;

const P = styled.p`
  ${textDefault};
  font-size: 16px;
  font-weight: 400;
  color: ${colors.grey};
  margin: 1px 0;
`;

const H1 = styled.h1`
  ${textDefault};
  color: ${colors.grey};
  font-weight: 700;
  line-height: 1.2;
  font-size: 40px;
`;

const H2 = styled.h2`
  ${textDefault};
  color: ${colors.grey};
  font-weight: 600;
  line-height: 1.3;
  font-size: 30px;
`;
const H3 = styled.h3`
  ${textDefault};
  color: ${colors.grey};
  font-weight: 600;
  line-height: 1.3;
  font-size: 24px;
`;
const H4 = styled.h4`
  ${textDefault};
  color: ${colors.grey};
  font-weight: 600;
  line-height: 1.3;
  font-size: 20px;
`;
const H5 = styled.h5`
  ${textDefault};
  color: ${colors.grey};
  font-weight: 500;
  line-height: 1.3;
  font-size: 16px;
`;
const H6 = styled.h6`
  ${textDefault};
  color: ${colors.grey};
  font-weight: 400;
  line-height: 1.3;
  font-size: 14px;
`;
const Span = styled.span`
  ${textDefault};
`;
const Strong = styled.strong`
  ${textDefault};
`;
const U = styled.u`
  ${textDefault};
  text-decoration: underline;
`;
const DT = styled.dt`
  ${textDefault};
`;
const DD = styled.dd`
  ${textDefault};
`;

const LI = styled.dl`
  ${textDefault};
`;

function Components(tagName: TagName): StyledComponent<any, {}, {}> {
  switch (tagName) {
    case 'P':
      return P;
    case 'H1':
      return H1;
    case 'H2':
      return H2;
    case 'H3':
      return H3;
    case 'H4':
      return H4;
    case 'H5':
      return H5;
    case 'H6':
      return H6;
    case 'Span':
      return Span;
    case 'Strong':
      return Strong;
    case 'U':
      return U;
    case 'DT':
      return DT;
    case 'DD':
      return DD;
    case 'LI':
      return LI;
    default:
      return Span;
  }
}
