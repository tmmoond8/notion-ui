/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { colors } from '../../styles';

interface MenuProps {
  title: string;
  icon?: ReactNode;
  handleClick: () => void;
}

export default function Menu(props: MenuProps): JSX.Element {
  const { title, icon, handleClick } = props;
  return (
    <Item onClick={handleClick}>
      {icon && icon}
      {title}
    </Item>
  );
}

const Item = styled.li`
  height: 27px;
  margin: 0;
  padding: 0 14px 0 32px;
  color: ${colors.grey60};
  line-height: 27px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: ${colors.grey08};
  }
`;
