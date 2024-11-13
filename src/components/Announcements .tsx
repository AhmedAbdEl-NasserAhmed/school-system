import { formatTime } from "@/helpers/utils";
import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";

const Announcements = async () => {
  const user = await currentUser();

  const { userId } = await auth();

  const role = user?.publicMetadata.role as string;

  const roleConditions = {
    teacher: { lessons: { some: { teacherId: userId! } } },
    student: { students: { some: { id: userId! } } },
    parent: { students: { some: { parentId: userId! } } }
  };

  const data = await prisma.announcement.findMany({
    take: 3,
    orderBy: { date: "asc" },
    where: {
      ...(role !== "admin" && {
        OR: [
          { classId: null },
          { class: roleConditions[role as keyof typeof roleConditions] || {} }
        ]
      })
    }
  });

  console.log(data);

  return (
    <ul className="flex flex-col gap-4 bg-white p-4 rounded-md ">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <p className="text-xs text-gray-400">View All</p>
      </div>
      {data.map((announcement) => (
        <li
          key={announcement.id}
          className="p-4 rounded-md  odd:bg-customColorSkyLight even:bg-customColorPurpleLight "
        >
          <div className="flex items-center justify-between">
            <h1 className="font-medium">{announcement.title}</h1>
            <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">
              {formatTime(announcement.date)}
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">
            {announcement.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Announcements;
