export type AlignX = 'left' | 'center' | 'right';

export interface ContextMenu {
  name: string;
  onClick: () => void;
  underline?: boolean;
}

export interface ContextMenuData {
  id: string;
  targetElement: HTMLElement;
  alignX?: AlignX;
  handleClose: () => void;
  menus: ContextMenu[];
}

export interface CustomContextMenuData {
  id: string;
  targetElement: HTMLElement;
  alignX?: AlignX;
  handleClose: () => void;
  contents: React.ReactNode;
}
