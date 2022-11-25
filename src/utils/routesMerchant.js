import React from "react";

export const routesMerchant = [
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
    name: "Item",
    path: "/item/:id",
    component: React.lazy(() => import("../screen/ItemDetail")),
  },
  {
    name: "Login",
    path: "/login",
    component: React.lazy(() => import("../screen/Loginpage")),
  },
  {
    name: "Register",
    path: "/register",
    component: React.lazy(() => import("../screen/Registerpage")),
  },
  {
    name: "Search",
    path: "/search",
    component: React.lazy(() => import("../screen/SearchItem")),
  },
  {
    name: "Store",
    path: "/store",
    component: React.lazy(() => import("../screen/Store")),
  },
  {
    name: "StoreOrder",
    path: "/storeorder",
    component: React.lazy(() => import("../screen/StoreOrder")),
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
    name: "Sale",
    path: "/sale",
    component: React.lazy(() => import("../screen/Sale")),
  },
];
