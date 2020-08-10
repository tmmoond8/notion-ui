/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { colors } from '../../styles';

interface AsideGroupProps {
  title: string;
  children: ReactNode;
  open?: boolean;
}

export default function AsideGroup(props: AsideGroupProps): JSX.Element {
  const { title, children, open = true } = props;
  return (
    <Details open={open}>
      <Summary>{title}</Summary>
      <Contents>{children}</Contents>
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
const Contents = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
