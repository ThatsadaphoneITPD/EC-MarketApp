import React, { useState, useEffect } from "react";
import { MainScreen, Loading, ProductCard } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getListProduct } from "../../redux/actions";

export default function ProdductPage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const [loadPage, setLoadPage] = useState(3);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch, userInfo, loadPage]);

  return (
    <>
      <MainScreen
        title="Wellcom to Centre Market  "
        page={userInfo.role}
        user={userInfo.account}
      >
        {error ? <h3>{error}</h3> : <></>}
        {loading === true ? <Loading /> : <ProductCard data={products} />}
      </MainScreen>
    </>
  );
}
