import React, { useEffect, useState } from "react";
import { Avatar, List, Select } from "antd";
import { useMatchMedia } from "../../hook";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriedProduct } from "../../redux/actions";

const { Option } = Select;

export default function CategoryList({ Catedata }) {
  const [data, setData] = useState(Catedata);
  let isMobileResolution = useMatchMedia("(min-width:725px)", true);

  const dispatch = useDispatch();
  // const location = useLocation();

  const appendData = () => {
    setData(data);
  };

  useEffect(() => {
    appendData();
  }, []);

  const getCategoriesID = (id) => {
    dispatch(getCategoriedProduct(id));
    // console.log("cate: ", id);
  };

  const handleChange = (value) => {
    dispatch(getCategoriedProduct(value.key));
  };

  return (
    <>
      {isMobileResolution ? (
        <List
          className="CateLitCard"
          grid={{
            gutter: 16,
            sm: 6,
            md: 6,
            lg: 10,
            xl: 10,
            xxl: 10,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              className="cardItem"
              onClick={() => getCategoriesID(item.id)}
            >
              <div className="catecontent">
                <Avatar src={item.avatar} />
                <span className="space" />
                <strong>{item.category}</strong>
              </div>
            </List.Item>
          )}
        />
      ) : (
        <Select
          labelInValue
          size="large"
          defaultValue={{
            value: "Category",
            label: "None",
          }}
          style={{
            width: "10rem",
            margin: "auto 8rem",
          }}
          onChange={handleChange}
          className="Catelist"
        >
          {data.map((item) => (
            <Option value={item.id} className="CateItem">
              <div className="catecontent">
                <Avatar src={item.avatar} />
                <span className="space" />
                <strong>{item.category}</strong>
              </div>
            </Option>
          ))}
        </Select>
      )}
    </>
  );
}
