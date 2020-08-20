/* eslint-disable import/prefer-default-export */
import { css, SerializedStyles } from '@emotion/core';

export const spacing = (size: number): SerializedStyles => css`
  display: inline-block;
  width: 100%;
  height: 0;
  padding: 0;
  margin: ${size}px 0 0 0;
`;
