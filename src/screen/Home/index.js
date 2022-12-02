import { React, useEffect } from "react";
import { Row, Col, Carousel, Divider } from "antd";
import { Matketshow, ProductCard, AntSpinload } from "../../components";
import { Promotion, CategoryList, Advertisement } from "../../containers";
import { sildesData, sildesShow } from "./slidedata";
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

  const settings = {
    // dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <Row align="top">
        <Col style={{ margin: "0 auto" }} xl={{ span: 24 }} xs={{ span: 24 }}>
          {/* <Matketshow></Matketshow> */}
          <div className="SlideShow_Carousel_size">
            <Carousel {...settings} className="Detail_Carousel_color" autoplay>
              {sildesShow.map((item) => (
                <div key={`${item.id}`}>
                  <div className="Detail_Image_frame" />
                  <img
                    src={item.image}
                    className="Detail_CarouselStyle"
                    alt={item.id}
                  />
                  <div />
                </div>
              ))}
            </Carousel>
          </div>
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
