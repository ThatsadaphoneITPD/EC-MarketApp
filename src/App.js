import { BrowserRouter, Routes } from "react-router-dom";
import { LayoutSiglepage } from "./components";
import { useSelector } from "react-redux";
import React from "react";
import {
  listRoute,
  routeManager,
  routes,
  routesAdmin,
  routesMerchant,
  routesShopper,
} from "./utils";
import "./css/index.css";
import "antd/dist/antd.min.css";
import "./scss/main.scss";
//Main commit
function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;
  return (
    <BrowserRouter>
      <LayoutSiglepage>
        <Routes>
          {listRoute(routes)}
          {userInfo == null
            ? !userLogin.loading && <></>
            : (userInfo.role === "Admin" && <>{listRoute(routesAdmin)}</>) ||
              (userInfo.role === "shopper" && (
                <>{listRoute(routesShopper)}</>
              )) ||
              (userInfo.role === "ECmart_manager" && (
                <>{listRoute(routeManager)}</>
              )) ||
              (userInfo.role === "merchant" && (
                <>{listRoute(routesMerchant)}</>
              ))}
        </Routes>
        {/* <BackTop /> */}
      </LayoutSiglepage>
    </BrowserRouter>
  );
}

export default App;
