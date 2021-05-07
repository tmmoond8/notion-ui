import React from 'react'
import styled from '@emotion/styled';
import cx from 'classnames';
import { Day, Head, Empty } from './Day';
import { startOfMonth, getDaysInMonth } from 'date-fns';

const Month: React.FC<{
  year: number;
  month: number;
}> = ({ year, month }) => {
  const monthDate = new Date(year, month);
  const firstDayInMonth = startOfMonth(monthDate).getDay();
  const days = getDaysInMonth(monthDate);
  const title = `${year}년 ${month}월`
  return (
    <MonthBox className={cx('CalendarMonth')}>
      <Title>{title}</Title>
      <Grid>
        {[0, 1, 2, 3, 4, 5, 6].map(num => <Head dayNum={num} />)}
        {new Array(firstDayInMonth).fill(null).map(_ => <Empty />)}
        {new Array(days).fill(null).map((_, index) => <Day number={index + 1} />)}
      </Grid>
    </MonthBox>
  )
}

export default Month

const MonthBox = styled.div`
  width: 270px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;

const Grid = styled.ol`
  display: inline-grid;
  width: 224px;
  height: 240px;
  grid-template-columns: repeat(7, 1fr);
  padding: 0;
`;