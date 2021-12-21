/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Icon } from 'notion-ui';
import ContextMenu from '.';

export default {
  title: 'ContextMenu',
  component: ContextMenu,
};

export const openContextMenu = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const contextMenu = ContextMenu.useContextMenu();
  const handleCloseModal = contextMenu.close;
  contextMenu.setContents(
    <>
      <ContextMenu.Item left={<Icon icon="add" />} center="add" right="abc" />
      <ContextMenu.Item center="abc" />
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
