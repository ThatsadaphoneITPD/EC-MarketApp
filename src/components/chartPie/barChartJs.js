import React from "react";
import { Bar } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(ArcElement);

export default function BarChartJs({ barName, market }) {
  let barColour = [
    "rgba(255, 99, 132, 0.2)",
    "#a0d911",
    "#52c41a",
    "#fa8c16",
    "#fadb14",
    "rgba(255, 159, 64, 0.2)",
    "rgba(255, 205, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(201, 203, 207, 0.2)",
    "#13c2c2",
  ];
  const convertDataToChartJS = (data, label, value) => {
    let new_data = [];
    let number;
    let name = "";
    data?.map((obj) => {
      if (label === true) {
        name = obj.category;
        new_data.push(name);
      }
      if (value === true) {
        number = obj.value;
        new_data.push(number);
      }
      return new_data;
    });
    return new_data;
  };
  let new_Labels = convertDataToChartJS(market, true, false); // ["Bee", "mei"]
  let new_value = convertDataToChartJS(market, false, true); // [2, 55]

  const data = {
    labels: new_Labels,
    datasets: [
      {
        label: "Global Market Trend",
        data: new_value,
        backgroundColor: barColour,
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="BarChartJs">
      <span className="title">{barName}</span>
      <Bar data={data} />
    </div>
  );
}
