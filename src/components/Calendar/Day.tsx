import React from 'react'
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from '../../styles';

const KO = ['일', '월', '화', '수', '목', '금', '토'];

export const Day: React.FC<{
  number: number;
  isToday: boolean;
}> = ({ number, isToday }) => {
  if (isToday) {
    console.log(number);
  }
  return (
    <StyledDay isToday={isToday}>
      <Content>
        {number}
      </Content>
    </StyledDay>
  )
}

export const Head: React.FC<{ dayNum: number }> = ({ dayNum }) => {
  return (
    <StyledHead>
      {KO[dayNum]}
    </StyledHead>
  )
}

export const Empty: React.FC<{ number: number }> = ({ number }) => (<StyledHead isEmpty={true}>{number}</StyledHead>)

const StyledDay = styled.li<{ isToday: boolean }>`
  position: relative;
  width: 32px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey};
  &:hover {
    background-color: ${colors.grey16};
  }
  cursor: pointer;

  ${p => p.isToday && css`
    &:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 50%;
      background-color: ${colors.red50};
    }
  `}
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const StyledHead = styled.li<{ isEmpty?: boolean; }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  ${p => p.isEmpty && css`
    opacity: 0.5;
  `}
`;