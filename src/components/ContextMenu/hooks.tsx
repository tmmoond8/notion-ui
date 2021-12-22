/* eslint-disable no-underscore-dangle */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import ReactDOM from 'react-dom';
import global from '../../types/global';
import ContextMenu from './ContextMenu';

export const useContextMenu = () => {
  const contentsRef = React.useRef<React.ReactNode>(null);
  const MODAL_WRAPPER = 'NotionUiContextMenu';
  let contextMenuWrapper: HTMLDivElement | null = null;

  const close = () => {
    const bodyElement = document.querySelector('body');
    if (bodyElement && contextMenuWrapper) {
      bodyElement.removeChild(contextMenuWrapper);
      contextMenuWrapper = null;
    }
  };

  global.__NOTION_UI.closeModal = close;

  const open = (e: React.MouseEvent) => {
    const bodyElement = document.querySelector('body');
    e.preventDefault();
    const modal = (
      <ContextMenu
        handleClose={close}
        contents={contentsRef.current}
        pointX={e.clientX}
        pointY={e.clientY}
      />
    );
    contextMenuWrapper = document.createElement('div');
    contextMenuWrapper.classList.add(MODAL_WRAPPER);
    if (bodyElement && contextMenuWrapper) {
      bodyElement.appendChild(contextMenuWrapper);
      ReactDOM.render(modal, contextMenuWrapper);
    }
  };

  const setContents = (contents: React.ReactNode) => {
    contentsRef.current = contents;
  };

  return {
    open,
    close,
    setContents,
  };
};

export const useTabSelect = (tabs: string[]) => {
  const [selected, setSelected] = React.useState(
    tabs.length > 0 ? tabs[0] : '',
  );
  return {
    tabs,
    selected,
    handleSelect: setSelected,
  };
};

export const useCloseCallback = () => () => global.__NOTION_UI.closeModal();
