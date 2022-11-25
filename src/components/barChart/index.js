import { React, useState } from "react";

export default function Barchart({ barName, data, barHeight }) {
  //   let barHeight = 30;
  //   const [data, setData] = useState([
  //     { name: "Mon", value: 20 },
  //     { name: "Tue", value: 40 },
  //     { name: "Wed", value: 35 },
  //     { name: "Thu", value: 50 },
  //     { name: "Fri", value: 55 },
  //     { name: "Sat", value: 40 },
  //     { name: "Sun", value: 30 },
  //   ]);

  const Bar = ({ d, barHeight, index }) => {
    let barPadding = 2;
    let barColour = [
      "#1890ff",
      "#2f54eb",
      "#722ed1",
      "#eb2f96",
      "#fa541c",
      "#faad14",
      "#fa8c16",
      "#fadb14",
      "#a0d911",
      "#52c41a",
      "#13c2c2",
    ];
    let colourLenght = barColour.length;
    let widthScale = (d) => d * 10;
    let width = widthScale(d.value);
    let yMid = barHeight * 0.5;
    return (
      <g className="bar-group">
        <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle">
          {d.name}
        </text>
        <rect
          y={barPadding * 0.5}
          width={width}
          height={barHeight - barPadding}
          fill={barColour[index % colourLenght]}
        />
        <text
          className="value-label"
          x={width - 10}
          y={yMid}
          alignmentBaseline="middle"
        >
          {d.value}
        </text>
      </g>
    );
  };
  //map data into bar
  let barGroups = data?.map((d, i) => (
    <g transform={`translate(0, ${i * barHeight})`}>
      <Bar d={d} barHeight={barHeight} index={i} />
    </g>
  ));
  return (
    <div className="barChart">
      <svg height={data?.length < 11 ? "20rem" : "60rem"}>
        <text className="title" x="10" y="30">
          {barName}
        </text>
        <g className="container">
          <g className="chart" transform="translate(100,60)">
            {barGroups}
          </g>
        </g>
      </svg>
    </div>
  );
}
