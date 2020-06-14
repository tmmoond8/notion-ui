import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import ButtonBase from './ButtonBase';

export default {
  title: 'Button',
  component: ButtonBase,
};

export const base = () => (
  <div>
    <p>primary</p>
    <ButtonBase onClick={action('clicked')} buttonType="Primary">
      Primary
    </ButtonBase>
    <p>secondary</p>
    <ButtonBase onClick={action('clicked')} buttonSize="Tiny">
      Tiny
    </ButtonBase>
    <ButtonBase onClick={action('clicked')} buttonSize="Small">
      Small
    </ButtonBase>
    <ButtonBase onClick={action('clicked')}>Medium</ButtonBase>
    <ButtonBase onClick={action('clicked')} buttonSize="Big">
      Big
    </ButtonBase>
  </div>
);

export const knobs = () => (
  <ButtonBase onClick={action('clicked')}>
    {text('buttonText', 'button')}
  </ButtonBase>
);

knobs.story = {
  decorators: [withKnobs],
};
