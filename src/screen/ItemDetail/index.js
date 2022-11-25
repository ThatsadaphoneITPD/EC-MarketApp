import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../../components";
import { getProductByIdAction } from "../../redux/actions";

export default function ItemDetail() {
  const productItem = useSelector((state) => state.productItem);
  const { detail, error, success } = productItem;
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;

  useEffect(() => {}, [detail, products]);
  return (
    <>
      <ProductDetail
        detail={detail}
        error={error}
        products={products}
      ></ProductDetail>
    </>
  );
}
