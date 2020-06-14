/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors } from '../../styles';

interface EmbedLayoutProps {
  children: ReactNode;
}

export default function EmbedLayout(props: EmbedLayoutProps): JSX.Element {
  const { children } = props;
  return <Layout>{children}</Layout>;
}

const Layout = styled.div`
  padding: 32px;
  min-height: 320px;
  background: ${colors.background};
`;
