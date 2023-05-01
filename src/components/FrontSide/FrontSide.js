import React from "react";
import styles from "./FrontSide.module.css";
import DateContext from "../../contexts/DateContext";

const FrontSide = () => {
  return (
    <DateContext.Consumer>
      {([date, currentDay]) => {
        const { day, weekDay } = currentDay;

        return (
          <div className={styles.container}>
            <h3 className={styles["week-day"]}>{weekDay}</h3>
            <h1 className={styles.date}>{day}</h1>
          </div>
        );
      }}
    </DateContext.Consumer>
  );
};

export default FrontSide;
