import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CartBag, PayButton, AntSpinload } from "../../components";
import { MadeOrderCart } from "../../containers";
import { getShopperOrder } from "../../redux/actions";
import { Row, Col, Divider } from "antd";

export default function Checkout() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cartItem);
  const { carts } = cartItem;
  const Orderlists = useSelector((state) => state.userOrder);
  const [rerender, setRerender] = useState(false);
  const { shopperorder, orderShoperloading } = Orderlists;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    fetch(dispatch(getShopperOrder()));
  }, [dispatch, userInfo, rerender]);
  return (
    <div>
      <Row>
        <Col xl={{ span: 12 }} xd={{ span: 12 }} xs={{ span: 24 }}>
          <Divider>Your Order's Made</Divider>
          {orderShoperloading === true ? (
            <AntSpinload />
          ) : (
            <MadeOrderCart Ordata={shopperorder} />
          )}
        </Col>
        <Col xl={{ span: 8 }} xd={{ span: 8 }} xs={{ span: 24 }}>
          <CartBag
            carts={carts}
            imgWidth="5rem"
            imhHeight="5rem"
            trheight="30rem"
            optionoff={false}
          ></CartBag>
          {userInfo == null
            ? !userLogin.loading && (
                <Link to="/login">
                  <button class="custom-btn btn-6">
                    <span>Please Login! </span>
                  </button>
                </Link>
              )
            : userInfo.role == "shopper" && (
                <PayButton
                  cartItem={carts}
                  render={rerender}
                  setRender={setRerender}
                />
              )}
        </Col>
      </Row>
    </div>
  );
}
