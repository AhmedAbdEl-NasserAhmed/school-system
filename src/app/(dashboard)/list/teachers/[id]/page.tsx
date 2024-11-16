import Announcements from "@/components/Announcements ";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import Card from "@/components/Card";
import StraightAnglePieChart from "@/components/StraightAnglePieChart";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Teacher } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SingleTeacherPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const teacher:
    | (Teacher & {
        _count: { subjects: number; lessons: number; classes: number };
      })
    | null = await prisma.teacher.findUnique({
    where: { id },
    include: {
      _count: {
        select: {
          subjects: true,
          lessons: true,
          classes: true
        }
      }
    }
  });

  if (!teacher) {
    return notFound();
  }

  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row  gap-4">
          {/* Teacher Card */}
          <Card table="teacher" data={teacher} person={teacher} />
          {/* Small Cards */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap ">
            <div className="flex items-center gap-2 bg-white p-4 w-full rouned-md md:w-[47%] xl:w-[45%] 2xl:w-[47%] ">
              <Image
                className="h-6 w-6"
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white p-4 w-full rouned-md md:w-[47%] xl:w-[45%] 2xl:w-[47%] ">
              <Image
                className="h-6 w-6"
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
              />
              <div>
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>{" "}
            <div className="flex items-center gap-2 bg-white p-4 w-full rouned-md md:w-[47%] xl:w-[45%] 2xl:w-[47%] ">
              <Image
                className="h-6 w-6"
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>{" "}
            <div className="flex items-center gap-2 bg-white p-4 w-full rouned-md md:w-[47%] xl:w-[45%] 2xl:w-[47%] ">
              <Image
                className="h-6 w-6"
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
              />
              <div>
                <h1 className="text-xl font-semibold">6%</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white rouned-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schedule </h1>
          <BigCalendarContainer type="teacherId" id={teacher.id} />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        {/* Short cuts */}
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="flex flex-wrap mt-4 gap-4 text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-customColorSkyLight"
              href={`/list/classes?supervisorId=${"teacher2"}`}
            >
              Teacher&apos;s Classes
            </Link>
            <Link
              className="p-3 rounded-md bg-customColorPurpleLight"
              href={`/list/students?teacherId=${"teacher2"}`}
            >
              Teacher&apos;s Students
            </Link>
            <Link
              className="p-3 rounded-md bg-customColorYellowLight"
              href={`/list/lessons?teacherId=${"teacher2"}`}
            >
              Teacher&apos;s Lessons
            </Link>
            <Link
              className="p-3 rounded-md bg-pink-50"
              href={`/list/exams?teacherId=${"teacher2"}`}
            >
              Teacher&apos;s Exams
            </Link>
            <Link
              className="p-3 rounded-md bg-customColorSkyLight"
              href={`/list/assignments?teacherId=${"teacher2"}`}
            >
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        {/* Performance Chart */}
        <StraightAnglePieChart />

        {/* Announcments */}
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
