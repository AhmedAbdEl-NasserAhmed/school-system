"use client";

import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import Image from "next/image";

const CountChart = ({ boys, girls }: { boys: number; girls: number }) => {
  const data = [
    {
      name: "Girls",
      count: girls,
      fill: "#FAE27C"
    },
    {
      name: "Boys",
      count: boys,
      fill: "#C3EBFA"
    },
    {
      name: "Total",
      count: boys + girls,
      fill: "white"
    }
  ];

  return (
    <div className="relative w-full h-[75%]">
      {/* Chart */}
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="100%"
          barSize={32}
          data={data}
        >
          <RadialBar background dataKey="count" />
        </RadialBarChart>
      </ResponsiveContainer>
      <Image
        src="/malefemale.png"
        alt="photo"
        width={30}
        height={30}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
      />
    </div>
  );
};

export default CountChart;
