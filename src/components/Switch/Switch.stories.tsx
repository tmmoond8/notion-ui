/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Switch, useTheme, toggleTheme, loadTheme } from 'notion-ui';

export default {
  title: 'Switch',
  component: Switch,
};

export const switchDefault = () => {
  useTheme();
  const theme = loadTheme();
  return (
    <div>
      <p>Switch ON</p>
      <Switch switchOn onEvent={action('on')} offEvent={action('off')} />
      <p>Switch OFF</p>
      <Switch onEvent={action('on')} offEvent={action('off')} />
      <p>Theme</p>
      <Switch
        switchOn={theme === 'Dark'}
        onEvent={toggleTheme}
        offEvent={toggleTheme}
      />
    </div>
  );
};
