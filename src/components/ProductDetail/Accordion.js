import React from "react";
import { Carousel, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./_ProductDetailStyle.scss";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useMatchMedia } from "../../hook";
import { ContentCollapse } from "./subElement";
import { useDispatch } from "react-redux";
import { getProductByIdAction } from "../../redux/actions";

function Accordion({ detail, products }) {
  let isDesktopResolution = useMatchMedia("(min-width:725px)", true);
  const isMobileResolution = useMatchMedia("(min-width:425px)", true);
  const dispatch = useDispatch();

  const NextColor = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black",
          fontSize: "3vw",
          right: "24px",
          zIndex: "2",
        }}
        onClick={onClick}
      >
        <RightOutlined />
      </div>
    );
  };

  const PrevColor = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black",
          fontSize: "3vw",
          left: "5px",
          zIndex: "2",
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    );
  };
  const NextSuggent = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "gray",
          fontSize: "3vw",
          top: "30%",
          right: "-1vw",
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
          fontSize: "3vw",
          top: "30%",
          left: "-2.5vw",
          zIndex: "2",
        }}
        onClick={onClick}
      >
        <LeftOutlined />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextColor />,
    prevArrow: <PrevColor />,
  };
  const value2 = 3;
  const value1 = 1;
  const Suggentsettings = {
    dots: false,
    infinite: true,
    slidesToShow: isDesktopResolution ? value2 : value1,
    slidesToScroll: 1,
    nextArrow: <NextSuggent />,
    prevArrow: <PrevSuggent />,
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="Detail_Accordion_box">
        <div className="Detail_Accordion_Fixed">
          <Row className="Detail_Accordin_Row_Box">
            <Col xl={{ span: 14 }} xs={{ span: 24 }}>
              <div
                style={{
                  maxWidth: "100%",
                  padding: "30px 30px",
                  margin: "0",
                  backgroundColor: "transparent",
                }}
              >
                <div className="VARIATIONS_Title">
                  VARIATIONS{" "}
                  <span>
                    ({detail["attachments"] && detail["attachments"].length})
                  </span>
                </div>
                <Carousel
                  arrows
                  {...settings}
                  className="Detail_Carousel_Accordion"
                  style={{
                    marginTop: "5%",
                  }}
                >
                  {detail["attachments"] &&
                    detail["attachments"].map((img, index) => (
                      <div key={index}>
                        <img
                          src={img.online_url}
                          className="Detail_VARIATIONS"
                          alt="detail"
                        />
                      </div>
                    ))}
                </Carousel>
                {isMobileResolution && <ContentCollapse />}
              </div>
            </Col>
            <Col xl={{ span: 8 }} xs={{ span: 24 }}>
              <div
                style={{
                  maxWidht: "100%",
                  padding: "30px 30px",
                  margin: "0",
                  backgroundColor: "transparent",
                }}
              >
                <div
                  className="image-container"
                  style={{
                    margin: "auto",
                    left: "0",
                    right: "0",
                  }}
                >
                  <img
                    src={detail.attachments[0].online_url}
                    className=" thumbnail-image"
                    alt="detail2"
                  />
                </div>
                <br style={{ margin: "5rem" }} />
                <div className="Detail_text">
                  <h3>PRODUCT DETAILS</h3>
                  <br />
                  <p>{detail.content}</p>
                </div>
              </div>
            </Col>
            {products.length > 4 && (
              <div className="Suggest_Carousel_size">
                <h2
                  style={{
                    fontSize: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  You May Also Like
                </h2>
                <Carousel
                  arrows
                  {...Suggentsettings}
                  className="Recommend_Detail_Carousel "
                >
                  {products.map(
                    (item) =>
                      detail._id !== item._id && (
                        <div key={item._id} className="Recommend_Detail_Box">
                          <Link
                            onClick={() =>
                              dispatch(getProductByIdAction(item._id)).then(
                                scrollToTop()
                              )
                            }
                            to={`/item/${item._id}`}
                          >
                            <div className="image-container">
                              <img
                                src={item.attachments[0].online_url}
                                className=" Suggent_CarouselStyle"
                                alt={item.title}
                              />
                            </div>
                          </Link>
                          <div className="Suggent_New_item">
                            <Row>
                              <Col xl={{ span: 24 }} xs={{ span: 0 }}>
                                <p>
                                  {item.title.replace(/(^\w|\s\w)/g, (m) =>
                                    m.toUpperCase()
                                  )}
                                </p>
                              </Col>
                            </Row>
                            <span>
                              {item["price"] &&
                                item["price"].toLocaleString("de-DE", {
                                  style: "currency",
                                  currency: "USD",
                                })}
                            </span>

                            <br />
                            <span style={{ paddingBottom: "600px" }}>
                              <Link
                                onClick={() =>
                                  dispatch(getProductByIdAction(item._id)).then(
                                    scrollToTop()
                                  )
                                }
                                to={`/item/${item._id}`}
                              >
                                <button
                                  style={{ fontSize: "0.8em" }}
                                  className="Dettail_Shop_This"
                                >
                                  SHOP THIS
                                  <a>
                                    <RightOutlined
                                      style={{
                                        color: "black",
                                      }}
                                    />
                                  </a>
                                </button>
                              </Link>
                            </span>
                            <p />
                          </div>
                        </div>
                      )
                  )}
                </Carousel>
              </div>
            )}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Accordion;
