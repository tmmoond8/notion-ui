/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode, useMemo } from 'react';
import { colors } from '../../styles';
import { MenuHeight } from './constants';

interface AsideGroupProps {
  title: string;
  children: ReactNode;
  open?: boolean;
  max?: number;
}

export default function AsideGroup(props: AsideGroupProps): JSX.Element {
  const { title, children, open = true, max } = props;
  const contentMaxHeight = useMemo(() => {
    return max === undefined ? 'auto' : `${max * MenuHeight}px`;
  }, [max]);
  return (
    <Details open={open}>
      <Summary>{title}</Summary>
      <Contents maxHeight={contentMaxHeight}>{children}</Contents>
    </Details>
  );
}

const Details = styled.details``;
const Summary = styled.summary`
  display: flex;
  height: 24px;
  font-weight: 600;
  color: ${colors.grey40};
  padding: 0 14px;
  user-select: none;
  text-transform: uppercase;
  font-size: 11.5px;
  color: ${colors.grey40};
  line-height: 24px;
  font-weight: 600;
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
`;
