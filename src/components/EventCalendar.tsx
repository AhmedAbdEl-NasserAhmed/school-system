"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";

import { useRouter } from "next/navigation";
import { formatTime } from "@/helpers/utils";

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

  const { push } = useRouter();

  useEffect(() => {
    if (value instanceof Date) {
      push(`?date=${formatTime(value)}`);
    }
  }, [value, push]);

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default EventCalendar;
