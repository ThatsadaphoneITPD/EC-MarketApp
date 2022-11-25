import React from "react";

export const routesShopper = [
  {
    name: "NotFound",
    path: "*",
    component: React.lazy(() => import("../screen/NotFound")),
  },
  {
    name: "LandingPage",
    path: "/",
    component: React.lazy(() => import("../screen/Landing")),
  },
  {
    name: "Home",
    path: "/home",
    component: React.lazy(() => import("../screen/Home")),
  },
  {
    name: "Search",
    path: "/search",
    component: React.lazy(() => import("../screen/SearchItem")),
  },
  {
    name: "checkout",
    path: "/checkout",
    component: React.lazy(() => import("../screen/Checkout")),
  },
  {
    name: "Paysuccess",
    path: "/checkout-success",
    component: React.lazy(() => import("../screen/OrderScuess")),
  },
  {
    name: "orderpage",
    path: "/order",
    component: React.lazy(() => import("../screen/Orderpage")),
  },
  {
    name: "Products",
    path: "/products",
    component: React.lazy(() => import("../screen/Product")),
  },
  {
    name: "Item",
    path: "/item/:id",
    component: React.lazy(() => import("../screen/ItemDetail")),
  },
  {
    name: "Profile",
    path: "/profile",
    component: React.lazy(() => import("../screen/Profile")),
  },
  {
    name: "Chat",
    path: "/chat",
    component: React.lazy(() => import("../screen/Chat")),
  },
  {
    name: "404",
    path: "/404",
    component: React.lazy(() => import("../screen/NotFound")),
  },
];
