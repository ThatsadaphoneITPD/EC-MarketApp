import React, { useState } from "react";
import { MainMenu } from "./MenuItem";
import { Layout } from "antd";
import { useMatchMedia } from "../../hook";
const { Sider } = Layout;

export default function SiderMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const isDesktopResolution = useMatchMedia("(min-width:768px)", true);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      collapsedWidth={isDesktopResolution ? "3rem" : "0"}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="lg"
    >
      <MainMenu header={false} />
    </Sider>
  );
}
