import React, { useState } from "react";
import "./../style/DatePicker.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const history = useHistory();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="datePicker">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        className="datepicker__card"
      />
      <div className="datepicker__options">
        <h2>
          Number of guests
          <PeopleIcon />
        </h2>
        <input type="number" defaultValue={2} min={0} />
        <Button
          className="datePicker__button"
          onClick={() => history.push("/search")}
        >
          Search Airbnb
        </Button>
      </div>
    </div>
  );
}

export default DatePicker;
