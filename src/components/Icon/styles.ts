/* eslint-disable import/prefer-default-export */
import { css, SerializedStyles } from '@emotion/core';
import { colors } from '../../styles';

export const base = css`
  display: block;
  width: 1em;
  height: auto;
  fill: ${colors.grey};
  flex-shrink: 0;
  backface-visibility: hidden;
`;

export const customStyle = (p: {
  size?: string;
  color?: string;
}): SerializedStyles => css`
  ${p.size && `width: ${p.size};`}
  ${p.color && `fill: ${p.color};`}
`;
