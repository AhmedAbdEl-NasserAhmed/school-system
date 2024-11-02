"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import Image from "next/image";
import React from "react";

const data = [
  { name: "Jan", income: 4200, expense: 3100 },
  { name: "Feb", income: 3600, expense: 2900 },
  { name: "Mar", income: 4700, expense: 3200 },
  { name: "Apr", income: 3900, expense: 2500 },
  { name: "May", income: 4300, expense: 2700 },
  { name: "Jun", income: 4500, expense: 2800 },
  { name: "Jul", income: 4100, expense: 3000 },
  { name: "Aug", income: 4800, expense: 3400 },
  { name: "Sep", income: 4600, expense: 3100 },
  { name: "Oct", income: 4400, expense: 2900 },
  { name: "Nov", income: 4700, expense: 3200 },
  { name: "Dec", income: 5000, expense: 3300 }
];

const FinanceChart = () => {
  return (
    <div className="bg-white p-4 rounded-xl w-full h-full ">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* Chart */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{
              paddingTop: "10px",
              paddingBottom: "30px"
            }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3BBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
