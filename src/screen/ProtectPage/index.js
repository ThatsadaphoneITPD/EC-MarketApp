import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({
  children,
  authorized = ["Admin", "shopper", "ECmart_manager", "merchant"],
  ...restProps
}) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;
  const location = useLocation();

  if (!userLogin.isLoggedIn) {
    return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
  }

  if (!authorized.includes(userInfo.role)) {
    return <Navigate to={location.pathname} replace></Navigate>;
  }
  return children;
}
