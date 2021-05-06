import React from 'react'
import styled from '@emotion/styled';
import { colors } from '../../styles';

const KO = ['일', '월', '화', '수', '목', '금', '토'];

export const Day: React.FC<{
  number: number;
}> = ({ number }) => {
  return (
    <StyledDay>
      {number}
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

export const Empty = () => (<StyledHead />)

const StyledDay = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey};
  &:hover {
    background-color: ${colors.grey16};
  }
  cursor: pointer;
`;

const StyledHead = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  user-select: none;
`;