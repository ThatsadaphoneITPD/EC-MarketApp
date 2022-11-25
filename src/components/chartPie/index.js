import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(ArcElement);

export default function PieChart({ cate, barName }) {
  const convertDataToChartJS = (data, label, value) => {
    let new_data = [];
    let number;
    let name = "";
    data?.map((obj) => {
      if (label === true) {
        name = obj.name;
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
  let new_Labels = convertDataToChartJS(cate, true, false); // ["Bee", "mei"]
  let new_value = convertDataToChartJS(cate, false, true); // [2, 55]

  // console.log(new_Labels);
  // console.log(new_value);

  const data = {
    labels: new_Labels,
    datasets: [
      {
        label: "My First Dataset",
        data: new_value,
        backgroundColor: [
          "#fa541c",
          "#faad14",
          "#fa8c16",
          "#fadb14",
          "#a0d911",
          "#52c41a",
          "#13c2c2",
          "#1890ff",
          "#2f54eb",
          "#722ed1",
          "#eb2f96",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="pieChart">
      <span className="title">{barName}</span>
      <Doughnut data={data} />
    </div>
  );
}
