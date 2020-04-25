import React from "react";
import { useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LineChart = () => {
  const list = useSelector((state) => state.list.list);

  const options = {
    title: {
      text: "Line Chart",
    },

    xAxis: {
      categories: ["Dow", "Dom", "Hour", "Sum Hourly"],
    },
    series: Object.keys(list).map((id) => ({
      name: id,
      data: [list[id].dow, list[id].dom, list[id].hour, list[id].SumHourly],
    })),
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;
