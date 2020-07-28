import { ReactElement } from 'react';
import { css, SerializedStyles } from '@emotion/core';
import Break from 'react-break';

export const BreakPoints = {
  Mobile: 425,
  Tablet: 768,
  Desktop: 1440,
};

export const desktop = (style: SerializedStyles): SerializedStyles => css`
  @media (min-width: ${BreakPoints.Tablet + 1}px) {
    ${style};
  }
`;

interface ResponseProps {
  mobile?: ReactElement;
  desktop?: ReactElement;
}

export const Responsible = (props: ResponseProps): JSX.Element => {
  const { mobile, desktop } = props;
  return (
    <>
      {desktop && (
        <Break
          breakpoints={BreakPoints}
          query={{ method: 'isAtLeast', breakpoint: 'Tablet' }}
        >
          {desktop}
        </Break>
      )}
      {mobile && (
        <Break
          breakpoints={BreakPoints}
          query={{ method: 'isAtMost', breakpoint: 'Tablet' }}
        >
          {mobile}
        </Break>
      )}
    </>
  );
};
