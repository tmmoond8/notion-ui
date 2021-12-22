/* eslint-disable prefer-destructuring */
import { useState, useEffect } from 'react';
import { toCSS, defaultColors, darkColors } from './colors';
import { Theme } from '../types/theme';
import localStorage from '../libs/localStorage';
import { addCssRule } from '../libs/utils';
import global from '../types/global';
import fonts from './fonts';

const insertStyles = () => {
  const styleEl = document.createElement('style');
  styleEl.id = 'notion-ui-theme';
  // const styleSheet = styleEl.sheet;
  if (styleEl) {
    addCssRule(styleEl, `:root { ${toCSS(defaultColors)} }`);
    addCssRule(
      styleEl,
      `@media (prefers-color-scheme: dark) :root { ${toCSS(darkColors)} }`,
    );
    addCssRule(styleEl, `:root body.notion-body.dark { ${toCSS(darkColors)} }`);
    addCssRule(styleEl, fonts);
    document.head.appendChild(styleEl);
  }
};

export const loadTheme = () => {
  const theme = localStorage.theme;
  const bodyElement = global.document?.querySelector('body');
  if (bodyElement) {
    if (!bodyElement.classList.contains('notion-body')) {
      bodyElement.classList.add('notion-body');
    }
    if (theme === Theme.Dark && !bodyElement.classList.contains('dark')) {
      bodyElement.classList.add('dark');
    }
  }
  return theme;
};

export const useTheme = () => {
  const [initial, setInitial] = useState(false);
  const theme = typeof window === 'undefined' ? Theme.Deault : loadTheme();
  useEffect(() => {
    if (!initial && window) {
      if (document.querySelector('#notion-ui-theme')) {
        setInitial(true);
        return;
      }
      insertStyles();
      setInitial(true);
    }
  }, [initial, setInitial]);
  return theme;
};

export const toggleTheme = () => {
  const theme = localStorage.theme;
  const bodyElement = document.querySelector('body');
  if (bodyElement) {
    if (theme === Theme.Deault) {
      bodyElement.classList.add('dark');
    } else {
      bodyElement.classList.remove('dark');
    }
  }
  localStorage.theme = theme === Theme.Deault ? Theme.Dark : Theme.Deault;
};
