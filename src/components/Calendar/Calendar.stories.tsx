import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Calendar } from 'notion-ui';

export default {
  title: 'Calendar',
  component: Calendar,
};

export const Month = () => (
  <Calendar.Month
    year={2021}
    month={4}
  />
);

Month.story = {
  decorators: [withKnobs],
};
