import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMerchantStore } from "../../redux/actions";
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
            <h2>{s.storename}</h2>
            <h2>
              The Catalog list for The Store to send
              <br />
              {s.merchant.email}
            </h2>
            <h2></h2>
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
