import React from 'react';
import Text, { TagName } from './Text';

export default {
  title: 'Content',
  component: Text,
};

export const Content_Text = () => (
  <div>
    <Text marginTop={4} as={TagName.H1}>H1</Text>
    <Text marginTop={4} as={TagName.H2}>H2</Text>
    <Text marginTop={4} as={TagName.H3}>H3</Text>
    <Text marginTop={4} as={TagName.H4}>H4</Text>
    <Text marginTop={4} as={TagName.H5}>H5</Text>
    <Text marginTop={4} as={TagName.H6}>H6</Text>
    <Text marginTop={4} as={TagName.P}>P</Text>
  </div>
);
