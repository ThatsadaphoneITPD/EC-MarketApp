import { Layout } from "antd";
import React, { useState } from "react";
const { Footer } = Layout;

function Footerpage() {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      EC-Market Store ©2022 Created for non-front store of any trader to sell
      without Tax
    </Footer>
  );
}

export default Footerpage;
