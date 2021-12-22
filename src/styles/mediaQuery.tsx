import { css, SerializedStyles } from '@emotion/core';

export const BreakPoints = {
  Mobile: 425,
  Tablet: 768,
  Desktop: 1440,
};

export const moreThan = (
  minWidth: number,
  style: SerializedStyles,
): SerializedStyles => css`
  @media (min-width: ${minWidth}px) {
    ${style};
  }
`;

export const desktop = (style: SerializedStyles): SerializedStyles => css`
  @media (min-width: ${BreakPoints.Tablet + 1}px) {
    ${style};
  }
`;
