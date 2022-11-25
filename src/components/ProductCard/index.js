import React from "react";
import { Col, Row } from "antd";
import Card from "./Card";

export default function ProductCard({ data, render, setRender }) {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 28 }}>
      {data &&
        data.map((product) => (
          <Col className="gutter-row">
            <Card product={product} render={render} setRender={setRender} />
          </Col>
        ))}
    </Row>
  );
}
