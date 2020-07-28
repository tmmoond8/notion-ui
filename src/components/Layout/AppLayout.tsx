/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout(props: AppLayoutProps): JSX.Element {
  const { children } = props;
  return (
    <Layout>
      <AsideMenu />
      <ContentWrapper>{children}</ContentWrapper>
    </Layout>
  );
}

function AsideMenu(): JSX.Element {
  return <Aside>aside</Aside>;
}

const ContentWrapper = styled.div``;
const Aside = styled.aside`
  width: 240px;
`;
const Layout = styled.div``;
