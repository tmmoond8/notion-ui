import React from 'react';
import { action } from '@storybook/addon-actions';
import { Loader, Layout } from 'notion-ui';

export default {
  title: 'Loader',
  component: Loader,
};

export const FullScerenLoader = (): JSX.Element => <Loader.FullScreen />;

const Contents = new Array(100)
  .fill(null)
  .map((_, index) => <p>{`test ${index}`}</p>);

export const ParentFullLoader = (): JSX.Element => (
  <Layout.App
    leftMenus={<>Untiltled</>}
    rightMenus={<>menus</>}
    aside={
      <ul>
        <li>menu1</li>
        <li>menu2</li>
      </ul>
    }
    handleGoBack={action('go back')}
    handleGoNext={action('go next')}
  >
    <>
      <Loader.ParentFull />
      {Contents}
    </>
  </Layout.App>
);
