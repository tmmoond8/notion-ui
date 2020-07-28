import React from 'react';
import { action } from '@storybook/addon-actions';
import EmbedLayout from './EmbedLayout';
import MobileLayout from './MobileLayout';
import { IconButton } from '../Icon';

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

export const Mobile = () => (
  <div>
    <p>MobileLayout</p>
    <MobileLayout
      left={
        <>
          <IconButton
            icon="arrowLeft"
            size="Big"
            className="ArrowLeft"
            onClick={action('go back')}
          />
          <IconButton
            icon="arrowRight"
            size="Big"
            className="ArrowRight"
            onClick={action('go next')}
          />
        </>
      }
      right={
        <>
          <IconButton
            icon="moreHorizon"
            size="Big"
            className="MoreHorizon"
            onClick={action('more')}
          />
          <IconButton
            icon="share"
            size="Big"
            className="Share"
            onClick={action('share')}
          />
          <IconButton
            icon="notification"
            size="Big"
            className="Notification"
            onClick={action('notification')}
          />
        </>
      }
    >
      Primary
    </MobileLayout>
  </div>
);
