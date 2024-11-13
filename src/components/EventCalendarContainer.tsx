import EventCalendar from "./EventCalendar";
import Events from "./Events";

const EventCalendarContainer = ({ dateParams }: { dateParams: string }) => {
  return (
    <div className="bg-white p-4 rounded-md">
      <EventCalendar />
      <Events dateParams={dateParams} />
    </div>
  );
};

export default EventCalendarContainer;
