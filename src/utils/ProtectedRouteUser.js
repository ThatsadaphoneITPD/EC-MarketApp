import { useSelector } from "react-redux";
import { listRoute, routes } from "./index";

export default function ProtectedRouteUser() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;
  return (
    (userInfo.role === "Admin" && listRoute(routes)) ||
    (userInfo.role === "shopper" && listRoute(routes))
  );
}
