import Announcements from "@/components/Announcements ";
import BigCalendar from "@/components/BigCalendar";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalendar from "@/components/EventCalendar";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const StudentPage = async () => {
  const { userId } = await auth();

  const classItem = await prisma.class.findMany({
    where: {
      students: { some: { id: userId! } }
    }
  });

  return (
    <div className="flex flex-col justify-between p-4 gap-4 xl:flex-row ">
      {/* Left */}
      <div className="w-full xl:w-2/3 bg-green-300 rounded-md ">
        <div className="h-full bg-white rounded-md p-4 ">
          <h2 className="font-semibold text-lg">Schedule (4A)</h2>
          <BigCalendarContainer type="classId" id={classItem[0].id} />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
