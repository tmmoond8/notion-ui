import { css } from '@emotion/core';
import { colors } from '../../styles';

export const textFiled = {
  wrapper: css`
    > label {
      font-size: 11px;
      line-height: 16px;
      color: ${colors.grey60};
      font-weight: 500;
    }
  `,
  default: css`
    display: flex;
    align-items: center;
    position: relative;

    padding: 4px 10px;
    border-radius: 3px;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset,
      rgba(15, 15, 15, 0.1) 0px 1px 1px inset;
    background: ${colors.background100};
    color: ${colors.grey};
    font-size: 14px;
    line-height: 20px;
    cursor: text;

    > input {
      display: block;
      width: 100%;
      padding: 0;
      border: none;
      outline: none;

      color: inherit;
      font-size: inherit;
      line-height: inherit;
      background: transparent;
      resize: none;

      &::placeholder {
        color: ${colors.grey16};
      }
    }
  `,
  variant: {
    Default: css``,
    Filled: css``,
    Outlined: css``,
  },
  state: {
    focus: css`
      box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset,
        rgba(45, 170, 219, 0.5) 0px 0px 0px 2px,
        rgba(45, 170, 219, 0.5) 0px 1px 1px;
    `,
    error: css`
      box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset,
        rgba(235, 87, 87, 0.5) 0px 0px 0px 2px,
        rgba(235, 87, 87, 0.5) 0px 1px 1px;
    `,
  },
};

export const select = css``;
