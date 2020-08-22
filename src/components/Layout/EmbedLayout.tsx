/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode } from 'react';
import cx from 'classnames';
import styled from '@emotion/styled';
import { colors } from '../../styles';

interface EmbedLayoutProps {
  className?: string;
  children: ReactNode;
}

export default function EmbedLayout(props: EmbedLayoutProps): JSX.Element {
  const { children, className } = props;
  return <Layout className={cx('EmbedLayout', className)}>{children}</Layout>;
}

const Layout = styled.div`
  min-height: 100px;
  height: -webkit-fill-available;
  padding: 32px;
  box-sizing: border-box;
  background: ${colors.backgroundEmbed};
  font-family: 'Inter', Helvetica, 'Apple Color Emoji', Arial, sans-serif,
    'Segoe UI Emoji', 'Segoe UI Symbol';
`;
