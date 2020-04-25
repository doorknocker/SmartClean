import React from "react";
import { useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const WaitList = () => {
  const list = useSelector((state) => state.list.list);

  const barChartOptions = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Bar Graph",
    },

    xAxis: {
      categories: ["Dow", "Dom", "Hour", "Sum of Hour"],
      title: {
        text: null,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Units",
        align: "high",
      },
      labels: {
        overflow: "justify",
      },
    },
    tooltip: {
      valueSuffix: " units",
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: Object.keys(list).map((id) => ({
      name: id,
      data: [list[id].dow, list[id].dom, list[id].hour, list[id].SumHourly],
    })),
  };

  return <HighchartsReact highcharts={Highcharts} options={barChartOptions} />;
};

export default WaitList;
