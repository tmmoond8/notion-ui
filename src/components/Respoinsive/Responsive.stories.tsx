import React from 'react';
import { Content } from 'notion-ui';
import AppLayout from '../Layout';
import { Reponsive } from '.';

export default {
  title: 'Responsive',
};

export const ReponsiveComponent = (): JSX.Element => (
  <AppLayout.App>
    <>
      <Reponsive
        mobileComponent={<Content.Text>Mobile</Content.Text>}
        desktopComponent={<Content.Text>Desktop</Content.Text>}
      />
      <Reponsive
        mobileComponent={<Content.Text>Mobile</Content.Text>}
        desktopComponent={<Content.Text>Desktop</Content.Text>}
      />
    </>
  </AppLayout.App>
);
