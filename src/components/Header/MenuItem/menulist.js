import React from "react";
import {
  BsBarChartLine,
  BsFillPeopleFill,
  BsFillHddStackFill,
} from "react-icons/bs";
export const menuItems = [
  {
    icon: <BsFillPeopleFill />,
    link: "/accounts",
    text: "Users",
  },
  {
    icon: <BsBarChartLine />,
    link: "/dashboard",
    text: "Dashboard",
  },
  {
    icon: <BsFillHddStackFill />,
    link: "/attachment",
    text: "Attachment",
  },
];
