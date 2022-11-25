import React from "react";
import { Avatar, Spin } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

export default function AntSpinload() {
  const antIcon = (
    <ReloadOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  return (
    <div style={{ width: "auto" }}>
      <Spin
        style={{ margin: "auto 50%", color: "#b37feb" }}
        indicator={antIcon}
        tip="Loading..."
      />
    </div>
  );
}
