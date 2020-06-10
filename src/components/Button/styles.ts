import { css } from '@emotion/core';
import { colors } from '../../styles/themes';

export const baseStyle = css`
  display: inline-block;
  align-items: center;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  background-color: ${colors.transparent};
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
  color: ${colors.R};
  fill: ${colors.R};
  padding: 0 8px;
  font-size: 14px;
  font-weight: 500;
  outline: none;

  &:hover {
    background-color: ${colors.R08};
  }
  &:active {
    background-color: ${colors.R16};
  }
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
    background-color: ${colors.transparent};
    box-shadow: none;
    color: ${colors.R};
    fill: ${colors.R};
    &:hover {
      background-color: ${colors.R08};
    }
    &:active {
      background-color: ${colors.R16};
    }
  `,
  Primary: css`
    background-color: ${colors.primaryLight};
    box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset,
      rgba(15, 15, 15, 0.1) 0px 1px 2px;
    color: ${colors.white};
    fill: ${colors.white};
    &:hover {
      background-color: ${colors.primary};
    }
    &:active {
      background-color: ${colors.primaryDeep};
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
