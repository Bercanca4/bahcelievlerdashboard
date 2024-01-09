import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { Progress, Space } from "antd";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { TfiReload } from "react-icons/tfi";

function Overview() {
  const data = [
    {
      name: "Jan",
      uv: 12000,
      pv: 18000,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 11000,
      pv: 16000,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 4000,
      pv: 5000,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 6000,
      pv: 8000,
      amt: 2000,
    },
    {
      name: "May",
      uv: 2000,
      pv: 3000,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 9000,
      pv: 14000,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 9000,
      pv: 14000,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 10000,
      pv: 16000,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 11000,
      pv: 17000,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 12000,
      pv: 19000,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 13000,
      pv: 18000,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 13000,
      pv: 20000,
      amt: 2100,
    },
  ];

  const datamodel = [
    { name: "Desktop", value: 630 },
    { name: "Tablet", value: 150 },
    { name: "Phone", value: 220 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className="w-full  grid grid-cols-4 gap-x-4 py-4 px-6   h-[200px] mt-[5%] mb-[1%] ">
        <div className=" col-span-1 rounded-xl border   shadow-lg  hover:scale-105 hover:duration-700 duration-700 transition-all ">
          <div className="flex p-4 mx-[2%]">
            <div className="w-full  ">
              <div className="mb-2">
                <label className="opacity-60 font-semibold text-[12px]">
                  BUDGET
                </label>
              </div>
              <div className="w-full mb-2 ">
                <label className=" font-semibold text-[33px]">$24k</label>
              </div>
              <div className="w-full  flex items-center justify-start gap-x-4 ">
                <div className="flex items-center justify-start gap-x-2">
                  <FaArrowUpLong className="w-[14px] h-[14px] text-green-600" />
                  <label className="text-green-600">12% </label>
                </div>

                <div className="w-fit">
                  <label className="opacity-65 text-[12px] font-semibold">
                    Since last month
                  </label>
                </div>
              </div>
            </div>
            <div className="w-[100px]  h-full  flex justify-end items-center">
              <div className="w-[56px] h-[56px] border rounded-full bg-red-600 flex items-center justify-center ">
                <div className="rounded-full ">
                  {" "}
                  <AiFillDollarCircle className="text-white h-[22px] w-[22px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-span-1 rounded-xl border shadow-lg hover:scale-105 hover:duration-700 duration-700 transition-all ">
          <div className="flex p-4  mx-[2%]">
            <div className="w-full  ">
              <div className="mb-2">
                <label className="opacity-60 font-semibold text-[12px]">
                  TOTAL CUSTOMERS
                </label>
              </div>
              <div className="w-full mb-2 ">
                <label className=" font-semibold text-[33px]">1.6k</label>
              </div>
              <div className="w-full  flex items-center justify-start gap-x-4 ">
                <div className="flex items-center justify-start gap-x-2">
                  <FaArrowDownLong className="w-[14px] h-[14px] text-red-600" />
                  <label className="text-red-600">12% </label>
                </div>

                <div className="w-fit">
                  <label className="opacity-65 text-[12px] font-semibold">
                    Since last month
                  </label>
                </div>
              </div>
            </div>
            <div className="w-[100px]  h-full  flex justify-end items-center">
              <div className="w-[56px] h-[56px] border rounded-full bg-green-600 flex items-center justify-center ">
                <div className="rounded-full ">
                  {" "}
                  <MdPeopleAlt className="text-white h-[22px] w-[22px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-span-1 border rounded-xl  shadow-lg hover:scale-105 hover:duration-700 duration-700 transition-all">
          <div className="flex pt-4 px-4 mx-[2%] ">
            <div className="w-full  ">
              <div className="mb-2">
                <label className="opacity-60 font-semibold text-[12px]">
                  TASK PROGRESS
                </label>
              </div>
              <div className="w-full  ">
                <label className=" font-semibold text-[33px]">75.5%</label>
              </div>
              <div className="w-full  flex items-center justify-start gap-x-4 "></div>
            </div>
            <div className="w-[100px]  h-full  flex justify-end items-center">
              <div className="w-[56px] h-[56px] border rounded-full bg-orange-600 flex items-center justify-center ">
                <div className="rounded-full ">
                  {" "}
                  <BiSolidCategory className="text-white h-[22px] w-[22px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex  items-center py-2 px-4 justify-start gap-x-2">
            <Space direction="vertical">
              <Progress percent={75} size={[300, 10]} />
            </Space>
          </div>
        </div>

        <div className=" col-span-1 rounded-xl border shadow-lg  hover:scale-105 hover:duration-700 duration-700 transition-all ">
          <div className="flex p-4 mx-[2%]">
            <div className="w-full  ">
              <div className="mb-2">
                <label className="opacity-60 font-semibold text-[12px]">
                  TOTAL PROFIT
                </label>
              </div>
              <div className="w-full mb-2 ">
                <label className=" font-semibold text-[33px]">$15k</label>
              </div>
            </div>
            <div className="w-[100px]  h-full  flex justify-end items-center">
              <div className="w-[56px] h-[56px] border rounded-full bg-purple-600 flex items-center justify-center ">
                <div className="rounded-full ">
                  {" "}
                  <AiFillDollarCircle className="text-white h-[22px] w-[22px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 ">
        <div className="grid grid-cols-12 gap-x-4 ">
          <div className="grid col-span-8 p-4 border w-full rounded-xl shadow-lg h-auto ">
            <div className="flex w-full items-center justify-between mx-auto p-4 ">
              <div>
                <label className="text-[18px] opacity-70 font-semibold">
                  Sales
                </label>
              </div>
              <div className="flex items-center justify-center gap-x-2">
                <div className="flex items-center justify-center">
                  {" "}
                  <TfiReload />
                </div>
                <label className="text-[16px] opacity-70 font-semibold">
                  Sync
                </label>
              </div>
            </div>
            <div>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#6466E9" activeBar={<Rectangle />} />
                  <Bar dataKey="uv" fill="#D8D9F9" activeBar={<Rectangle />} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid col-span-4 p-4 border w-full rounded-xl shadow-lg h-[500px]">
            <div>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    data={datamodel}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value">
                    {datamodel.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
