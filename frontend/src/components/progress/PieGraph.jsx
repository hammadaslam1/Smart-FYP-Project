import { PieChart } from "@mui/x-charts/PieChart";

const PieGraph = () => {
  return (
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
              { id: 3, value: 30, label: "series D" },
            ],
            innerRadius: 10,
            outerRadius: 150,
            paddingAngle: 2,
            cornerRadius: 10,
            startAngle: 360,
            endAngle: 0,
            //   cx: 150,
            //   cy: 100,
          },
        ]}
        // width={400}
        height={400}
      />
  );
};

export default PieGraph;
