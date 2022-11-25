import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShopperOrder } from "../../redux/actions";
import { AntSpinload } from "../../components";
import { Orderlist } from "../../containers";
import { Divider } from "antd";
import { FaParachuteBox } from "react-icons/fa";

export default function Orderpage() {
  const dispatch = useDispatch();
  // const location = useLocation();
  const Orderlists = useSelector((state) => state.userOrder);
  const [rerender, setRerender] = useState(false);
  const { shopperorder, orderShoperloading } = Orderlists;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    fetch(dispatch(getShopperOrder()));
  }, [dispatch, userInfo, rerender]);
  return (
    <>
      <FaParachuteBox
        className="AnimateIcon"
        style={{ marginLeft: "5rem" }}
        size={50}
      />
      <Divider orientation="left">Shopper's Order List </Divider>
      {orderShoperloading === true ? (
        <AntSpinload />
      ) : (
        <Orderlist
          orderdata={shopperorder}
          render={rerender}
          setRender={setRerender}
        />
      )}
    </>
  );
}
