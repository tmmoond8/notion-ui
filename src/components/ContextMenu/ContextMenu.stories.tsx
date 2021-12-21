/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { Button } from 'notion-ui';
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
      <p>any content</p>
      <Button onClick={handleCloseModal}> close </Button>
    </>,
  );

  return (
    <div>
      {Array.from({ length: 6 }).map((_, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={idx} onContextMenu={contextMenu.open}>
          Open Context Menu
        </span>
      ))}
    </div>
  );
};
