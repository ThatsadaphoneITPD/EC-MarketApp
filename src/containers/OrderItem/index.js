import { Col, List, Row, Modal, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaMapMarkerAlt, FaPlaneArrival } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { SiPostman } from "react-icons/si";
import { GiPostStamp } from "react-icons/gi";
import { HiDocumentText } from "react-icons/hi";
import { MdFileDownloadDone, MdOutlineDonutLarge } from "react-icons/md";
import { CoolDate } from "../../components";
import { putItemSend, putItemArrive } from "../../redux/actions";
import { useMatchMedia } from "../../hook";
const { confirm } = Modal;

export default function ItemOrder({ orders, render, setRender }) {
  let isDesktop = useMatchMedia("(min-width:725px)", true);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const orderItem = useSelector((state) => state.orderDeliver);
  const { sucessDeliver, messageDeliver } = orderItem;
  const handleSend = (e) => {
    confirm({
      title: "Boss! Check before Send?",
      icon: <IoIosSend size={40} />,
      content: "Save new Status Delivery to DB API",
      okText: "Send",
      cancelText: "No",
      onOk() {
        dispatch(putItemSend(e._id))
          .then(() => {
            setRender(!render);
          })
          .then(() => {
            if (sucessDeliver) {
              message.success(messageDeliver);
            } else {
              message.error("Fail to Send");
            }
          });
      },
      onCancel() {},
    });
  };
  const handleArrive = (e) => {
    confirm({
      title: "Arrive Customer's Post point?",
      icon: <FaPlaneArrival color="#d48806" size={40} />,
      content: "Save Arrival at post offive to DB API",
      okText: "Mark Arrival",
      cancelText: "No",
      onOk() {
        dispatch(putItemArrive(e._id))
          .then(() => {
            setRender(!render);
          })
          .then(() => {
            if (sucessDeliver) {
              message.success("Order's Arrive Post");
            } else {
              message.error("Fail to Arrive");
            }
          });
      },
      onCancel() {},
    });
  };
  const handleAddress = () => {
    setModalOpen(!modalOpen);
  };
  const handleDetail = () => {
    setOpen(!Open);
  };
  const TitleContent = ({ i }) => {
    return (
      <div className="TitleOrder">
        <Row>
          <Col xs={{ span: 8 }} xl={{ span: 6 }}>
            <h3 className="TitleOrder">{`${i.productId.title}`}</h3>
          </Col>
          {!isDesktop ? (
            <></>
          ) : (
            <>
              <Col span={7}>
                <h3 className="TitleOrder">
                  Ship:{" "}
                  {(i.delivery_status === "pending" && (
                    <MdOutlineDonutLarge
                      className="AnimationSpin"
                      color="#fa541c"
                      size={20}
                    />
                  )) ||
                    (i.delivery_status === "Sending" && <span>SendIng</span>) ||
                    (i.delivery_status === "Arrive" && (
                      <GiPostStamp
                        className="AnimationSpin"
                        color="#52c41a"
                        size={20}
                      />
                    ))}
                </h3>
              </Col>
              <Col span={7}>
                <h3 className="TitleOrder">
                  Pick:{" "}
                  {i.received_status === false ? (
                    <span style={{ color: "#722ed1" }}>NONE</span>
                  ) : (
                    <MdFileDownloadDone color="#52c41a" size={20} />
                  )}
                </h3>
              </Col>
            </>
          )}
        </Row>
      </div>
    );
  };
  const Description = ({ i }) => {
    return (
      <div>
        <div className="description-bk"></div>
        <div className="description">
          {!isDesktop && (
            <>
              <Row>
                {(i.delivery_status === "pending" && (
                  <MdOutlineDonutLarge
                    className="AnimationSpin"
                    color="#fa541c"
                    size={35}
                  />
                )) ||
                  (i.delivery_status === "Sending" && (
                    <SiPostman
                      color="#40a9ff"
                      className="AnimationSpin"
                      size={35}
                    />
                  )) ||
                  (i.delivery_status === "Arrive" && (
                    <GiPostStamp
                      className="AnimationSpin"
                      color="#52c41a"
                      size={35}
                    />
                  ))}
              </Row>
              <Row>
                {i.received_status === false ? (
                  <MdOutlineDonutLarge
                    className="AnimationSpin"
                    color="#fa541c"
                    size={35}
                  />
                ) : (
                  <MdFileDownloadDone color="#52c41a" size={45} />
                )}
              </Row>
            </>
          )}

          {!isDesktop ? (
            <div
              className="Orderitem icon__view"
              onClick={() => handleDetail()}
            >
              <HiDocumentText size={25} style={{ marginLeft: "0.7rem" }} />
              <Modal
                title={null}
                closable={false}
                width={"30rem"}
                centered
                visible={Open}
                footer={null}
                onOk={() => setOpen(!Open)}
                onCancel={() => setOpen(!Open)}
              >
                <Row>
                  <Row>
                    <HiDocumentText color="#adc6ff" size={35} />
                  </Row>
                  <Col xl={{ span: 6 }} xs={{ span: 8 }}>
                    Qty: {i.quantity}
                  </Col>
                  <Col xl={{ span: 4 }} xs={{ span: 8 }}>
                    ToTal: {i.price} {" $"}
                  </Col>
                </Row>
                <Row>
                  <Col xl={{ span: 2 }} xs={{ span: 2 }}></Col>
                  <p style={{ width: "10rem" }}>{i.productId.content}</p>
                </Row>
              </Modal>
            </div>
          ) : (
            <>
              <Row>
                <Col xl={{ span: 8 }} xs={{ span: 8 }}>
                  Qty: {i.quantity}
                </Col>
                <Col xl={{ span: 8 }} xs={{ span: 8 }}>
                  ToTal: {i.price} {" $"}
                </Col>
              </Row>
              <p style={{ width: "20rem" }}>{i.productId.content}</p>
            </>
          )}
        </div>
      </div>
    );
  };
  const Address = ({ i }) => {
    return (
      <div className="orderadress">
        <p>
          {i.shipping.address.city}
          <br />
          {i.shipping.address.country}
          <br />
          {i.shipping.address.line1}
        </p>
      </div>
    );
  };

  const Customer = ({ i }) => {
    return (
      <div className="ordercustomer">
        <p>
          {i.shipping.name}
          <br /> {i.shipping.email}
          <br />
          {i.shipping.phone}
        </p>
      </div>
    );
  };
  return (
    <List
      style={{ width: !isDesktop ? "25rem" : "50rem", margin: "0 auto" }}
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={orders}
      renderItem={(item, index) =>
        item.productId == null ? (
          <></>
        ) : (
          <List.Item
            className="Orderitem "
            actions={[
              <div className="icon__itemSend" onClick={() => handleSend(item)}>
                <IoIosSend size={25} />
              </div>,
              <div
                className="icon__itemArrive"
                onClick={() => handleArrive(item)}
              >
                <FaPlaneArrival size={25} />
              </div>,
              <div className="icon__Address" onClick={() => handleAddress()}>
                <FaMapMarkerAlt size={25} />
                <Modal
                  title={null}
                  closable={false}
                  width={"30rem"}
                  centered
                  visible={modalOpen}
                  footer={null}
                  onOk={() => setModalOpen(!modalOpen)}
                  onCancel={() => setModalOpen(!modalOpen)}
                >
                  <Row>
                    <Row>
                      <FaMapMarkerAlt color="#73d13d" size={35} />
                    </Row>
                    <Col xl={{ span: 6 }} xs={{ span: 8 }}>
                      <h4>Adress:</h4>
                      <Address i={item} />
                    </Col>

                    <Col xl={{ span: 4 }} xs={{ span: 8 }}>
                      <h4>Recipient:</h4>
                      <Customer i={item} />
                    </Col>
                  </Row>
                </Modal>
              </div>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <>
                  <h4 className="OrNote">
                    NO.<span>{index + 1}</span>
                  </h4>
                  {!isDesktop && <CoolDate M={item.createdAt} Top={"0.4rem"} />}
                </>
              }
              title={<TitleContent i={item} />}
              description={<Description i={item} />}
            />
            {isDesktop && <CoolDate M={item.createdAt} Top={"-2rem"} />}
          </List.Item>
        )
      }
    />
  );
}
