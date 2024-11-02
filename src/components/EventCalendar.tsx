"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Events from "./Events";

const Calendar = dynamic(() => import("react-calendar"), {
  ssr: false,
  loading: () => (
    <p className="text-black text-sm flex items-center justify-center ">
      Loading Calendar....
    </p>
  )
});

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <Events />
    </div>
  );
};

export default EventCalendar;
