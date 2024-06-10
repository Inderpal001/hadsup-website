"use client";

import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function BasicDateCalendar() {
  const calendarStyle = {
    backgroundColor: "#FDFDFD",
    color:"#000",
    borderRadius:"8px",
    boxShadow: "0 0 2px 0 rgba(0, 0, 0, .2), 0 5px 10px 0 rgba(0, 0, 0, .1)",
    maxWidth:"300px"
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar style={calendarStyle} />
    </LocalizationProvider>
  );
}
