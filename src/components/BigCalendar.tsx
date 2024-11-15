"use client";

import { adjustScheduleToCurrentWeek } from "@/lib/utils";
import moment from "moment";
import { useState } from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = ({
  data
}: {
  data: {
    title: string;
    start: Date;
    end: Date;
  }[];
}) => {
  const [calendarView, setCalendarView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setCalendarView(selectedView);
  };

  const schedule = adjustScheduleToCurrentWeek(data);

  return (
    <Calendar
      localizer={localizer}
      events={schedule}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={calendarView}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};

export default BigCalendar;
