import React from "react";

export const routeManager = [
  {
    name: "NotFound",
    path: "*",
    component: React.lazy(() => import("../screen/NotFound")),
  },
  {
    name: "404",
    path: "/404",
    component: React.lazy(() => import("../screen/NotFound")),
  },

  {
    name: "Home",
    path: "/home",
    component: React.lazy(() => import("../screen/Home")),
  },
  {
    name: "Login",
    path: "/login",
    component: React.lazy(() => import("../screen/Loginpage")),
  },
  {
    name: "Search",
    path: "/search",
    component: React.lazy(() => import("../screen/SearchItem")),
  },
  {
    name: "Register",
    path: "/register",
    component: React.lazy(() => import("../screen/Registerpage")),
  },
  {
    name: "Products",
    path: "/products",
    component: React.lazy(() => import("../screen/Product")),
  },
];
