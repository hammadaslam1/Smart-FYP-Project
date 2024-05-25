// import * as React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";
// import { axisClasses } from "@mui/x-charts";

// const chartSetting = {
//   yAxis: [
//     {
//       label: "rainfall (mm)",
//     },
//   ],
//   // width: 500,
//   height: 300,
//   sx: {
//     [`.${axisClasses.left} .${axisClasses.label}`]: {
//       transform: "translate(-30px, 0)",
//     },
//   },
// };
// const dataset = [
//   {
//     "Member 1": 59,
//     "Member 2": 57,
//     week: "Day 1",
//   },
//   {
//     "Member 1": 50,
//     "Member 2": 52,
//     week: "Day 2",
//   },
//   {
//     "Member 1": 47,
//     "Member 2": 53,
//     week: "Day 3",
//   },
//   {
//     "Member 1": 54,
//     "Member 2": 56,
//     week: "Day 4",
//   },
//   {
//     "Member 1": 57,
//     "Member 2": 69,
//     week: "Day 5",
//   },
//   {
//     "Member 1": 60,
//     "Member 2": 63,
//     week: "Day 6",
//   },
//   {
//     "Member 1": 59,
//     "Member 2": 60,
//     week: "Day 7",
//   },
// ];

// const valueFormatter = (value) => `${value}%`;

// const BarGraph = () => {
//   return (
//     <BarChart
//       dataset={dataset}
//       xAxis={[{ scaleType: "band", dataKey: "week" }]}
//       series={[
//         { dataKey: "Member 1", label: "Member 1", valueFormatter },
//         { dataKey: "Member 2", label: "Member 2", valueFormatter },
//       ]}
//       {...chartSetting}
//     />
//   );
// };

// export default BarGraph;
