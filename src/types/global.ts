/* eslint-disable no-underscore-dangle */

type NotionUIGlobal = typeof globalThis & {
  __NOTION_UI: {
    closeAside: () => void;
    closeModal: () => void;
  } & Window;
};

if ((globalThis as NotionUIGlobal).__NOTION_UI === undefined) {
  Object.defineProperty(globalThis, '__NOTION_UI', {
    value: {
      closeAside: () => {},
      closeModal: () => {},
    },
    enumerable: false,
    configurable: false,
    writable: false,
  });
}

export default globalThis as NotionUIGlobal;
