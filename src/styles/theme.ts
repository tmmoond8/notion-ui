/* eslint-disable prefer-destructuring */
import { useState, useEffect } from 'react';
import { toCSS, defaultColors, darkColors } from './colors';
import { Theme } from '../types/theme';
import localStorage from '../libs/localStorage';

const insertStyles = () => {
  const styleEl = document.createElement('style');
  styleEl.id = 'notion-ui-theme';
  document.head.appendChild(styleEl);
  const styleSheet: StyleSheet | null = styleEl.sheet;
  if (styleSheet) {
    // add default Theme color
    const sheet = styleSheet as CSSStyleSheet;
    sheet.insertRule(
      `:root { ${toCSS(defaultColors)} }`,
      sheet.cssRules.length,
    );
    // add dark Theme color
    sheet.insertRule(
      `@media (prefers-color-scheme: dark) :root { ${toCSS(darkColors)} }`,
      sheet.cssRules.length,
    );
    sheet.insertRule(
      `:root body.notion-body.dark { ${toCSS(darkColors)} }`,
      sheet.cssRules.length,
    );
  }
};

export const loadTheme = () => {
  const theme = localStorage.theme;
  const bodyElement = document.querySelector('body');
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
