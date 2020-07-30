import React from 'react';
import { action } from '@storybook/addon-actions';
import { IconButton } from 'src/components/Icon';
import Button from 'src/components/Button';
import EmbedLayout from './EmbedLayout';
import MobileLayout from './MobileLayout';
import DesktopLayout from './DesktopLayout';
import AppLayout from './AppLayout';
import AppLayoutContext from './context';

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
  <AppLayout
    leftMenus={<>Untiltled</>}
    rightMenus={
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
    aside={
      <ul>
        <li>menu1</li>
        <li>menu2</li>
      </ul>
    }
    handleGoBack={action('go back')}
    handleGoNext={action('go next')}
  >
    Contents
  </AppLayout>
);

export const Mobile$DEV = () => (
  <AppLayoutContext.Provider
    value={{
      leftMenus: <>Untiltled</>,
      rightMenus: (
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
      ),
      handleGoBack: action('go back'),
      handleGoNext: action('go next'),
      aside: <p>asdie menue</p>,
    }}
  >
    <MobileLayout>Primary</MobileLayout>
  </AppLayoutContext.Provider>
);

export const Desktop$DEV = () => (
  <AppLayoutContext.Provider
    value={{
      leftMenus: <>Untiltled</>,
      rightMenus: (
        <>
          <Button onClick={action('Share')}>Share</Button>
          <Button onClick={action('Updates')}>Updates</Button>
          <Button onClick={action('Favorite')}>Favorite</Button>
          <IconButton
            icon="moreHorizon"
            size="Big"
            className="MoreHorizon"
            onClick={action('moreHorizon')}
          />
        </>
      ),
      aside: <p>asdie menue</p>,
    }}
  >
    <DesktopLayout>Primary</DesktopLayout>
  </AppLayoutContext.Provider>
);
