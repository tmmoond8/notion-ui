/* eslint-disable implicit-arrow-linebreak */
import { css } from '@emotion/core';
import { useState, useEffect } from 'react';

export interface Colors {
  primary50: string;
  primary100: string;
  primary200: string;
  grey: string;
  grey08: string;
  grey16: string;
  grey32: string;
  grey60: string;
  background: string;
  background100: string;
  backgroundEmbed: string;
}

const defaultColors: Colors = {
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
  background100: 'rgba(242, 241, 238, 0.6)',
};

const darkColors: Colors = {
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
      ${toCSS(darkColors)}
    }
  }
  :root {
    body.notion-body.dark {
      ${toCSS(darkColors)}
    }
  }
`;

export const useTheme = () => {
  const [initial, setInitial] = useState(false);
  useEffect(() => {
    if (!initial && window) {
      if (document.querySelector('#notion-ui-theme')) {
        setInitial(true);
        return;
      }

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
        setInitial(true);
      }
    }
  }, [initial]);
};

export const colors: Colors = Object.keys(defaultColors).reduce(
  (accum, key) => ({ ...accum, [key]: `var(--notion-ui--${key})` }),
  Object.create(defaultColors),
);
