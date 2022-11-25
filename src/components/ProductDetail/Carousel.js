import React from "react";
import { Carousel } from "antd";
import "./_ProductDetailStyle.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "gray",
        fontSize: "50px",
        right: "6vw",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "gray",
        fontSize: "50px",
        left: "5px",
        zIndex: "2",
      }}
      onClick={onClick}
    >
      <i></i>
      <LeftOutlined />
    </div>
  );
}

export default function DetailCarousel({ detail }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="Detail_Carousel_size">
      {/* {detail["attachments"] &&
        detail["attachments"].map((e, i) => <p>{e._id}</p>)} */}
      <Carousel arrows {...settings} className="Detail_Carousel_color">
        {detail["attachments"] &&
          detail["attachments"].map((img, index) => (
            <div key={`${img._id}`}>
              <div className="Detail_Image_frame" />
              <img
                src={img.online_url}
                className="Detail_CarouselStyle"
                alt={img.title}
              />
              <div />
            </div>
          ))}
      </Carousel>
    </div>
  );
}
