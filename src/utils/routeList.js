import React from "react";

export const routes = [
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
    name: "Login",
    path: "/login",
    component: React.lazy(() => import("../screen/Loginpage")),
  },
  {
    name: "checkout",
    path: "/checkout",
    component: React.lazy(() => import("../screen/Checkout")),
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
];
