/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode, useMemo } from 'react';
import cx from 'classnames';
import { colors } from '../../styles';
import { MenuHeight } from './constants';

interface AsideGroupProps {
  className?: string;
  title: string;
  children: ReactNode;
  open?: boolean;
  max?: number;
}

export default function AsideGroup(props: AsideGroupProps): JSX.Element {
  const { title, children, open = true, max, className } = props;
  const contentMaxHeight = useMemo(() => {
    return max === undefined ? 'auto' : `${max * MenuHeight}px`;
  }, [max]);
  return (
    <Details open={open} className={cx('AsideGroup', className)}>
      <Summary>{title}</Summary>
      <Contents maxHeight={contentMaxHeight}>{children}</Contents>
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
const Contents = styled.ul<{ maxHeight: string }>`
  max-height: ${p => p.maxHeight};
  margin: 0;
  padding: 0;
  overflow-y: auto;
  list-style: none;

  & > li {
    padding: 0 14px 0 32px;
  }
`;
