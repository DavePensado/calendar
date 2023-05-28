import React from "react";
import styles from "./FrontSide.module.css";
import { format } from "date-fns";

const FrontSide = (props) => {
  const { date } = props;

  return (
    <div className={styles.container}>
      <h3 className={styles["week-day"]}>{format(date, "EEEE")}</h3>
      <h1 className={styles.date}>{format(date, "dd")}</h1>
    </div>
  );
};

export default FrontSide;
