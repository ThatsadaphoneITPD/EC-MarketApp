import { React, useState, useEffect } from "react";
import { List, Divider, Row, Col, Collapse, message } from "antd";
import { BiRightArrow } from "react-icons/bi";
import Moment from "moment";
import { BsHandbagFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { DropdownMenu } from "../../components";
import {
  cancelledOrder,
  reciveOrderDone,
  getOrderItem,
} from "../../redux/actions";
const { Panel } = Collapse;

export default function Orderlist({ orderdata, setRender, render }) {
  const [data, setData] = useState(orderdata);
  const dispatch = useDispatch();
  const cancelOrID = useSelector((state) => state.cancelOrder);
  const { sucess, messagedata, messageerror } = cancelOrID;
  const reciveDone = useSelector((state) => state.reciveOrder);
  const { sucessDone, messagerecive, messageereciveerr } = reciveDone;
  const getItem = useSelector((state) => state.getOrderItem);
  const { sucessOritem, messagereciveitem, errorreciveitem } = getItem;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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
  const CoolDate = ({ M }) => {
    const Day = Moment(M).format("DD");
    const Month = Moment(M).format("MMM");
    const Year = Moment(M).format("YYYY");
    return (
      <div style={{ width: "2rem", height: "0.5rem" }} className="coolDate">
        <div style={{ fontSize: "0.7rem" }} className="Year">
          {Year}
        </div>
        <div style={{ fontSize: "1.3rem" }} className="Day">
          {Day}
        </div>
        <div style={{ fontSize: "0.7rem" }} className="Month">
          {Month}
        </div>
      </div>
    );
  };
  const handleCancelOrder = (e) => {
    dispatch(cancelledOrder(e._id))
      .then(() => {
        setRender(!render);
      })
      .then(() => {
        if (sucess === true) {
          message.success(messagedata);
        } else if (sucess === false) {
          message.error(messageerror);
        }
      });
  };
  const handleMarkDone = (e) => {
    dispatch(reciveOrderDone(e._id))
      .then(() => {
        setRender(!render);
      })
      .then(() => {
        if (sucessDone === true) {
          message.success(messagerecive);
        } else if (sucessDone === false) {
          sucessDone.error(messageereciveerr);
        }
      });
  };
  const handleReciveItem = (e) => {
    dispatch(getOrderItem(e._id))
      .then(() => {
        setRender(!render);
      })
      .then(() => {
        if (sucessOritem === true) {
          message.success(messagereciveitem);
        } else if (sucessOritem === false) {
          sucessDone.error(errorreciveitem);
        }
      });
  };
  let menuordercatelog = [
    {
      icon: "Done",
      colortext: "#ffff",
      bgc: "#08979c",
      action: handleMarkDone,
    },
    {
      icon: "Cancel",
      colortext: "#ffff",
      bgc: "#ff4d4f",
      action: handleCancelOrder,
    },
  ];
  let menureciveItem = [
    {
      icon: "Revice",
      colortext: "#ffff",
      bgc: "#389e0d",
      action: handleReciveItem,
    },
  ];

  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <div
              className={
                (item.cancel === false && "order") ||
                (item.cancel === true && "orderCancel")
              }
              key={index + 1}
            >
              {item.cancel === true ? (
                <img
                  className="CancelledOrder"
                  src={
                    "https://res.cloudinary.com/dp3zeejct/image/upload/v1662513441/Payment/CancelItem_rjnotw.png"
                  }
                  alt="cancelled"
                />
              ) : (
                <></>
              )}
              <div>
                <Row>
                  <Col span={2}>
                    <CoolDate M={item.createdAt} />
                  </Col>
                  <Col span={2}>
                    <h4>{"NO : "}</h4>
                  </Col>
                  <Col span={14}>
                    <h4 className="order__head">
                      <span>#{item.customerId}</span>
                    </h4>
                  </Col>
                  <Col span={2}>
                    <DropdownMenu menu={menuordercatelog} event={item} />
                  </Col>
                </Row>
              </div>
              <Collapse ghost>
                <Panel header="Order's Detail Info" key="0">
                  <Row>
                    <Col xl={{ span: 6 }} xs={{ span: 8 }}>
                      <h4>Adress:</h4>
                      <Address i={item} />
                    </Col>

                    <Col xl={{ span: 4 }} xs={{ span: 8 }}>
                      <h4>Recipient:</h4>
                      <Customer i={item} />
                    </Col>
                  </Row>
                </Panel>
              </Collapse>

              <Divider plain>
                <BsHandbagFill className="AnimateIcon" size={30} />
              </Divider>
              <Collapse ghost>
                {item.products.map((p, i) =>
                  p.productId == null ? (
                    <></>
                  ) : (
                    <Panel header={p.productId.title} key={i + 1}>
                      <div className="orderItem">
                        <div style={{ marginLeft: "16rem", marginTop: "1rem" }}>
                          <DropdownMenu menu={menureciveItem} event={p} />
                        </div>
                        <tr>
                          <td>
                            <img
                              src={p && p.productId.attachments[0].online_url}
                              alt={i + 1}
                            />
                          </td>
                          <td>
                            <span>
                              Get:{" "}
                              {p.received_status === false ? (
                                <strong className="NotYet">Not Yet</strong>
                              ) : (
                                <strong className="GetItem">Recived</strong>
                              )}
                            </span>
                            <br />
                            <span>
                              Delivery:{" "}
                              <strong>
                                {(p.delivery_status === "pending" && (
                                  <strong className="statuesDeliver">
                                    Process
                                  </strong>
                                )) ||
                                  (p.delivery_status === "Sending" && (
                                    <strong className="send">Send</strong>
                                  )) ||
                                  (p.delivery_status === "Arrive" && (
                                    <strong className="GetItem">
                                      Arrival Post
                                    </strong>
                                  ))}
                              </strong>
                            </span>
                            <br />
                            <span>price: {p.productId.price}</span>
                            <br />
                            <spam> Qty: {p.quantity}</spam>
                            <span style={{ marginL: "0 7px 0 7px" }}>|</span>
                            <span>Total: {p.quantity * p.productId.price}</span>
                            <br />
                          </td>
                        </tr>
                      </div>
                    </Panel>
                  )
                )}
              </Collapse>
              <div className="option">
                <tr>
                  <td style={{ width: "10rem" }}>
                    <div>
                      <span>
                        <MdPayments className="AnimateIcon" size={20} />
                      </span>
                      {"  "}
                      <span style={{ marginLeft: "1rem" }}>
                        {item.payment_status === "paid" ? (
                          <strong className="PaidOnline">Paid Online</strong>
                        ) : (
                          <strong className="Notpaid">None</strong>
                        )}
                      </span>
                    </div>
                  </td>
                  <td style={{ width: "10rem" }}>
                    <div>
                      <FaShippingFast size={20} />

                      <span style={{ marginLeft: "1rem" }}>
                        {item.delivery_status === "pending" ? (
                          <strong className="statuesDeliver">Pending</strong>
                        ) : (
                          <strong className="statuesDone">Done</strong>
                        )}
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "10rem" }}>
                    <h4>
                      Total:{" "}
                      <span className="TotalPrice">
                        {formatter.format(parseFloat(item.total) / 100)}
                      </span>{" "}
                    </h4>
                  </td>
                </tr>
              </div>
            </div>
          </List.Item>
        )}
      />
    </>
  );
}
