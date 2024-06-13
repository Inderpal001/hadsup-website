"use client";

import "./MiuiCalendar.scss";
import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function ResponsiveDatePickers() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker className="calendar-input" defaultValue={dayjs('2022-04-17')} />    
    </LocalizationProvider>
  );
}
