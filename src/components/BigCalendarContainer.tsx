import prisma from "@/lib/prisma";
import BigCalendar from "./BigCalendar";

const BigCalendarContainer = async ({
  type,
  id
}: {
  type: "teacherId" | "classId";
  id: string | number;
}) => {
  const dataRes = await prisma.lesson.findMany({
    where: {
      ...(type === "teacherId"
        ? { teacherId: id as string }
        : { classId: id as number })
    }
  });

  const data = dataRes.map((lesson) => {
    return {
      title: lesson.name,
      start: lesson.startTime,
      end: lesson.endTime
    };
  });

  return (
    <div className="">
      <BigCalendar data={data} />
    </div>
  );
};

export default BigCalendarContainer;