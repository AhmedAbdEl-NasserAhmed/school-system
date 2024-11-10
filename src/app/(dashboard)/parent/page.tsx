import Announcements from "@/components/Announcements ";
import BigCalendar from "@/components/BigCalendar";

const ParentPage = () => {
  return (
    <div className="flex flex-col flex-1 justify-between p-4 gap-4 xl:flex-row ">
      {/* Left */}
      <div className="w-full xl:w-2/3 bg-green-300 rounded-md ">
        <div className="h-full bg-white rounded-md p-4 ">
          <h2 className="font-semibold text-lg">Schedule (John Doe) </h2>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8 ">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
