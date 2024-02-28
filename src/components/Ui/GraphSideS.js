import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
];

export default function GraphSideS() {
  return (
    <LineChart
      width={720}
      height={300}
      series={[
        { data: pData, label: "Nüfus artış", yAxisKey: "leftAxisId" },
        { data: uData, label: "Göç", yAxisKey: "rightAxisId" },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
      rightAxis="rightAxisId"
    />
  );
}
