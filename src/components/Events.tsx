import Image from "next/image";

export const events = [
  {
    id: 1,
    title: "Team Sync",
    time: "9:00 AM - 10:00 AM",
    description: "Weekly team catch-up and updates."
  },
  {
    id: 2,
    title: "Client Call",
    time: "11:30 AM - 12:30 PM",
    description: "Discuss project milestones with the client."
  },
  {
    id: 3,
    title: "Design Review",
    time: "3:00 PM - 4:00 PM",
    description: "Review latest designs with the team."
  }
];

const Events = () => {
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
            <span className="text-gray-300 text-xs">{event.time}</span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Events;
