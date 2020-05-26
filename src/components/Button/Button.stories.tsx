import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import ButtonBase, { ButtonType, ButtonSize } from './ButtonBase';

export default {
  title: 'Button',
  component: ButtonBase,
};

export const base = () => <div>
  <p>primary</p>
  <ButtonBase onClick={action('clicked')} buttonType={ButtonType.Primary}>Primary</ButtonBase>
  <p>secondary</p>
  <ButtonBase onClick={action('clicked')} buttonSize={ButtonSize.Tiny}>Tiny</ButtonBase>
  <ButtonBase onClick={action('clicked')} buttonSize={ButtonSize.Small}>Small</ButtonBase>
  <ButtonBase onClick={action('clicked')}>Medium</ButtonBase>
  <ButtonBase onClick={action('clicked')} buttonSize={ButtonSize.Big}>Big</ButtonBase>
</div>

export const knobs = () => (
  <ButtonBase
    onClick={action('clicked')}
  >
    {text('buttonText', 'button')}
  </ButtonBase>
)

knobs.story = {
  decorators: [withKnobs],
}