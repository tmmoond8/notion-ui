import React from "react";
import { addDecorator} from '@storybook/react';
import { Global, css } from '@emotion/core';
import resetCSS from '../src/styles/reset';

addDecorator(story => (
  <>
    <Global styles={css`
      ${resetCSS}
    `}
    />
    {story()}
  </>
));