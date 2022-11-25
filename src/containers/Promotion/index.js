import React from "react";
import { Carousel, Col, Row } from "antd";
import { useMatchMedia } from "../../hook";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Promotion({ promote }) {
  let isDesktopResolution = useMatchMedia("(min-width:725px)", true);
  const NextSuggent = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "gray",
          fontSize: isDesktopResolution ? "3vw" : "2rem",
          top: "6rem",
          right: isDesktopResolution ? "-1.5vw" : "0.5rem",
          zIndex: "2",
        }}
        onClick={onClick}
      >
        <RightOutlined />
      </div>
    );
  };

  const PrevSuggent = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "gray",
          fontSize: isDesktopResolution ? "3vw" : "2rem",
          top: "6rem",
          left: isDesktopResolution ? "-3vw" : "-0.5rem",
          zIndex: "2",
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    );
  };
  const value2 = 3;
  const value1 = 2;
  const Suggentsettings = {
    dots: false,
    infinite: true,
    slidesToShow: isDesktopResolution ? value2 : value1,
    slidesToScroll: 1,
    nextArrow: <NextSuggent />,
    prevArrow: <PrevSuggent />,
  };

  return (
    <Carousel arrows {...Suggentsettings} className="PromotionCarousel">
      {promote?.reverse().map((item, index) => (
        <div key={index + 1} className="PromotionCard">
          {item.attachments.length === 0 ? (
            <image
              src={
                "https://res.cloudinary.com/dp3zeejct/image/upload/v1663663693/Emagi/4636224_oi4j45.jpg"
              }
              al="404"
            />
          ) : (
            <img src={item && item.attachments[0].online_url} alt="oi" />
          )}

          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col md={{ span: 24 }} xs={{ span: 8 }}>
              <div className="Procontent">{item.title}</div>
            </Col>
            <Col md={{ span: 24 }} xs={{ span: 8 }}>
              <div className="Proprice">${item.price}</div>
            </Col>
          </Row>
        </div>
      ))}
    </Carousel>
  );
}
