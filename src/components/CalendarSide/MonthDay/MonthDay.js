import React from "react";
import styles from "./MonthDay.module.css";
import cx from "classnames";
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isWeekend,
  isSameMonth,
  startOfWeek,
} from "date-fns";
import DateContext from "../../../contexts/DateContext";

const MonthDay = () => {
  return (
    <DateContext.Consumer>
      {([date, pickCurrentDay]) => {
        const allMonth = eachDayOfInterval({
          start: startOfWeek(startOfMonth(date)),
          end: endOfWeek(endOfMonth(date)),
        });

        const getCurrentDay = (e) => {
          const date = e.target.attributes["get-date"].value;
          pickCurrentDay(date);
        };

        return (
          <>
            {allMonth.map((day, i) => {
              const cn = cx(styles["month-day"], {
                [styles["next-month"]]: !isSameMonth(day, date),
                [styles["month-day-active"]]:
                  format(date, "dd") === format(day, "dd") &&
                  isSameMonth(day, date),
                [styles.weekends]:
                  isWeekend(day) &&
                  isSameMonth(day, date) &&
                  format(date, "dd") !== format(day, "dd"),
                [styles[format(day, "EEE").toLocaleLowerCase()]]: i === 0,
              });

              return (
                <p
                  className={cn}
                  key={i}
                  onClick={getCurrentDay}
                  get-date={format(day, "yyyy-M-d")}
                >
                  {format(day, "d")}
                </p>
              );
            })}
          </>
        );
      }}
    </DateContext.Consumer>
  );
};

export default MonthDay;
