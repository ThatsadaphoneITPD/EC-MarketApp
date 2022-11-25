import React from "react";
import { Barchart, BoardReport, PieChart, BarChartJs } from "../../components";
import { Col, Row } from "antd";
import { useMatchMedia } from "../../hook";

export default function Dashboard({ sale, cate, report, market }) {
  let isMobileResolution = useMatchMedia("(max-width:768px)", true);
  return (
    <>
      <BoardReport report={report} />
      <Row
        style={
          isMobileResolution ? { marginLeft: "1rem" } : { marginLeft: "6rem" }
        }
      >
        <Col lg={{ span: 10 }} md={{ span: 24 }} xs={{ span: 16 }}>
          <PieChart barName="The Sales Type on Store" cate={cate} />
        </Col>
        <Col lg={{ span: 10 }} md={{ span: 24 }} xs={{ span: 16 }}>
          <Barchart barName="The Sales Goods Item" data={sale} barHeight={30} />
        </Col>
        <Col lg={{ span: 10 }} md={{ span: 24 }} xs={{ span: 16 }}>
          <BarChartJs barName="The Trend Type on Market" market={market} />
        </Col>
      </Row>
    </>
  );
}
