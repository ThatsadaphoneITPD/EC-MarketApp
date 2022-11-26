import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { DetailCarousel, Accordion, WrapInfo } from "./subElement";
import Loading from "../Loading";

export default function ProductDetail({ detail, error, products }) {
  return (
    <>
      {!detail ? (
        <Loading></Loading>
      ) : (
        <div style={{ position: "relative" }}>
          <DetailCarousel detail={detail} />
          <Row justify="center" align="top" className="Detail_Row_Wrap_Accor">
            <Col xs={{ span: 24 }} className="Deatail_Col_Space"></Col>
            <Col
              xl={{ span: 24 }}
              xs={{ span: 24 }}
              style={{ marginBottom: "10%" }}
            >
              <WrapInfo detail={detail} />
            </Col>
            <Col xs={{ span: 24 }} className="Deatail_Col_Space2"></Col>
            <Col xl={{ span: 24 }} xs={{ span: 24 }}>
              <Accordion detail={detail} products={products} />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}
