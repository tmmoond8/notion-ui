import { css, SerializedStyles } from '@emotion/core';

export const cssToReactStyle = (...styles: SerializedStyles[]) => {
  const regex = /([\w-]*)\s*:\s*([^;]*)/g;
  const mergedStyle = styles.reduce((accum, { styles }) => accum + styles, '');
  return mergedStyle.match(regex)?.reduce((accum, chunk) => {
    const [key, value] = chunk.split(':');
    return {
      ...accum,
      [key.replace(/-([a-z])/g, g => g[1].toUpperCase())]: value,
    };
  }, {});
};

export const coerceCssPixelValue = (value?: string | number): string => {
  if (value === undefined) {
    return '';
  }

  return typeof value === 'string' ? value : `${value}px`;
};
