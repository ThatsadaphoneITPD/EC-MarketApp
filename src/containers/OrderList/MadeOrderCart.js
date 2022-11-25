import { React, useState } from "react";
import { List, Row, Col } from "antd";
import Moment from "moment";
import VirtualList from "rc-virtual-list";
import { BsHandbagFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import { RightOutlined } from "@ant-design/icons";
const ContainerHeight = 600;

export default function MadeOrderCart({ Ordata }) {
  const navigate = useNavigate();
  const [data, setData] = useState(Ordata);
  const appendData = () => {
    setData(data);
  };
  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };
  const MoveTo = () => {
    navigate("/order");
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
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const StatePayment = ({ i }) => {
    return (
      <div className="option">
        <tr>
          <td style={{ width: "10rem" }}>
            <h4>
              <MdPayments size={20} />
              {" : "}
              {i.payment_status === "paid" ? (
                <span className="PaidOnline">Paid Online</span>
              ) : (
                <span className="Notpaid">None</span>
              )}
            </h4>
          </td>
          <td style={{ width: "10rem" }}>
            <h4>
              Total:{" "}
              <span className="TotalPrice">
                {formatter.format(parseFloat(i.total) / 100)}
              </span>{" "}
            </h4>
          </td>
        </tr>
      </div>
    );
  };
  return (
    <>
      <List className="Orderlist">
        <VirtualList
          data={data}
          height={ContainerHeight}
          itemHeight={47}
          itemKey="email"
          onScroll={onScroll}
        >
          {(item, index) => (
            <>
              {item.cancel !== true && (
                <List.Item
                  onClick={() => MoveTo()}
                  className={
                    (item.cancel === false && "OrderItem") ||
                    (item.cancel === true && "OrderItem orderCartCancel")
                  }
                >
                  {item.cancel === true ? (
                    <img
                      className="CancelOrcart"
                      src={
                        "https://res.cloudinary.com/dp3zeejct/image/upload/v1662513441/Payment/CancelItem_rjnotw.png"
                      }
                      alt="cancelled"
                    />
                  ) : (
                    <></>
                  )}
                  <List.Item.Meta
                    avatar={
                      <>
                        <Row>
                          <h4 className="OrNote">
                            NO.<span>{index + 1}</span>
                          </h4>
                        </Row>
                        <Row>
                          <CoolDate M={item.createdAt} />
                        </Row>
                      </>
                    }
                    title={
                      <Row>
                        <Col span={18}>
                          <h4 className="OrderHead">{item.customerId}</h4>
                        </Col>
                        <Col span={4}>
                          {" "}
                          <BsHandbagFill size={15} />: {item.products.length}{" "}
                        </Col>
                        <Col span={24}>
                          <StatePayment i={item} />
                        </Col>
                      </Row>
                    }
                    // description={"ssdf"}
                  />
                </List.Item>
              )}
            </>
          )}
        </VirtualList>
      </List>
    </>
  );
}
