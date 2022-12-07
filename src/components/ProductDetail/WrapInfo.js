import React, { useState } from "react";
import { Button, Modal, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "../../redux/actions";
import "./_ProductDetailStyle.scss";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  GiftOutlined,
} from "@ant-design/icons";

export default function WrapInfo({ detail }) {
  const [active, setActive] = useState(false);
  const [modalGift, setmodalGift] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const addToCart = (item) => {
    dispatch(AddCart(item));
  };
  const showModalGift = () => {
    setmodalGift(true);
  };
  const handleOk = () => {
    setmodalGift(false);
  };
  const closeGift = () => {
    setmodalGift(false);
  };
  const handleActive = () => {
    setActive((prev) => {
      return !prev;
    });
  };

  const ToggleIcon = ({ activate }) => {
    !activate ? <CaretDownOutlined /> : <CaretUpOutlined />;
  };

  return (
    <>
      {!detail._id ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            left: "0",
            right: "0",
            margin: "auto",
            top: "20rem",
            fontSize: "2rem",
            backgroundColor: "var(--primary-color)",
          }}
        ></div>
      ) : (
        <div className="Detail_Box">
          <div className="Detail_box_size">
            <div className="Detail_Alltext_Style">
              <h1 className="Detail_Title">
                {detail.title &&
                  detail.title.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
              </h1>
              <div>
                <span className="Divider_Detail"></span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <span>
                  {detail["price"] &&
                    detail["price"].toLocaleString("de-DE", {
                      style: "currency",
                      currency: "USD",
                    })}
                </span>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              {userInfo == null
                ? !userLogin.loading && <></>
                : userInfo.role === "shopper" && (
                    <Button
                      className="Add_Shopping_Bag"
                      type="submit"
                      onClick={() => addToCart(detail)}
                    >
                      Add to Cart
                    </Button>
                  )}
            </div>
            <div style={{ marginTop: "20px" }}>
              <Button
                className="Add_Shopping_Gift"
                type="submit"
                onClick={showModalGift}
              >
                <a>
                  SEND <GiftOutlined />
                </a>
              </Button>
              <Modal
                closable={true}
                onCancel={closeGift}
                width={1080}
                style={{ width: "100%", resize: "none", top: "4rem" }}
                className="Modal_Wrap"
                visible={modalGift}
                footer={null}
              >
                <Row
                  style={{
                    textAlign: "center",
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                  xs={{ gutter: 16 }}
                >
                  <Col
                    xl={{ span: 12 }}
                    xd={{ span: 12 }}
                    xs={{ span: 0 }}
                    style={{
                      width: "auto",
                      backgroundColor: "#e7dccf",
                    }}
                  >
                    <div>
                      <img
                        className="Modal_image"
                        src={
                          "https://res.cloudinary.com/dp3zeejct/image/upload/v1660909179/Payment/Giftsend_f5zthk.webp"
                        }
                        alt="payment"
                      />
                    </div>
                  </Col>
                  <Col
                    xl={{ span: 10 }}
                    xd={{ span: 12 }}
                    xs={{ span: 24 }}
                    style={{ width: "auto" }}
                  >
                    <div>
                      <div style={{ marginTop: "4rem" }}>
                        <h1>
                          SEND IT WITH <GiftOutlined /> GIFT
                        </h1>
                      </div>
                      <div
                        style={{
                          marginTop: "3rem",
                          textAlign: "center",
                          width: "auto",
                          maxWidth: "300px",
                          left: "0",
                          position: "relative",
                          right: "0",
                          margin: "auto",
                          lineHeight: "1.5",
                          fontSize: "0.8rem",
                        }}
                      >
                        <p style={{ marginTop: "10px" }}>
                          You can send a virtual gift by yourself or in a group
                          with just an email address. Choose the perfect gift
                          and let us know when to send the gift notification to
                          them.
                        </p>
                        <p>
                          They choose their preferred shipping address, color
                          and size or can even swap for an item of the same
                          value. We will then send the gift to them in
                        </p>

                        <p>
                          We will then send the gift to them in Gucci's
                          signature gift wrapping.
                        </p>
                        <div style={{ marginTop: "10px" }}>
                          <Button key="submit" onClick={handleOk}>
                            COMPLETE GIFT SELECTION
                          </Button>
                        </div>
                        <br style={{ margBottom: "6rem" }} />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Modal>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
