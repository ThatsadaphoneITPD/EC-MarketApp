import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { Modal } from "antd";
import { DropdownMenu } from "../../../components";
import { EditFrom } from "../../../containers";
import { EditFilled, DeleteFilled } from "@ant-design/icons";
import {
  getProductByIdAction,
  AddCart,
  deletProductByIdAction,
} from "../../../redux/actions";
const { confirm } = Modal;

export default function Card({ product, render, setRender }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modal2Open, setModal2Open] = useState(false);
  const someEventHandler = (id) => {
    navigate(`/item/` + id);
  };
  const getProductID = (id) => {
    dispatch(getProductByIdAction(id)).then(someEventHandler(id));
  };
  const addToCart = (item) => {
    dispatch(AddCart(item));
  };
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleEdit = () => {
    setModal2Open(!modal2Open);
  };
  const handleDeletPro = (e) => {
    confirm({
      title: "Do you Want to Delete these items?" + e.title,
      icon: <DeleteFilled />,
      content: "Delete Directly in Porduct Model DB",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(deletProductByIdAction(e._id))
          .then(() => {
            setRender(!render);
          })
          .then(() => countDown("DELETE"));
      },
      onCancel() {},
    });
  };

  const countDown = (message) => {
    let secondsToGo = 3;
    const modal = Modal.success({
      title: ` ${message}`,
      content: `a Task is Done, Pls Wait a`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `a message'll colse after ${secondsToGo} second.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  };

  let menu = [
    {
      icon: (
        <div className="itemEite">
          <EditFilled style={{ fontSize: "1.2rem" }} />
        </div>
      ),
      colortext: "",
      bgc: "",
      action: handleEdit,
    },
    {
      icon: (
        <div className="ItemDelete">
          <DeleteFilled style={{ fontSize: "1.2rem" }} />
        </div>
      ),
      colortext: "",
      bgc: "",
      action: handleDeletPro,
    },
  ];

  return (
    <div className="card" key={product._id}>
      {userInfo == null ? (
        <div className="first">
          <div className="">
            <span className="wishlist">
              <AiOutlineHeart />
            </span>
          </div>
        </div>
      ) : (
        (userInfo.role === "shopper" && (
          <div className="first">
            <div className="">
              <span className="wishlist">
                <AiOutlineHeart />
              </span>
            </div>
          </div>
        )) ||
        (userInfo.role === "merchant" && userInfo.accountId === product.user && (
          <>
            <div className="CardmenuAtion">
              <DropdownMenu menu={menu} event={product} />
            </div>
            <Modal
              title={null}
              closable={false}
              width={"30rem"}
              centered
              visible={modal2Open}
              footer={null}
              onOk={() => setModal2Open(!modal2Open)}
              onCancel={() => setModal2Open(!modal2Open)}
            >
              <EditFrom
                userInfo={userInfo}
                EditItem={product}
                setModal={setModal2Open}
                modal={modal2Open}
                render={render}
                setRender={setRender}
                closeEdit={handleEdit}
              />
            </Modal>
          </>
        ))
      )}

      <div onClick={() => getProductID(product._id)}>
        <div className="image-container">
          {product.attachments.length === 0 ? (
            <img
              src={
                "https://res.cloudinary.com/dp3zeejct/image/upload/v1663663693/Emagi/4636224_oi4j45.jpg"
              }
              al="404"
            />
          ) : (
            <img
              src={product.attachments && product.attachments[0].online_url}
              al="id"
              className=" thumbnail-image"
            />
          )}
        </div>
      </div>
      <div className="detail">
        <div className="rowcard">
          <div className="colcard" onClick={() => getProductID(product._id)}>
            <h5 className="dress-name">{product.title}</h5>
          </div>
        </div>
        <div
          className="rowcard"
          style={{ textAlign: "right", padding: " 0.3rem" }}
        >
          <div className="colcard">
            <span className="new-price">{product.price} $s</span>
          </div>
        </div>
        <div className="rowcard">
          <div className="colcard">
            <i className="rating-star">
              <AiOutlineStar />
            </i>
            <span className="rating-number"> {product.price}</span>
          </div>
          <div className="colcard">
            {userInfo == null ? (
              <button className="btn-blue" onClick={() => addToCart(product)}>
                Add +
              </button>
            ) : (
              userInfo.role === "shopper" && (
                <button className="btn-blue" onClick={() => addToCart(product)}>
                  Add +
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
