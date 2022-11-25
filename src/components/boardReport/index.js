import React from "react";
import { Card, Col, Row } from "antd";
import { MdPointOfSale, MdStoreMallDirectory, MdEvent } from "react-icons/md";
import { RiOrderPlayFill } from "react-icons/ri";
import Moment from "moment";

export default function Borad({ report }) {
  const styleCard = {
    top: "1rem",
    width: "15rem",
    margin: "1rem",
    borderRadius: "1.2rem",
    overflow: "hidden",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  };
  //newest made Daily sale from Salelist
  const arraySale = report?.salelist;
  const lastSale = arraySale && arraySale[arraySale.length - 1];
  const lastSaleDate = lastSale && lastSale.date;
  // console.log(lastSale);
  //
  const formatter = new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
  });
  const CustomTitle = ({ name, data }) => {
    return (
      <Row gutter={24}>
        <Col span={10}></Col>
        <Col span={11} style={{ textAlign: "right" }}>
          <h5>
            <strong>{name}</strong>
            <br />
            <span>{data}</span>
          </h5>
        </Col>
      </Row>
    );
  };

  const DateNow = ({ fulldate, saledate }) => {
    let currentDate = new Date();
    let newDate;
    let lastSale = "";
    if (fulldate === true) {
      newDate = Moment(saledate).format("MMM. DD. YY");
      lastSale = "Latest order";
    } else if (fulldate === false) {
      newDate = Moment(currentDate).format("MMM. DD. YYYY");
    } else {
      newDate = Moment(currentDate).format("MMM. DD. YY");
    }
    return (
      <>
        <MdEvent size={14} color="#8c8c8c" />
        <span>{"    "}</span>
        {newDate}
        <span>{"    "}</span>
        <strong>{lastSale}</strong>
      </>
    );
  };

  return (
    <div className="site-card-wrapper">
      <Row className="cardBoard">
        <Col lg={{ span: 6 }} md={{ span: 10 }} xs={{ span: 16 }}>
          <div
            className="boardCardTitle"
            style={{ backgroundColor: "#ffa940" }}
          >
            <MdPointOfSale size={50} />
          </div>
          <Card
            title={
              <CustomTitle
                name={"Daily Sales"}
                data={formatter.format(parseFloat(lastSale?.total))}
              />
            }
            style={styleCard}
          >
            <DateNow fulldate={true} saledate={lastSaleDate} />
          </Card>
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 10 }} xs={{ span: 16 }}>
          <div
            className="boardCardTitle"
            style={{ backgroundColor: "#73d13d" }}
          >
            <MdStoreMallDirectory size={50} />
          </div>
          <Card
            title={
              <CustomTitle
                name={"Revenue"}
                data={formatter.format(parseFloat(report?.totalSaleAmount))}
              />
            }
            style={styleCard}
          >
            <DateNow fulldate={false} />
          </Card>
        </Col>
        <Col lg={{ span: 6 }} md={{ span: 20 }} xs={{ span: 16 }}>
          <div
            className="boardCardTitle"
            style={{ backgroundColor: "#69c0ff" }}
          >
            <RiOrderPlayFill size={50} />
          </div>
          <Card
            title={
              <CustomTitle
                name={"Paid Order"}
                data={"Unit: " + report?.countAllSale}
              />
            }
            style={styleCard}
          >
            <DateNow />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
