import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMerchantStore } from "../../redux/actions";
import { AntSpinload, ProductCard, AddFloatig } from "../../components";
import { Modal, Row, Col } from "antd";
import { ProductFrom } from "../../containers";
import { MdAdd } from "react-icons/md";
export default function Store() {
  const dispatch = useDispatch();
  const [rerender, setRerender] = useState(false);
  const [open, setOpen] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const myStore = useSelector((state) => state.merchantStore);
  const { store, storeloading } = myStore;

  useEffect(() => {
    fetch(dispatch(getMerchantStore()));
  }, [dispatch, userInfo, rerender]);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {storeloading === true ? (
        <AntSpinload />
      ) : (
        store &&
        store.map((s, i) => (
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
                  <h2
                    style={{ marginTop: "15px", color: "white", width: "100%" }}
                  >
                    {s.storename} Factory
                    <br />
                    {s.merchant.email}
                  </h2>
                </Col>
              </Row>
            </div>
            <ProductCard
              data={s.product}
              render={rerender}
              setRender={setRerender}
            />
          </>
        ))
      )}
      <AddFloatig
        action={handleOpen}
        iconAdd={<MdAdd size={40} color="#ffff" />}
      />
      <Modal
        title={null}
        closable={false}
        width={"30rem"}
        centered
        visible={open}
        footer={null}
        onOk={() => setOpen(!open)}
        onCancel={() => setOpen(!open)}
      >
        <ProductFrom
          userInfo={userInfo}
          setModal={setOpen}
          modal={open}
          render={rerender}
          setRender={setRerender}
        />
      </Modal>
    </>
  );
}
