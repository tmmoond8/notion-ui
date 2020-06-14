import React from "react";
import { addDecorator} from '@storybook/react';
import { Global, css } from "@emotion/core";
import { colorCss, colors } from '../src/styles'

addDecorator(story => {
  return (
    <>
    <Global
      styles={css`
        ${colorCss}
        body {
          background-color: ${colors.background};
          color: ${colors.grey};
        }
      `}
    />
      {story()}
    </>
  )
})