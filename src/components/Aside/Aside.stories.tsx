import React from 'react';
import { action } from '@storybook/addon-actions';
import Aside from '.';

export default {
  title: 'Aside',
  component: Aside,
};

export const AsideDefault = (): JSX.Element => {
  return (
    <Aside visible>
      <Aside.Group title="메뉴 그룹">
        <Aside.Menu title="react" handleClick={action('react clicked')} />
        <Aside.Menu title="vue" handleClick={action('vue clicked')} />
      </Aside.Group>
    </Aside>
  );
};
