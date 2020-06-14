import React from "react";
import { addDecorator} from '@storybook/react';
import { useTheme } from '../src/styles'

addDecorator(story => {
  useTheme();
  return (
    <>
      {story()}
    </>
  )
})