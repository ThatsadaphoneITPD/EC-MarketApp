import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/userAction";
import { MenuItem, menuItems, shopperMenu, merchantMenu } from "./index";
import { CartBag } from "../..";
import {
  PieChartOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { GiSurprised, GiBorderedShield } from "react-icons/gi";
import { BiHomeSmile } from "react-icons/bi";
import { Menu, Modal, Avatar, Badge } from "antd";
import { ClearCart } from "../../../redux/actions/cartAction";

export default function MainMenu({ header }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const cartItem = useSelector((state) => state.cartItem);
  const { carts } = cartItem;

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(ClearCart);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const navigate = useNavigate();
  const handleOk = () => {
    navigate("/checkout");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {}, [userInfo, carts]);
  return (
    <>
      <div className="logo" />
      <Menu
        theme="dark"
        mode={header === true ? "horizontal" : "inline"}
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item icon={<GiBorderedShield size={20} />}>
          <Link to="/home">EZ-Mortar</Link>
        </Menu.Item>
        <Menu.Item style={{ alignItems: "center" }}>
          <Link to="/search">
            <SearchOutlined
              style={{ fontSize: "1.5rem", color: "#efdbff" }}
              theme="outlined"
            />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/home">
            <BiHomeSmile size={24} />
          </Link>
        </Menu.Item>
        {userInfo == null
          ? !userLogin.loading && (
              <Menu.Item
                icon={
                  <GiSurprised style={{ fontSize: "2rem", color: "#fa8c16" }} />
                }
              >
                <Link to="/login" style={{ color: "#fa8c16" }}>
                  Not Login
                </Link>
              </Menu.Item>
            )
          : (userInfo.role === "Admin" && MenuItem(menuItems)) ||
            (userInfo.role === "shopper" && MenuItem(shopperMenu)) ||
            (userInfo.role === "merchant" && MenuItem(merchantMenu))}
        {userInfo == null
          ? !userLogin.loading && <></>
          : userInfo.role === "shopper" && (
              <Menu.Item
                icon={
                  <span className="avatar-item">
                    <Badge count={carts.length}>
                      <Avatar
                        style={{
                          backgroundColor: "#001529",
                          verticalAlign: "middle",
                        }}
                        icon={<ShoppingCartOutlined />}
                      />
                    </Badge>
                  </span>
                }
                onClick={showModal}
              />
            )}

        <Modal
          title="Cart"
          visible={isModalVisible}
          okText="Check Out"
          onOk={handleOk}
          cancelText="Close"
          onCancel={handleCancel}
        >
          <CartBag
            carts={carts}
            imgWidth="5rem"
            imhHeight="4rem"
            trheight="20rem"
            optionOff={true}
          ></CartBag>
        </Modal>

        <Menu.SubMenu title="User" icon={<UserOutlined />}>
          <Menu.Item>
            <Link to="/profile">User</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/chat">Chat </Link>
          </Menu.Item>

          <Menu.Item
            icon={
              userLogin.loading === false ? (
                <LogoutOutlined
                  style={{ fontSize: "1rem", color: "#f5222d" }}
                />
              ) : (
                <LoginOutlined style={{ fontSize: "1rem", color: "#52c41a" }} />
              )
            }
          >
            <Link to="/" onClick={logoutHandler}>
              {userLogin.loading === false ? <>Log out</> : <>Log In</>}
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  );
}
