/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import Text from './Text';

export default {
  title: 'Content',
  component: Text,
};

export const Content_Text = (): JSX.Element => (
  <div>
    <Text marginTop={4} as="H1">
      H1
    </Text>
    <Text marginTop={4} as="H2">
      H2
    </Text>
    <Text marginTop={4} as="H3">
      H3
    </Text>
    <Text marginTop={4} as="H4">
      H4
    </Text>
    <Text marginTop={4} as="H5">
      H5
    </Text>
    <Text marginTop={4} as="H6">
      H6
    </Text>
    <Text marginTop={4} as="P">
      P
    </Text>
  </div>
);
