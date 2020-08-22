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
        <Aside.GroupMenu
          title="menu button"
          handleClick={action('menu clicked')}
          icon={<Icon icon="hambugMenu" size="Tiny" className="HambugIcon" />}
        />
        <Aside.GroupMenu
          title="docs"
          handleClick={action('docs clicked')}
          iconUrl="https://res.cloudinary.com/dgggcrkxq/image/upload/v1597455632/noticon/yx4pbpbp6mtqo0yrinzk.png"
        />
        <Aside.GroupMenu
          title="emoji"
          handleClick={action('emoji clicked')}
          emoji="🧢"
        />
        <Aside.GroupMenu
          title="sequlize"
          handleClick={action('sequlize clicked')}
          iconUrl="https://res.cloudinary.com/dgggcrkxq/image/upload/v1597622693/noticon/m9x6mei2mo39iesqulm9.png"
        />
        <Aside.GroupMenu
          title="deno"
          handleClick={action('deno clicked')}
          iconUrl="https://res.cloudinary.com/dgggcrkxq/image/upload/v1589948805/noticon/v6wd8jsidu5tsi8bsrrm.png"
        />
        <Aside.GroupMenu
          title="mongoDB"
          handleClick={action('mongoDB clicked')}
          iconUrl="https://res.cloudinary.com/dgggcrkxq/image/upload/v1581824691/noticon/hmvqgvug8zl7etwmabuq.png"
        />
      </Aside.Group>
    </Aside>
  );
};

export const AsideMax5 = (): JSX.Element => {
  return (
    <Aside visible>
      <Aside.Group title="메뉴 그룹" max={5}>
        <Aside.GroupMenu
          title="menu button"
          handleClick={action('menu clicked')}
          icon={<Icon icon="hambugMenu" size="Tiny" className="HambugIcon" />}
        />
        <Aside.GroupMenu
          title="docs"
          handleClick={action('docs clicked')}
          iconUrl="https://res.cloudinary.com/dgggcrkxq/image/upload/v1597455632/noticon/yx4pbpbp6mtqo0yrinzk.png"
        />
        <Aside.GroupMenu
          title="emoji"
          handleClick={action('emoji clicked')}
          emoji="🧢"
        />
        <Aside.GroupMenu
          title="sequlize"
          handleClick={action('sequlize clicked')}
          iconUrl="https://res.cloudinary.com/dgggcrkxq/image/upload/v1597622693/noticon/m9x6mei2mo39iesqulm9.png"
        />
        <Aside.GroupMenu
          title="deno"
          handleClick={action('deno clicked')}
          iconUrl="https://res.cloudinary.com/dgggcrkxq/image/upload/v1589948805/noticon/v6wd8jsidu5tsi8bsrrm.png"
        />
        <Aside.GroupMenu
          title="mongoDB"
          handleClick={action('mongoDB clicked')}
          iconUrl="https://res.cloudinary.com/dgggcrkxq/image/upload/v1581824691/noticon/hmvqgvug8zl7etwmabuq.png"
        />
      </Aside.Group>
    </Aside>
  );
};

export const AsideNotOpened = (): JSX.Element => {
  return (
    <Aside visible>
      <Aside.Group title="메뉴 그룹" open={false}>
        <Aside.GroupMenu title="react" handleClick={action('react clicked')} />
        <Aside.GroupMenu title="vue" handleClick={action('vue clicked')} />
      </Aside.Group>
    </Aside>
  );
};
