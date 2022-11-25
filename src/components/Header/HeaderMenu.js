import React from "react";
import { MainMenu } from "./MenuItem";
import { Layout } from "antd";
const { Header } = Layout;

export default function HeaderMenu() {
  return (
    <Header>
      <MainMenu header={true} />
    </Header>
  );
}
