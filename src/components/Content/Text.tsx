/* eslint-disable @typescript-eslint/no-use-before-define */
import { css, SerializedStyles } from '@emotion/core';
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
  const overrideStyle = css`
    ${marginTop && `margin-top: ${marginTop}px`};
    ${fontWeight && `font-weight: ${fontWeight}px`};
    ${lineHeight && `line-height: ${lineHeight}px`};
    ${fontSize && `font-size: ${fontSize}px`};
    ${color && `color: ${color}`};
    ${backgroundColor && `background-color: ${backgroundColor}`};
  `;

  const Tag = useMemo(() => Components(as), [as]);
  return (
    <Tag className={cx('Text', className)} styles={overrideStyle}>
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
  font-family: 'Inter', Helvetica, 'Apple Color Emoji', Arial, sans-serif,	
    'Segoe UI Emoji', 'Segoe UI Symbol';
`;

const P = styled.p<{ styles: SerializedStyles }>`
  ${textDefault};
  font-size: 16px;
  font-weight: 400;
  color: ${colors.grey};
  margin: 1px 0;
  ${p => p.styles};
  ${p => p.styles};
`;

const H1 = styled.h1<{ styles: SerializedStyles }>`
  ${textDefault};
  color: ${colors.grey};
  font-weight: 700;
  line-height: 1.2;
  font-size: 40px;
  ${p => p.styles};
`;

const H2 = styled.h2<{ styles: SerializedStyles }>`
  ${textDefault};
  color: ${colors.grey};
  font-weight: 600;
  line-height: 1.3;
  font-size: 30px;
  ${p => p.styles};
`;
const H3 = styled.h3<{ styles: SerializedStyles }>`
  ${textDefault};
  color: ${colors.grey};
  font-weight: 600;
  line-height: 1.3;
  font-size: 24px;
  ${p => p.styles};
`;
const H4 = styled.h4<{ styles: SerializedStyles }>`
  ${textDefault};
  color: ${colors.grey};
  font-weight: 600;
  line-height: 1.3;
  font-size: 20px;
  ${p => p.styles};
`;
const H5 = styled.h5<{ styles: SerializedStyles }>`
  ${textDefault};
  color: ${colors.grey};
  font-weight: 500;
  line-height: 1.3;
  font-size: 16px;
  ${p => p.styles};
`;
const H6 = styled.h6<{ styles: SerializedStyles }>`
  ${textDefault};
  color: ${colors.grey};
  font-weight: 400;
  line-height: 1.3;
  font-size: 14px;
  ${p => p.styles};
`;
const Span = styled.span<{ styles: SerializedStyles }>`
  ${textDefault};
  ${p => p.styles};
`;
const Strong = styled.strong<{ styles: SerializedStyles }>`
  ${textDefault};
  ${p => p.styles};
`;
const U = styled.u<{ styles: SerializedStyles }>`
  ${textDefault};
  text-decoration: underline;
  ${p => p.styles};
`;
const DT = styled.dt<{ styles: SerializedStyles }>`
  ${textDefault};
  ${p => p.styles};
`;
const DD = styled.dd<{ styles: SerializedStyles }>`
  ${textDefault};
  ${p => p.styles};
`;

const LI = styled.dl<{ styles: SerializedStyles }>`
  ${textDefault};
  ${p => p.styles};
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
