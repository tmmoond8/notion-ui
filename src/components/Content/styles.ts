/* eslint-disable import/prefer-default-export */
import { css, SerializedStyles } from '@emotion/core';

export const spacing = (size: number): SerializedStyles => css`
  display: inline-block;
  width: 100%;
  margin: ${size}px;
`;
