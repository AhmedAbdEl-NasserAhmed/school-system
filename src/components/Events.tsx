import { formatTime } from "@/helpers/utils";
import prisma from "@/lib/prisma";
import Image from "next/image";

const Events = async ({ dateParams }: { dateParams: string }) => {
  const date = dateParams ? new Date(dateParams) : new Date();

  const events = await prisma.event.findMany({
    where: {
      startTime: {
        gte: new Date(date.setHours(0, 0, 0, 0)),
        lte: new Date(date.setHours(23.59, 59, 999))
      }
    }
  });

  if (!events.length)
    return (
      <p className="font-semibold text-center mt-5">No Events for today</p>
    );

  return (
    <ul className="flex flex-col gap-4 mt-5 ">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {events.map((event) => (
        <li
          key={event.id}
          className="p-4 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-customColorSky even:border-t-customColorPurple "
        >
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600">{event.title}</h1>
            <span className="text-gray-300 text-xs">
              {formatTime(event.startTime)}
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Events;
