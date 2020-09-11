/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Content } from 'notion-ui';

export default {
  title: 'Content',
  component: Content.Text,
};

export const Content_Text = (): JSX.Element => (
  <div>
    <Content.Text marginTop={4} as="H1">
      H1
    </Content.Text>
    <Content.Text marginTop={4} as="H2">
      H2
    </Content.Text>
    <Content.Text marginTop={4} as="H3">
      H3
    </Content.Text>
    <Content.Text marginTop={4} as="H4">
      H4
    </Content.Text>
    <Content.Text marginTop={4} as="H5">
      H5
    </Content.Text>
    <Content.Text marginTop={4} as="H6">
      H6
    </Content.Text>
    <Content.Text marginTop={4} as="P">
      P
    </Content.Text>
  </div>
);
