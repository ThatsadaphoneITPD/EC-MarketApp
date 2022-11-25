import React from "react";
import { Col, Row, List, Empty } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductByIdAction } from "../../redux/actions";
export default function SearchCardAPI({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const someEventHandler = (id) => {
    navigate(`/item/` + id);
  };
  const getProductID = (id) => {
    dispatch(getProductByIdAction(id)).then(someEventHandler(id));
  };
  return (
    <List
      grid={{
        gutter: 16,
        xs: 2,
        sm: 2,
        md: 4,
        lg: 6,
        xl: 8,
        xxl: 8,
      }}
      dataSource={data}
      locale={{
        emptyText: (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Result Not Found"
          />
        ),
      }}
      renderItem={(item, index) => (
        <List.Item>
          <div
            key={index + 1}
            className="searchCard"
            onClick={() => getProductID(item._id)}
          >
            <img src={item.attachment_list[0].filePath} alt="oi" />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col md={{ span: 24 }} xs={{ span: 8 }}>
                <div className="Procontent">{item.title}</div>
              </Col>
              <Col md={{ span: 24 }} xs={{ span: 8 }}>
                <div className="Proprice">${item.price}</div>
              </Col>
            </Row>
          </div>
        </List.Item>
      )}
    />
  );
}
