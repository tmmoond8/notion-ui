/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Icon } from 'notion-ui';
import ContextMenu from '.';

export default {
  title: 'ContextMenu',
  component: ContextMenu,
};

export const openContextMenu = () => {
  const contextMenu = ContextMenu.useContextMenu();
  contextMenu.setContents(
    <>
      <ContextMenu.Item left={<Icon icon="add" />} center="add" right="abc" />
      <ContextMenu.Item
        left={<Icon icon="comment" />}
        center="comment"
        right="comment"
      />
      <ContextMenu.HR />
      <ContextMenu.Item center="abc" />
      <ContextMenu.Item center="abc" />
    </>,
  );

  return (
    <div>
      {Array.from({ length: 160 }).map((_, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={idx} onContextMenu={contextMenu.open}>
          Open Context Menu
        </span>
      ))}
    </div>
  );
};
