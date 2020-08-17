import React from 'react';
import { action } from '@storybook/addon-actions';
import Aside from '.';
import { Icon } from '../..';

export default {
  title: 'Aside',
  component: Aside,
};

export const AsideDefault = (): JSX.Element => {
  return (
    <Aside visible>
      <Aside.Group title="메뉴 그룹">
        <Aside.Menu
          title="react"
          handleClick={action('react clicked')}
          icon={<Icon icon="hambugMenu" size="Tiny" className="HambugIcon" />}
        />
        <Aside.Menu
          title="vue"
          handleClick={action('vue clicked')}
          iconUrl="https://res.cloudinary.com/dgggcrkxq/image/upload/v1597455632/noticon/yx4pbpbp6mtqo0yrinzk.png"
        />
        <Aside.Menu
          title="vue"
          handleClick={action('vue clicked')}
          emoji="🧢"
        />
        <Aside.Menu
          title="vue"
          handleClick={action('vue clicked')}
          iconUrl="https://res.cloudinary.com/dgggcrkxq/image/upload/v1597622693/noticon/m9x6mei2mo39iesqulm9.png"
        />
      </Aside.Group>
    </Aside>
  );
};

export const AsideNotOpened = (): JSX.Element => {
  return (
    <Aside visible>
      <Aside.Group title="메뉴 그룹" open={false}>
        <Aside.Menu title="react" handleClick={action('react clicked')} />
        <Aside.Menu title="vue" handleClick={action('vue clicked')} />
      </Aside.Group>
    </Aside>
  );
};
