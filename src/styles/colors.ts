/* eslint-disable implicit-arrow-linebreak */
import { css } from '@emotion/core';

export const defaultColors = {
  primary50: '#2eabdc',
  primary100: '#069bcd',
  primary200: '#008dbe',
  grey: 'rgb(55, 53, 47)',
  grey08: 'rgba(55, 53, 47, 0.08)',
  grey16: 'rgba(55, 53, 47, 0.16)',
  grey32: 'rgba(55, 53, 47, 0.32)',
  grey40: 'rgba(55, 53, 47, 0.40)',
  grey60: 'rgba(55, 53, 47, 0.60)',
  red: 'rgb(235, 87, 87)',
  red50: 'rgb(235, 87, 87, 0.50)',
  backgroundEmbed: 'rgb(242, 241, 238)',
  background: 'rgb(255, 255, 255)',
  backgroundAside: 'rgb(247, 246, 243)',
  background100: 'rgba(242, 241, 238, 0.6)',
  dimmed: 'rgba(47, 52, 55, 0.4)',
  notDimmed: 'rgba(47, 52, 55, 0)',
  modalDimmed: 'rgba(15, 15, 15, 0.6)',
  transparent: 'transparent',
  modalBody: 'rgb(242, 241, 238)',
  modalContentWrapper: 'rgb(247, 246, 243)',
  scrollBar: 'rgba(55, 53, 47, 0.12)',
};

export type Colors = Record<keyof typeof defaultColors, string>;

export const darkColors: Colors = {
  ...defaultColors,
  primary50: '#2eabdc',
  primary100: '#069bcd',
  primary200: '#008dbe',
  grey: 'rgba(255, 255, 255, 0.9)',
  grey08: 'rgba(255, 255, 255, 0.08)',
  grey16: 'rgba(255, 255, 255, 0.16)',
  grey32: 'rgba(255, 255, 255, 0.32)',
  grey40: 'rgba(255, 255, 255, 0.40)',
  grey60: 'rgba(255, 255, 255, 0.60)',
  backgroundEmbed: 'rgb(63, 68, 71)',
  background: 'rgb(47, 52, 55);',
  dimmed: 'rgba(0, 0, 0, 0.2)',
  backgroundAside: 'rgb(55, 60, 63)',
  background100: 'rgba(15, 15, 15, 0.3)',
  modalBody: 'rgb(55, 60, 63)',
  modalContentWrapper: 'rgb(63, 68, 71)',
  scrollBar: 'rgba(255, 255, 255, 0.03)',
};

export const toCSS = (cssObject: object): string =>
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

export const colors: Colors = Object.keys(defaultColors).reduce(
  (accum, key) => ({ ...accum, [key]: `var(--notion-ui--${key})` }),
  Object.create(defaultColors),
);
