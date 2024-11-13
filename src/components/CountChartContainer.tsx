import Image from "next/image";
import CountChart from "./CountChart";
import prisma from "@/lib/prisma";

const CountChartContainer = async () => {
  const data = await prisma.student.groupBy({
    by: ["sex"],
    _count: true
  });

  const boys = data.find((d) => d.sex === "MALE")?._count || 0;

  const girls = data.find((d) => d.sex === "FEMALE")?._count || 0;

  const total = boys + girls;

  return (
    <div className="bg-white rouned-xl w-full h-full p-4 ">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <CountChart boys={boys} girls={girls} />
      {/* Bottom */}
      <div className="flex justify-center  gap-16">
        <div className=" flex flex-col gap-1 ">
          <div className="w-5 h-5 bg-customColorSky rounded-full"></div>
          <h1 className="font-bold">{boys}</h1>
          <h1 className="text-xs text-gray-300">
            Boys ({Math.round((boys / total) * 100)}) %
          </h1>
        </div>

        <div className=" flex flex-col gap-1 ">
          <div className="w-5 h-5 bg-customColorYellow rounded-full"></div>
          <h1 className="font-bold">{girls}</h1>
          <h1 className="text-xs text-gray-300">
            Girls ({Math.round((girls / total) * 100)}) %
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CountChartContainer;