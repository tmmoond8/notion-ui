import { css, SerializedStyles } from '@emotion/core';
import { colors } from '../../styles/themes';

const textDefault = `
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: 0;
  padding: 3px 2px;
  margin: 0;
`;

export const text = {
  P: css`
    font-size: 16px;
    font-weight: 400;
    color: ${colors.R};
    margin: 1px 0;
    ${textDefault}
  `,
  H1: css`
     color: ${colors.R};
    font-weight: 700;
    line-height: 1.2;
    font-size: 40px;
    ${textDefault}
  `,
  H2: css`
    color: ${colors.R};
    font-weight: 600;
    line-height: 1.3;
    font-size: 30px;
    ${textDefault}
  `,
  H3: css`
    color: ${colors.R};
    font-weight: 600;
    line-height: 1.3;
    font-size: 24px;
    ${textDefault}
  `,
  H4: css`
    color: ${colors.R};
    font-weight: 600;
    line-height: 1.3;
    font-size: 20px;
    ${textDefault}
  `,
  H5: css`
    color: ${colors.R};
    font-weight: 500;
    line-height: 1.3;
    font-size: 16px;
    ${textDefault}
  `,
  H6: css`
    color: ${colors.R};
    font-weight: 400;
    line-height: 1.3;
    font-size: 14px;
    ${textDefault}
  `,
  Span: css`
    ${textDefault}
  `,
  Strong: css`
    ${textDefault}
  `,
  U: css`
    text-decoration: underline;
    ${textDefault}
  `,
  DT: css`
    ${textDefault}
  `,
  DD: css`
    ${textDefault}
  `,
  LI: css`
    ${textDefault}
  `,
};

export const spacing = (size: number): SerializedStyles => css`
  display: inline-block;
  width: 100%;
  margin: ${size}px;
`;
