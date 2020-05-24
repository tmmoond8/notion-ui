import React from "react";
import { addDecorator} from '@storybook/react';
import { Global, css } from '@emotion/core';
import globalCSS from '../src/styles/global';

addDecorator(story => (
  <>
    <Global styles={css`
      ${globalCSS}
    `}
    />
    {story()}
  </>
));