import React from 'react';
import EmbedLayout from './EmbedLayout';

export default {
  title: 'Layout',
  component: EmbedLayout,
};

export const Embed = () => (
  <div>
    <p>EmbedLayout</p>
    <EmbedLayout>Primary</EmbedLayout>
  </div>
);
