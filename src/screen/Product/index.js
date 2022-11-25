import React, { useState, useEffect } from "react";
// import { Link, useLocation, Navigate } from "react-router-dom";
import { MainScreen, Loading, ProductCard } from "../../components";
// import { ProductFrom } from "../../containers";
import { useSelector, useDispatch } from "react-redux";
import { getListProduct } from "../../redux/actions";

export default function ProdductPage() {
  const dispatch = useDispatch();
  // const location = useLocation();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  // const [dataMoreload, setDataRMoreload] = useState([]);
  // console.log(dataRecords);
  const [loadPage, setLoadPage] = useState(3);
  // const LoadMore = () => {
  //   setLoadPage(loadPage + loadPage);
  // };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch, userInfo, loadPage]);

  return (
    <>
      <MainScreen
        title="Wellcom back to "
        page={userInfo.role}
        user={userInfo.account}
      >
        {error ? <h3>{error}</h3> : <></>}
        {loading === true ? <Loading /> : <ProductCard data={products} />}
      </MainScreen>
    </>
  );
}
