import React, { Component } from "react";
import CalendarSide from "../CalendarSide/CalendarSide";
import FrontSide from "../FrontSide/FrontSide";
import styles from "./Calendar.module.css";
import DateContext from "../../contexts/DateContext";
import { add, sub, startOfMonth } from "date-fns";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  pickCurrentDay = (date) => {
    this.setState({
      date: new Date(date),
    });
  };

  nextMonth = () => {
    const firstDayOfMonth = startOfMonth(this.state.date);
    const firstDayNextMonth = add(firstDayOfMonth, { months: 1 });
    this.setState({
      date: firstDayNextMonth,
    });
  };

  prevMonth = () => {
    const firstDayOfMonth = startOfMonth(this.state.date);
    const firstDayNextMonth = sub(firstDayOfMonth, { months: 1 });
    this.setState({
      date: firstDayNextMonth,
    });
  };

  render() {
    const { date } = this.state;
    return (
      <div className={styles.wrapper}>
        <DateContext.Provider value={[date, this.pickCurrentDay]}>
          <FrontSide date={date} />
          <CalendarSide
            date={date}
            nextMonth={this.nextMonth}
            prevMonth={this.prevMonth}
          />
        </DateContext.Provider>
      </div>
    );
  }
}

export default Calendar;
