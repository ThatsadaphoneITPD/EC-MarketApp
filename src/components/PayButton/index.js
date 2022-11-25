import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { serviceAPI } from "../../service";
import { message } from "antd";

export default function PayButton({ cartItem, render, setRender }) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const HandleCheckout = () => {
    axios
      .post(`${serviceAPI.URL}/api/stripe/create-checkout-session`, {
        cartItem,
        userId: userInfo.accountId,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .then(() => {
        setRender(!render);
      })
      .catch((err) => message.error("Checout Err", err.message));
  };
  return (
    <>
      <button
        onClick={HandleCheckout}
        style={{ width: "5rem" }}
        className="custom-btn btn-12"
      >
        <span>Let's Go</span>
        <span>PayOut</span>
      </button>
    </>
  );
}
