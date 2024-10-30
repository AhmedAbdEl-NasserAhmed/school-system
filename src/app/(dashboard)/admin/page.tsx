import AttendenaceChart from "@/components/AttendenaceChar";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/*Left */}

      <div className="w-full lg:w-2/3  flex flex-col gap-8  ">
        <div className="flex justify-between items-center gap-4 flex-wrap">
          {/*User Cards */}
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/*Middle Charts */}

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            {/*Count Charts */}
            <CountChart />
          </div>
          {/*Attendance Charts */}

          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendenaceChart />
          </div>
        </div>

        {/*Bottom Charts */}
      </div>

      {/*Right */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};

export default AdminPage;
