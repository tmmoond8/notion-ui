import { Theme } from '../types/theme';
import global from '../types/global';

const NOTION_UI_THEME = 'NOTION_UI_THEME';

export default {
  get theme(): Theme {
    const themeFromLocalStorage = global.localStorage?.getItem(
      NOTION_UI_THEME,
    ) as Theme | null;
    const deviceTheme =
      global.matchMedia &&
      global.matchMedia('(prefers-color-scheme: dark)').matches
        ? Theme.Dark
        : Theme.Deault;
    return themeFromLocalStorage ?? deviceTheme;
  },
  set theme(theme: Theme) {
    global.localStorage?.setItem(NOTION_UI_THEME, theme);
  },
};
