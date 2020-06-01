import { css } from '@emotion/core';
import { colors } from 'src/styles/themes';

export const textFiled = {
  wrapper: css`
    > label {
      font-size: 11px;
      line-height: 16px;
      color: ${colors.R60};
      font-weight: 500;
    }
  `,
  default: css`
    display: flex;
    align-items: center;
    position: relative;

    padding: 4px 10px;
    border-radius: 3px;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(15, 15, 15, 0.1) 0px 1px 1px inset;
    background: rgba(242, 241, 238, 0.6);
    color: ${colors.R};
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
      background: none;
      resize: none;

      &::placeholder {
        color: ${colors.R32};
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
      box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(45, 170, 219, 0.5) 0px 0px 0px 2px, rgba(45, 170, 219, 0.5) 0px 1px 1px;
    `,
    error: css`
      box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset, rgba(235, 87, 87, 0.5) 0px 0px 0px 2px, rgba(235, 87, 87, 0.5) 0px 1px 1px;
    `,
  },
};


export const select = css``;
