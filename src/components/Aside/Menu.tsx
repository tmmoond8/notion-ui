/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import cx from 'classnames';
import { colors } from '../../styles';
import { desktop } from '../../styles/mediaQuery';
import { mobileMenuHeight, desktopMenuHeight } from './constants';

interface MenuProps {
  className?: string;
  title: string;
  icon?: ReactNode;
  iconUrl?: string;
  emoji?: string;
  handleClick: () => void;
}

export default function Menu(props: MenuProps): JSX.Element {
  const { title, icon, iconUrl, emoji, handleClick, className } = props;
  return (
    <Item onClick={handleClick} className={cx('AsideMenu', className)}>
      {icon && icon}
      {iconUrl && <IconImg src={iconUrl} alt={title} />}
      {emoji && <Emoji>{emoji}</Emoji>}
      <Text>{title}</Text>
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  align-items: center;
  height: ${mobileMenuHeight}px;
  line-height: ${mobileMenuHeight}px;
  margin: 0;
  padding: 0 14px;
  color: ${colors.grey60};
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: ${colors.grey08};
  }

  svg {
    width: 16px;
  }

  & > *:nth-child(2) {
    padding-left: 8px;
  }

  ${desktop(css`
    height: ${desktopMenuHeight}px;
    line-height: ${desktopMenuHeight}px;
    svg {
      width: 14px;
    }
  `)}
`;

const IconImg = styled.img`
  width: 21.3px;
  height: 21.3px;

  ${desktop(css`
    width: 17.75px;
    height: 17.75px;
  `)}
`;

const Emoji = styled.span`
  width: 21.59px;

  ${desktop(css`
    width: 17.5px;
  `)}
  color: black;
`;

const Text = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: 'Inter', Helvetica, 'Apple Color Emoji', Arial, sans-serif,
    'Segoe UI Emoji', 'Segoe UI Symbol';
`;
