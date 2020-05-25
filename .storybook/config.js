import React from "react";
import { addDecorator} from '@storybook/react';
import { Global, css } from '@emotion/core';

addDecorator(story => (
  <>
    {story()}
  </>
));