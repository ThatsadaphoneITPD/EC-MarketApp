import { Result } from "antd";
import React from "react";
import { useMatchMedia } from "../../hook";
import { useNavigate } from "react-router-dom";

export default function CheckoutSuccess() {
  let isMobileResolution = useMatchMedia("(min-width:725px)", true);
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/order");
  };
  const TitleContent = () => {
    return (
      <>
        Successfully Purchased and Place Order!!
        <br />
        <img
          src={
            "https://res.cloudinary.com/dp3zeejct/image/upload/v1664004643/Emagi/Shop_giveaway-rafiki_mimbrl.png"
          }
          style={{
            width: isMobileResolution ? "40rem" : "20rem",
            height: isMobileResolution ? "20rem" : "15rem",
          }}
        />
      </>
    );
  };

  return (
    <Result
      status="success"
      title={<TitleContent />}
      subTitle="Your new Order will be pushed in Order page"
      extra={[
        <button className="btn-blue-cart" onClick={() => handleNav()}>
          Here
        </button>,
      ]}
    />
  );
}
