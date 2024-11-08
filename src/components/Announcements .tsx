export const announcements = [
  {
    id: 1,
    title: "Team Outing",
    date: "2024-11-15",
    description: "Join us for a fun day out with the team."
  },
  {
    id: 2,
    title: "Product Launch",
    date: "2024-12-01",
    description: "Exciting new product release; don’t miss it!"
  },
  {
    id: 3,
    title: "Year-End Party",
    date: "2024-12-20",
    description: "Celebrate the year with food, music, and awards."
  }
];

const Announcements = () => {
  return (
    <ul className="flex flex-col gap-4 bg-white p-4 rounded-md ">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <p className="text-xs text-gray-400">View All</p>
      </div>
      {announcements.map((announcement) => (
        <li
          key={announcement.id}
          className="p-4 rounded-md  odd:bg-customColorSkyLight even:bg-customColorPurpleLight "
        >
          <div className="flex items-center justify-between">
            <h1 className="font-medium">{announcement.title}</h1>
            <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">
              {announcement.date}
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
