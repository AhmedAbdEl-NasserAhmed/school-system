"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 40,
    absent: 75
  },
  {
    name: "Tue",
    present: 60,
    absent: 85
  },
  {
    name: "Wed",
    present: 90,
    absent: 65
  },
  {
    name: "Thu",
    present: 70,
    absent: 43
  },
  {
    name: "Fri",
    present: 80,
    absent: 50
  }
];

const AttendenaceChart = () => {
  return (
    <div className="bg-white h-full rounded-xl p-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendenace</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="w-full h-[90%]">
        <ResponsiveContainer>
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{
                paddingTop: "20px",
                paddingBottom: "40px"
              }}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendenaceChart;
