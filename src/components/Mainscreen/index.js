import React from "react";
import { Row } from "antd";

function Mainscreen({ title, page, children, user }) {
  return (
    <div className="mainback">
      <Row>
        <div className="page">
          {title && (
            <>
              <h1 className="heading">{title}</h1>
            </>
          )}
          {children}
        </div>
      </Row>
    </div>
  );
}

export default Mainscreen;
