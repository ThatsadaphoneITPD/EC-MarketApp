import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMerchantStore } from "../../redux/actions";
import { AntSpinload, ProductCard, AddFloatig } from "../../components";
import { Modal } from "antd";
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
            <h2>{s.storename}</h2>
            <h2>
              Hi Hi, UserMerchant!
              <br />
              {s.merchant.email}
            </h2>
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
