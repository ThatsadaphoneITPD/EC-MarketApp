import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export const MenuItem = (list) => {
  return list.map((menu, index) => {
    return (
      <Menu.Item key={index + 1} icon={menu.icon}>
        <Link to={menu.link}>{menu.text}</Link>
      </Menu.Item>
    );
  });
};
