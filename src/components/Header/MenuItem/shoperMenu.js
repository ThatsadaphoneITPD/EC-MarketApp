import React from "react";
import { GiBoxUnpacking } from "react-icons/gi";
import { SiShopify } from "react-icons/si";
import { FaCcAmazonPay } from "react-icons/fa";
export const shopperMenu = [
  {
    icon: <SiShopify size={22} />,
    link: "/products",
    text: "",
  },
  {
    icon: <FaCcAmazonPay size={22} />,
    link: "/checkout",
    text: "",
  },
  {
    icon: <GiBoxUnpacking size={22} />,
    link: "/order",
    text: "",
  },
];
