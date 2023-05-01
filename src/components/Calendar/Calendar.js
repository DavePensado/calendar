import React, { Component } from "react";
import CalendarSide from "../CalendarSide/CalendarSide";
import FrontSide from "../FrontSide/FrontSide";
import styles from "./Calendar.module.css";
import DateContext from "../../contexts/DateContext";
import { format, isThisMonth } from "date-fns";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      setDate: format(new Date(), "d"),
      currentDay: {
        weekDay: format(new Date(), "EEEE"),
        day: format(new Date(), "d"),
      },
    };
  }

  setCurrentDay = () => {
    return {
      date: new Date(),
      setDate: format(new Date(), "d"),
      currentDay: {
        weekDay: format(new Date(), "EEEE"),
        day: format(new Date(), "d"),
      },
    };
  };

  pickCurrentDay = (day) => {
    const weekDay = format(
      new Date(
        format(this.state.date, "yyyy"),
        format(this.state.date, "M") - 1,
        day
      ),
      "EEEE"
    );
    this.setState({
      setDate: day,
      currentDay: {
        weekDay: weekDay,
        day: day,
      },
    });
  };

  nextMonth = () => {
    const year = format(this.state.date, "yyyy");
    const month = format(this.state.date, "M");
    let newDate = new Date(year, month, 1);

    if (!isThisMonth(newDate)) {
      this.setState({
        date: newDate,
        setDate: 0,
      });
    } else {
      this.setState(this.setCurrentDay());
    }
  };

  prevMonth = () => {
    const year = format(this.state.date, "yyyy");
    const month = format(this.state.date, "M") - 1;
    let newDate = new Date(year, month - 1, 1);

    if (!isThisMonth(newDate)) {
      this.setState({
        date: newDate,
        setDate: 0,
      });
    } else {
      this.setState(this.setCurrentDay());
    }
  };

  render() {
    const { date, currentDay, setDate } = this.state;
    return (
      <div className={styles.wrapper}>
        <DateContext.Provider
          value={[date, currentDay, this.pickCurrentDay, setDate]}
        >
          <FrontSide />
          <CalendarSide nextMonth={this.nextMonth} prevMonth={this.prevMonth} />
        </DateContext.Provider>
      </div>
    );
  }
}

export default Calendar;
