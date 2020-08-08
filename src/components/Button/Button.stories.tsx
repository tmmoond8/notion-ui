import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
};

export const base = () => (
  <div>
    <p>primary</p>
    <Button onClick={action('clicked')} buttonType="Primary">
      Primary
    </Button>
    <p>secondary</p>
    <Button onClick={action('clicked')} buttonSize="Tiny">
      Tiny
    </Button>
    <Button onClick={action('clicked')} buttonSize="Small">
      Small
    </Button>
    <Button onClick={action('clicked')}>Medium</Button>
    <Button onClick={action('clicked')} buttonSize="Big">
      Big
    </Button>
    <p>primary</p>
    <Button onClick={action('clicked')} buttonType="PrimaryText">
      Primary Text
    </Button>
  </div>
);

export const knobs = () => (
  <Button onClick={action('clicked')}>{text('buttonText', 'button')}</Button>
);

knobs.story = {
  decorators: [withKnobs],
};
