import React from "react";
import { BsCardChecklist } from "react-icons/bs";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FcSalesPerformance } from "react-icons/fc";
export const merchantMenu = [
  {
    icon: <SiHomeassistantcommunitystore size={20} />,
    link: "/store",
    text: "Store",
  },
  {
    icon: <BsCardChecklist size={20} />,
    link: "/storeorder",
    text: "Order",
  },
  {
    icon: <FcSalesPerformance size={20} />,
    link: "/sale",
    text: "Sale",
  },
];
