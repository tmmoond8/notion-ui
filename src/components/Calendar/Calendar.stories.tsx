import React from 'react';
import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Calendar } from 'notion-ui';

const YearLayout = styled.div`
  display: flex;
  flex-wrap: wrap;

  .CalendarMonth {
    margin-right: 20px;
  }
`;

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

export const Year = () => (
  <YearLayout>
    {new Array(12).fill(null).map((_, i) => <Calendar.Month
      year={2021}
      month={i + 1}
    />)}
  </YearLayout>
);

Month.story = {
  decorators: [withKnobs],
};

Year.story = {
  decorators: [withKnobs],
};
