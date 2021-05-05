/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import cx from 'classnames';
import { colors } from '../../styles';
import { desktop } from '../../styles/mediaQuery';
import { mobileMenuHeight, desktopMenuHeight } from './constants';

interface AsideGroupProps {
  className?: string;
  title: string;
  children: ReactNode;
  open?: boolean;
  max?: number;
}

export default function AsideGroup(props: AsideGroupProps): JSX.Element {
  const { title, children, open = true, max, className } = props;

  return (
    <Details open={open} className={cx('AsideGroup', className)}>
      <Summary>{title}</Summary>
      <Contents max={max}>{children}</Contents>
    </Details>
  );
}

const Details = styled.details`
  margin: 20px 0 0 0;
`;
const Summary = styled.summary`
  display: flex;
  height: 24px;
  color: ${colors.grey40};
  padding: 0 14px;
  user-select: none;
  text-transform: uppercase;
  font-size: 11.5px;
  color: ${colors.grey40};
  line-height: 24px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
  cursor: pointer;
  outline: none;
  &::-webkit-details-marker {
    display: none;
  }
  box-sizing: border-box;
`;
const Contents = styled.ul<{ max: number | undefined }>`
  margin: 0;
  padding: 0;
  overflow-y: auto;
  list-style: none;
  &::-webkit-scrollbar {
    width: 12px;
    background-color: ${colors.scrollBar};
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.scrollBar};
  }

  & > li {
    padding: 0 14px 0 32px;
  }

  ${p =>
    p.max &&
    css`
      max-height: ${p.max * mobileMenuHeight}px;
      ${desktop(css`
        max-height: ${p.max * desktopMenuHeight}px;
      `)}
    `}
`;

