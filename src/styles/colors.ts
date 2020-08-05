/* eslint-disable prefer-destructuring */
/* eslint-disable implicit-arrow-linebreak */
import { css } from '@emotion/core';
import { useState, useEffect } from 'react';
import localStorage from '../libs/localStorage';
import { Theme } from '../types/theme';

const defaultColors = {
  primary50: '#2eabdc',
  primary100: '#069bcd',
  primary200: '#008dbe',
  grey: 'rgb(55, 53, 47)',
  grey08: 'rgba(55, 53, 47, 0.08)',
  grey16: 'rgba(55, 53, 47, 0.16)',
  grey32: 'rgba(55, 53, 47, 0.32)',
  grey60: 'rgba(55, 53, 47, 0.60)',
  backgroundEmbed: 'rgb(242, 241, 238)',
  background: 'rgb(255, 255, 255)',
  backgroundAside: 'rgb(247, 246, 243)',
  background100: 'rgba(242, 241, 238, 0.6)',
  dimmed: 'rgba(47, 52, 55, 0.4)',
  notDimmed: 'rgba(47, 52, 55, 0)',
};

export type Colors = Record<keyof typeof defaultColors, string>;

const darkColors: Colors = {
  ...defaultColors,
  primary50: '#2eabdc',
  primary100: '#069bcd',
  primary200: '#008dbe',
  grey: 'rgba(255, 255, 255, 0.9)',
  grey08: 'rgba(255, 255, 255, 0.08)',
  grey16: 'rgba(255, 255, 255, 0.16)',
  grey32: 'rgba(255, 255, 255, 0.32)',
  grey60: 'rgba(255, 255, 255, 0.60)',
  backgroundEmbed: 'rgb(63, 68, 71)',
  background: 'rgb(47, 52, 55);',
  dimmed: 'rgba(0, 0, 0, 0.2)',
  backgroundAside: 'rgb(55, 60, 63)',
  background100: 'rgba(15, 15, 15, 0.3)',
};

const toCSS = (cssObject: object): string =>
  Object.entries(cssObject)
    .map(([key, value]) => `--notion-ui--${key}: ${value};`)
    .join('\n');

export const colorCss = css`
  :root {
    ${toCSS(defaultColors)}
  }
  @media (prefers-color-scheme: dark) {
    :root {
      ${toCSS(darkColors)}
    }
  }
  :root {
    body.notion-body {
      ${toCSS(defaultColors)}
    }
  }
  :root {
    body.notion-body.dark {
      ${toCSS(darkColors)}
    }
  }
`;

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
  if (!bodyElement) {
    return;
  }
  if (theme === Theme.Dark) {
    bodyElement.className += ' notion-body dark';
  } else {
    bodyElement.className += ' notion-body';
  }
};

export const useTheme = () => {
  const [initial, setInitial] = useState(false);
  useEffect(() => {
    if (!initial && window) {
      if (document.querySelector('#notion-ui-theme')) {
        setInitial(true);
        return;
      }
      insertStyles();
      loadTheme();
      setInitial(true);
    }
  }, [initial, setInitial]);
};

export const colors: Colors = Object.keys(defaultColors).reduce(
  (accum, key) => ({ ...accum, [key]: `var(--notion-ui--${key})` }),
  Object.create(defaultColors),
);
