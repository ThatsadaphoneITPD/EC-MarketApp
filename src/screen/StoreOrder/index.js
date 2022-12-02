import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMerchantStore } from "../../redux/actions";
import { Row, Col } from "antd";
import { AntSpinload } from "../../components";
import { OrderItem } from "../../containers";

export default function StoreOrder() {
  const dispatch = useDispatch();
  const [rerender, setRerender] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const myStore = useSelector((state) => state.merchantStore);
  const { store, storeloading, meessagestorerror } = myStore;

  useEffect(() => {
    fetch(dispatch(getMerchantStore()));
  }, [dispatch, userInfo, rerender]);
  return (
    <>
      {storeloading == true ? (
        <AntSpinload />
      ) : (
        store?.map((s, i) => (
          <>
            <div style={{ marginLeft: "1rem" }}>
              <Row
                style={{
                  width: "25rem",
                  backgroundColor: "#096dd9",
                  borderRadius: "1rem",
                }}
              >
                <Col xl={{ span: 6 }} xs={{ span: 6 }}>
                  <div
                    style={{
                      width: "90px",
                      height: "90px",
                      backgroundColor: "#91d5ff",
                      color: "white",
                      borderRadius: "50px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/dp3zeejct/image/upload/v1669979621/Emagi/shoponline_aejsp7.png"
                      style={{ marginTop: "18px", width: "80px" }}
                      alt={"shopimage"}
                    />
                  </div>
                </Col>
                <Col xl={{ span: 12 }} xs={{ span: 12 }}>
                  <h2 style={{ marginTop: "15px", color: "white" }}>
                    {s.storename} Catalogs
                    <br />
                    {s.merchant.email}
                  </h2>
                </Col>
              </Row>
            </div>
            <OrderItem
              orders={s.orders}
              render={rerender}
              setRender={setRerender}
            />
          </>
        ))
      )}
    </>
  );
}
