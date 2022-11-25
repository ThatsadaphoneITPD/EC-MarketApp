import React, { useEffect } from "react";
import { PaySuccess } from "../../components";
import { useDispatch } from "react-redux";
import { ClearCart } from "../../redux/actions";

export default function OrderScuss() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.localStorage.removeItem("carts");
    dispatch(ClearCart());
  }, [dispatch]);
  return <PaySuccess></PaySuccess>;
}
