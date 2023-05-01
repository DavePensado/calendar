import React from "react";
import styles from "./MonthDay.module.css";
import cx from "classnames";
import { format, getDaysInMonth, startOfMonth } from "date-fns";

const MonthDay = (props) => {
  const { daysData, pickCurrentDay, currentDay } = props;

  const daysArr = [];

  const changeDay = (e) => {
    const dayValue = e.target.innerHTML;
    pickCurrentDay(dayValue);
  };

  const firstDayOfMonth = format(
    startOfMonth(daysData),
    "E"
  ).toLocaleLowerCase();

  for (let i = 0; i <= getDaysInMonth(daysData); i++) {
    let monthDayClasses = cx({
      [styles.hidden]: i === 0,
      [styles[firstDayOfMonth]]: i === 0,
      [styles["month-day"]]: i !== 0,
      [styles["month-day-active"]]: i === Number(currentDay),
    });

    daysArr.push(
      <p key={i} id={i} className={monthDayClasses} onClick={changeDay}>
        {i}
      </p>
    );
  }

  return daysArr;
};

export default MonthDay;
