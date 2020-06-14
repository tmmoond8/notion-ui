/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors } from '../../styles';

interface EmbedLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function EmbedLayout(props: EmbedLayoutProps): JSX.Element {
  const { children, className = '' } = props;
  return <Layout className={className}>{children}</Layout>;
}

const Layout = styled.div`
  min-height: 100px;
  height: -webkit-fill-available;
  padding: 32px;
  box-sizing: border-box;
  background: ${colors.backgroundEmbed};
`;
