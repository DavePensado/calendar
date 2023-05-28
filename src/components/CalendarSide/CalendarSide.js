import React from "react";
import styles from "./CalendarSide.module.css";
import MonthDay from "./MonthDay/MonthDay";
import { format } from "date-fns";

const CalendarSide = (props) => {
  const weekDayArr = ["S", "M", "T", "W", "T", "F", "S"];

  const weekDay = weekDayArr.map((wd, i) => (
    <p key={i} className={styles["week-day"]}>
      {wd}
    </p>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles["heading-wrapper"]}>
        <i onClick={props.prevMonth} className="fa-solid fa-arrow-left"></i>
        <h2 className={styles.heading}>{format(props.date, "MMMM")}</h2>
        <i onClick={props.nextMonth} className="fa-solid fa-arrow-right"></i>
      </div>

      <div className={styles["week-day-wrapper"]}>
        {weekDay}
        <MonthDay />
      </div>
    </div>
  );
};

export default CalendarSide;
