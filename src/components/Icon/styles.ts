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

export const customStyle = (p: { color?: string }): SerializedStyles => css`
  ${p.color && `fill: ${p.color};`}
`;

export const size = {
  Tiny: css`
    min-height: 12px;
    & > svg {
      width: 12px;
    }
  `,
  Small: css`
    min-height: 14px;
    & > svg {
      width: 14px;
    }
  `,
  Normal: css`
    min-height: 16px;
    & > svg {
      width: 16px;
    }
  `,
  Big: css`
    min-height: 18px;
    & > svg {
      width: 18px;
    }
  `,
  Huge: css`
    min-height: 20px;
    & > svg {
      width: 20px;
    }
  `,
  Default: css`
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
  cursor: text;
`;
