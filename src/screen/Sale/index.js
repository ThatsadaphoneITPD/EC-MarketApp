import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoreSale } from "../../redux/actions";
import { DashboardSale } from "../../containers";

export default function Sale() {
  const dispatch = useDispatch();
  const storeSale = useSelector((state) => state.sale);
  const { saleReport, market } = storeSale;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const saleData = saleReport && saleReport[0];
  const sale = saleReport && saleReport[0].salelist;
  const categorySale = saleReport && saleReport[0].categoriedSale;

  const countCategoryGlobalMarket = (arr) => {
    let result = [];
    if (arr) {
      result = Object.values(
        null ||
          arr?.reduce((acc, item) => {
            acc[item.category] = acc[item.category]
              ? { ...item, value: item.value + acc[item.category].value }
              : item;
            return acc;
          }, {})
      );
      return result;
    } else {
      return result;
    }
  };

  const countDuplicateSale = (arr) => {
    let result = [];
    if (arr) {
      result = Object.values(
        null ||
          arr?.reduce((acc, item) => {
            acc[item.name] = acc[item.name]
              ? { ...item, value: item.value + acc[item.name].value }
              : item;
            return acc;
          }, {})
      );
      return result;
    } else {
      return result;
    }
  };

  const valueSale = countDuplicateSale(sale);
  const valueCategories = countDuplicateSale(categorySale);
  const marketglobal = countCategoryGlobalMarket(market);
  // console.log(sale);
  // console.log(valueSale);
  // console.log(marketglobal);

  useEffect(() => {
    fetch(dispatch(getStoreSale()));
  }, [dispatch, userInfo]);
  return (
    <>
      <DashboardSale
        sale={valueSale}
        cate={valueCategories}
        report={saleData}
        market={marketglobal}
      />
    </>
  );
}
