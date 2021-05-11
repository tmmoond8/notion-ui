import React from 'react'
import styled from '@emotion/styled';
import cx from 'classnames';
import { startOfMonth, getDaysInMonth, lastDayOfMonth } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz'
import { Day, Head, Empty } from './Day';
import { colors } from '../../styles';

const timeZone = 'Asia/Seoul';
const createDate = (date: Date) => utcToZonedTime(date, timeZone);

const Month: React.FC<{
  year: number;
  month: number;
}> = ({ year, month }) => {
  const monthDate = createDate(new Date(year, month - 1));
  const firstDayInMonth = startOfMonth(monthDate).getDay();
  const days = getDaysInMonth(monthDate);
  const title = `${year}년 ${month}월`;
  const today = React.useMemo(() => {
    const now = createDate(new Date());
    return `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}`;
  }, [])
  const lastMonth = getDaysInMonth(createDate(new Date(year, month - 2)));
  const lastDay = lastDayOfMonth(monthDate);

  return (
    <MonthBox className={cx('CalendarMonth')}>
      <Title>{title}</Title>
      <Grid>
        {[0, 1, 2, 3, 4, 5, 6].map(num => <Head dayNum={num} />)}
        {new Array(firstDayInMonth).fill(null).map((_, index) => <Empty key={`last${year}${month}${index}`} number={lastMonth - (firstDayInMonth - (index + 1))} />)}
        {new Array(days).fill(null).map((_, index) => (
          <Day
            key={`${year}${month}${index}`}
            number={index + 1}
            isToday={today === `${year}${month}${index + 1}`}
          />
        ))}
        {new Array(6 - lastDay.getDay()).fill(null).map((_, index) => <Empty key={`next${year}${month}${index}`} number={index + 1} />)}
      </Grid>
    </MonthBox>
  )
}

export default Month

const MonthBox = styled.div`
  min-width: 232px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 16px;
`;

const Grid = styled.ol`
  display: inline-grid;
  width: 100%;
  height: 240px;
  grid-template-columns: repeat(7, 1fr);
  padding: 0;
  & > *:nth-of-type(7n), & > *:nth-of-type(7n + 1) {
    color: ${colors.red};
  }
  list-style: none;
`;