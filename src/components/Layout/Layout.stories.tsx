import React from 'react';
import EmbedLayout from './EmbedLayout';
import AppLayout from './AppLayout';

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

export const App = () => (
  <div>
    <p>AppLayout</p>
    <AppLayout>Primary</AppLayout>
  </div>
);
