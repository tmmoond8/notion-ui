import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Button</Button>;

export const knobs = () => (
  <Button
    onClick={action('clicked')}
  >
    {text('buttonText', 'button')}
  </Button>
)

knobs.story = {
  decorators: [withKnobs],
}