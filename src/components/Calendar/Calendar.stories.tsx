import React from 'react';
import styled from '@emotion/styled';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Calendar } from 'notion-ui';

const YearLayout = styled.div`
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  max-width: 1660px;
  grid-gap: 32px;
  margin: 0 auto;
`;

const MonthLayout = styled.div`
  width: 232px;
`;

export default {
  title: 'Calendar',
  component: Calendar,
};

export const Month = () => (
  <MonthLayout>
    <Calendar.Month
      year={2021}
      month={5}
    />
  </MonthLayout>
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
