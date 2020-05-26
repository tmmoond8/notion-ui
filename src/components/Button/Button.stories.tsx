import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button, { ButtonType } from '.';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <div>
  <p>primary</p>
  <Button onClick={action('clicked')} buttonType={ButtonType.Primary}>Primary</Button>
  <p>secondary</p>
  <Button onClick={action('clicked')}>Secondary</Button>
  <p>tertiary</p>
  <Button onClick={action('clicked')} buttonType={ButtonType.Tertiary}>Tertiary</Button>
</div>

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