import Announcements from "@/components/Announcements ";
import BigCalendar from "@/components/BigCalendar";
import Card from "@/components/Card";
import StraightAnglePieChart from "@/components/StraightAnglePieChart";
import { studentsData, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const SingleStudentPage = ({ params }: { params: { id: string } }) => {
  const student = studentsData.find((studnet) => studnet.id === +params.id);

  console.log(student);

  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row  gap-4">
          {/* Teacher Card */}
          <Card
            data={{
              id: 1,
              username: "deanguerrero",
              email: "deanguerrero@gmail.com",
              password: "password",
              firstName: "Dean",
              lastName: "Guerrero",
              phone: "+1 234 567 89",
              address: "1234 Main St, Anytown, USA",
              bloodType: "A+",
              dateOfBirth: "2000-01-01",
              sex: "male",
              img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
            }}
            table="student"
            person={student}
          />
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
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
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
                <h1 className="text-xl font-semibold">18</h1>
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
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class Name</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white rouned-md p-4 h-[800px]">
          <h1>Student&apos;s Schedule </h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        {/* Short cuts */}
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="flex flex-wrap mt-4 gap-4 text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-customColorSkyLight" href="">
              Student&apos;s Classes
            </Link>
            <Link className="p-3 rounded-md bg-customColorPurpleLight" href="">
              Student&apos;s Students
            </Link>
            <Link className="p-3 rounded-md bg-customColorYellowLight" href="">
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="">
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-customColorSkyLight" href="">
              Student&apos;s Assignments
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

export default SingleStudentPage;
