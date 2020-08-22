/* eslint-disable import/prefer-default-export */
import { css, SerializedStyles } from '@emotion/core';
import { colors } from '../../styles';

export const base = css`
  display: block;
  width: 1em;
  height: auto;
  font-family: 'Inter', Helvetica, 'Apple Color Emoji', Arial, sans-serif,
    'Segoe UI Emoji', 'Segoe UI Symbol';
  fill: ${colors.grey};
  flex-shrink: 0;
  backface-visibility: hidden;
`;

export const customStyle = (p: { color?: string }): SerializedStyles => css`
  color: currentColor;
  fill: currentColor;
  ${p.color && `fill: ${p.color};`}
`;

export const size = {
  Tiny: css`
    width: 12px;
    min-height: 12px;
    & > svg {
      width: 12px;
    }
  `,
  Small: css`
    width: 14px;
    min-height: 14px;
    & > svg {
      width: 14px;
    }
  `,
  Normal: css`
    width: 16px;
    min-height: 16px;
    & > svg {
      width: 16px;
    }
  `,
  Big: css`
    width: 18px;
    min-height: 18px;
    & > svg {
      width: 18px;
    }
  `,
  Huge: css`
    width: 20px;
    min-height: 20px;
    & > svg {
      width: 20px;
    }
  `,
  Default: css`
    width: 1em;
    min-height: 1em;
    & > svg {
      width: 1em;
    }
  `,
};

export const iconButton = css`
  &.IconButton.Button {
    width: auto;
    height: 100%;

    &:hover {
      background-color: transparent;
    }
    &:active {
      background-color: transparent;
    }
  }
`;

export const disabled = css`
  opacity: 0.4;
  pointer-events: none;
  cursor: default;
`;
