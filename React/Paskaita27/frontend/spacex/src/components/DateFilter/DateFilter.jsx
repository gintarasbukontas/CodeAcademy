import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function DateFilter({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  start,
  end,
}) {
  const handleDate = (date) => {
    if (start) {
      setStartDate(date.toISOString());
      console.log("Start date:", date.toISOString());
    } else if (end) {
      setEndDate(date.toISOString());
      console.log("End date:", date.toISOString());
    }
  };

  return (
    <DatePicker selected={start ? startDate : endDate} onChange={handleDate} />
  );
}
