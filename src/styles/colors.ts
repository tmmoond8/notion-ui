import { css, SerializedStyles } from '@emotion/core';

const primary = {
  primaryLight: '#2eabdc',
  primary: '#069bcd',
  primaryDeep: '#008dbe',
};

const grey = {
  R: 'rgb(55, 53, 47)',
  R08: 'rgba(55, 53, 47, 0.08)',
  R16: 'rgba(55, 53, 47, 0.16)',
  R32: 'rgba(55, 53, 47, 0.32)',
  R60: 'rgba(55, 53, 47, 0.60)',
};

const base = {
  transparent: 'transparent',
  white: '#fff',
  black: '#000',
};

export default {
  ...base,
  ...primary,
  ...grey,
};

export const responsibleColorPalette: SerializedStyles = css`
  :root {
    --notion-ui--priamry-50: #2eabdc;
    --notion-ui--priamry-100: #069bcd;
    --notion-ui--priamry-200: #008dbe;
    --notion-ui--grey: rgb(55, 53, 47);
    --notion-ui--grey-08: rgba(55, 53, 47, 0.08);
    --notion-ui--grey-16: rgba(55, 53, 47, 0.16;
    --notion-ui--grey-32: rgba(55, 53, 47, 0.32);
    --notion-ui--grey-60: rgba(55, 53, 47, 0.60);
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --notion-ui--priamry-50: #2eabdc;
      --notion-ui--priamry-100: #069bcd;
      --notion-ui--priamry-200: #008dbe;
      --notion-ui--grey: rgb(55, 53, 47);
      --notion-ui--grey-08: rgba(55, 53, 47, 0.08);
      --notion-ui--grey-16: rgba(55, 53, 47, 0.16;
      --notion-ui--grey-32: rgba(55, 53, 47, 0.32);
      --notion-ui--grey-60: rgba(55, 53, 47, 0.60);
    }
  }
`;
