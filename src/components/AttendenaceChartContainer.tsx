import Image from "next/image";
import AttendenaceChart from "./AttendenaceChar";
import prisma from "@/lib/prisma";

const AttendenaceChartContainer = async () => {
  const today = new Date();

  const dayOfWeek = today.getDay();

  const daySinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  const lastMonday = new Date(today);

  lastMonday.setDate(today.getDate() - daySinceMonday);

  const resData = await prisma.attendance.findMany({
    where: {
      date: {
        gte: lastMonday
      }
    },
    select: {
      date: true,
      present: true
    }
  });

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const attendanceMap: { [key: string]: { present: number; absent: number } } =
    {
      Mon: { present: 0, absent: 0 },
      Tue: { present: 0, absent: 0 },
      Wed: { present: 0, absent: 0 },
      Thu: { present: 0, absent: 0 },
      Fri: { present: 0, absent: 0 }
    };

  resData.forEach((item) => {
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      const dayName = daysOfWeek[dayOfWeek - 1];
      if (item.present) {
        attendanceMap[dayName].present += 1;
      } else {
        attendanceMap[dayName].absent += 1;
      }
    }
  });

  const data = daysOfWeek.map((day) => {
    return {
      name: day,
      present: attendanceMap[day].present,
      absent: attendanceMap[day].absent
    };
  });

  return (
    <div className="bg-white h-full rounded-xl p-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendenace</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <AttendenaceChart data={data} />
    </div>
  );
};

export default AttendenaceChartContainer;
