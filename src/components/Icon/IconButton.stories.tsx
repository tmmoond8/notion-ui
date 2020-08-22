import React from 'react';
import { action } from '@storybook/addon-actions';
import { IconButton } from '.';

export default {
  title: 'IconButton',
  component: IconButton,
};

export const iconButton = (): JSX.Element => (
  <div>
    <p>
      <IconButton
        icon="smile"
        size="Big"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      기본 버튼
    </p>
    <p>
      <IconButton
        icon="smile"
        size="Big"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
        disabled
      />
      비활성 버튼
    </p>
    <p>
      <IconButton
        icon="smile"
        size="Tiny"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      Tiny
    </p>
    <p>
      <IconButton
        icon="smile"
        size="Small"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      Small
    </p>
    <p>
      <IconButton
        icon="smile"
        size="Normal"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      Normal
    </p>
    <p>
      <IconButton
        icon="smile"
        size="Big"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      Big
    </p>
    <p>
      <IconButton
        icon="smile"
        size="Huge"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      Huge
    </p>
    <p>
      <IconButton
        icon="smile"
        className="HambugIcon"
        onClick={action('hambugMenu Click!!')}
      />
      Default
    </p>
  </div>
);
