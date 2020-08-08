import { css } from '@emotion/core';
import { colors } from '../../styles';

export const baseStyle = css`
  display: inline-block;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  background-color: transparent;
  border: 0;
  margin: 0;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  transition: background 120ms ease-in 0s;

  white-space: nowrap;
  border-width: 0;
  border-radius: 3px;
  box-shadow: none;
  color: ${colors.grey};
  fill: ${colors.grey};
  padding: 0 8px;
  font-size: 14px;
  font-weight: 500;
  outline: none;

  &::-moz-focus-inner {
    border-style: none;
  }
  /* disabled {
      pointerEvents: none;
      cursor: default;
    } */
  @media print {
    color-adjust: exact;
  }
`;
export const type = {
  Default: css`
    background-color: transparent;
    box-shadow: none;
    color: ${colors.grey};
    fill: ${colors.grey};
    &:hover {
      background-color: ${colors.grey08};
    }
    &:active {
      background-color: ${colors.grey16};
    }
  `,
  Primary: css`
    background-color: ${colors.primary100};
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset,
      rgba(15, 15, 15, 0.1) 0px 1px 2px;
    color: white;
    fill: white;
    &:hover {
      background-color: ${colors.primary100};
    }
    &:active {
      background-color: ${colors.primary200};
    }
  `,
  PrimaryText: css`
    color: ${colors.primary100};
    font-weight: 500;
    &:active {
      opacity: 0.4;
    }
  `,
};

export const size = {
  Tiny: css`
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    padding: 0 4px;
  `,
  Small: css`
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    padding: 0 8px;
  `,
  Medium: css`
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    padding: 0 8px;
  `,
  Big: css`
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    padding: 0 8px;
  `,
};
