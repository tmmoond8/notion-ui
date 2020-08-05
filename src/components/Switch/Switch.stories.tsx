import React from 'react';
import { action } from '@storybook/addon-actions';
import Switch from '.';

export default {
  title: 'Switch',
  component: Switch,
};

export const switch_default = () => (
  <div>
    <p>Switch</p>
    <Switch />
  </div>
);
