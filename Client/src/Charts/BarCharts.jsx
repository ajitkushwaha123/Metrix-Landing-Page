import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartComponent = () => {
  const defaultData = [
    { _id: "Day 1", value: 90 },
    { _id: "Day 2", value: 40 },
    { _id: "Day 3", value: 30 },
    { _id: "Day 4", value: 70 },
  ];

  return (
    <ResponsiveContainer width={350} height={300} className="py-[20px]">
      <BarChart data={defaultData}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar type="monotone" dataKey="value" stroke="#2563eb" fill="#A3BFFA" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
