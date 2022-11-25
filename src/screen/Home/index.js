import { React, useEffect } from "react";
import { Row, Col, Divider } from "antd";
import { Matketshow, ProductCard, AntSpinload } from "../../components";
import { Promotion, CategoryList, Advertisement } from "../../containers";
import { sildesData } from "./slidedata";
import { useSelector, useDispatch } from "react-redux";
import { getListProduct } from "../../redux/actions";
import { useMatchMedia } from "../../hook";

export default function Home() {
  const dispatch = useDispatch();
  // const location = useLocation();
  const productList = useSelector((state) => state.productList);
  const { products, loading } = productList;
  const cateProduct = useSelector((state) => state.categoriedProduct);
  const { cateproduct, cateproloading } = cateProduct;
  let isMobileResolution = useMatchMedia("(min-width:725px)", true);
  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch]);

  return (
    <>
      <Row align="top">
        <Col style={{ margin: "0 auto" }} xl={{ span: 20 }} xs={{ span: 24 }}>
          <Matketshow></Matketshow>
        </Col>
        <Divider plain>
          <h2>The Best Promotion</h2>
        </Divider>
        <Col style={{ marginTop: "2rem" }} xl={{ span: 12 }} xs={{ span: 24 }}>
          <Advertisement data={sildesData} />
        </Col>
        <Col
          style={{ margin: isMobileResolution ? "3rem" : "0" }}
          xl={{ span: 8 }}
          xs={{ span: 24 }}
        >
          <Promotion promote={products} Load={loading} />
        </Col>
        {/* SildeShow */}
      </Row>
      <Divider plain>
        <h2>Your Categoried Goods</h2>
      </Divider>
      <div style={{ justifyItems: "center" }}>
        <CategoryList Catedata={sildesData} />
        <div style={{ margin: "auto 2rem" }}>
          {cateproloading === true && <AntSpinload />}
          <ProductCard data={cateproduct} />
        </div>
      </div>
    </>
  );
}
