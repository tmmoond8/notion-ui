import { Theme } from '../types/theme';

const NOTION_UI_THEME = 'NOTION_UI_THEME';

export default {
  get theme(): Theme {
    const themeFromLocalStorage = localStorage.getItem(
      NOTION_UI_THEME,
    ) as Theme | null;
    const deviceTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? Theme.Dark
        : Theme.Deault;
    return themeFromLocalStorage ?? deviceTheme;
  },
  set theme(theme: Theme) {
    localStorage.setItem(NOTION_UI_THEME, theme);
  },
};
