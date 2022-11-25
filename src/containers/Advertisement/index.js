import React from "react";
import { Carousel } from "antd";

export default function Advertisement({ data }) {
  return (
    <Carousel className="slideCarousel" autoplay>
      {data.map((item, index) => (
        <div key={index + 1} className="slidecontainer">
          <img src={item.image} alt={item.alt} />
          <div className="content">{item.content}</div>
          <div className="subcontent">{item.subContent}</div>
          <button class="shopNow">{item.shop}</button>
        </div>
      ))}
    </Carousel>
  );
}
