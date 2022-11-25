import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Modal, message } from "antd";
import { updateProfile } from "../../redux/actions";
const { TextArea } = Input;

const FormEdit = ({
  HandleNameInput,
  input,
  roles,
  dispatch,
  setRender,
  render,
}) => {
  const updateMain = useSelector((state) => state.updateUser);
  const { update, error } = updateMain;
  useEffect(() => {}, [updateMain]);
  const messageUpdate = update?.message;
  const Toast = (mss) => {
    messageUpdate ? message.success(mss) : message.error(error);
  };

  const EditName = async (e) => {
    e.preventDefault();
    dispatch(updateProfile("", input.fullname, "", "", "", "")).then(() => {
      setRender(!render);
      Toast("Update Name");
    });
  };
  const EditRole = async (e) => {
    e.preventDefault();
    dispatch(updateProfile(input.role, "", "", "", "", "")).then(() => {
      setRender(!render);
      Toast("Switch Role as " + input.role);
    });
  };
  const EditAge = async (e) => {
    e.preventDefault();
    dispatch(updateProfile("", "", "", input.age, "", "")).then(() => {
      setRender(!render);
      Toast("Change age");
    });
  };
  const EditAbout = async (e) => {
    e.preventDefault();
    dispatch(updateProfile("", "", input.about, "", "", "")).then(() => {
      setRender(!render);
      Toast("Update About Store");
    });
  };
  const EditStore = async (e) => {
    e.preventDefault();
    dispatch(updateProfile("", "", "", "", input.store, "")).then(() => {
      setRender(!render);
      Toast("Change Store Name");
    });
  };

  //  updateProfile = ((role = ""), (first = ""), (last = ""), (age = ""));
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: "small" }}
      onValuesChange={"small"}
      size={"small"}
    >
      <Form.Item label="Full Name">
        <Input
          name="fullname"
          onChange={HandleNameInput}
          value={input.fullname}
        />
        <div className="bntEdit">
          <button className="btn" onClick={EditName}>
            Edit
          </button>
        </div>
      </Form.Item>
      <Form.Item label="Store Title">
        <Input name="store" onChange={HandleNameInput} value={input.store} />
        <div className="bntEdit">
          <button className="btn" onClick={EditStore}>
            Edit
          </button>
        </div>
      </Form.Item>
      <Form.Item label="Role">
        {roles && (
          <select
            name="role"
            defaultValue={input.role}
            onChange={HandleNameInput}
            value={input.role}
          >
            {roles.map((i) => (
              <option value={i}>{i}</option>
            ))}
          </select>
        )}
        <div className="bntEdit" onClick={EditRole}>
          <button className="btn">Edit</button>
        </div>
      </Form.Item>
      <Form.Item label="Age">
        <Input name="age" onChange={HandleNameInput} value={input.age} />
        <div className="bntEdit">
          <button className="btn" onClick={EditAge}>
            Edit
          </button>
        </div>
      </Form.Item>
      <Form.Item label="About">
        <TextArea
          rows={4}
          name="about"
          onChange={HandleNameInput}
          value={input.about}
        />
        <div className="bntEdit">
          <button className="btn" onClick={EditAbout}>
            Edit
          </button>
        </div>
      </Form.Item>
    </Form>
  );
};

const FormAvatar = ({
  HandleNameInput,
  input,
  dispatch,
  setRender,
  render,
}) => {
  const updateMain = useSelector((state) => state.updateUser);
  const { update, error } = updateMain;
  useEffect(() => {}, [updateMain]);
  const messageUpdate = update?.message;
  const Toast = (mss) => {
    messageUpdate ? message.success(mss) : message.error(error);
  };
  const EditAvatar = async (e) => {
    e.preventDefault();
    dispatch(updateProfile("", "", "", "", "", input.avatar)).then(() => {
      setRender(!render);
      Toast("Change Avatar");
    });
  };
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: "small" }}
      onValuesChange={"small"}
      size={"small"}
    >
      <Form.Item label="Avatar URL">
        <Input name="avatar" onChange={HandleNameInput} value={input.avatar} />
        <div className="bntEdit">
          <button className="btn" onClick={EditAvatar}>
            Edit
          </button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default function ProfileCard({ data, file, roles, render, setRender }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenAva = () => {
    setOpenAvatar(!openAvatar);
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();
  const handleMove = (endPoint) => {
    navigate("/" + endPoint);
  };
  const [input, setInput] = useState({
    fullname: file?.firstName,
    about: file?.lastName,
    age: file?.age,
    role: data?.role.roleName,
    store: data?.username,
    avatar: data?.profileImage,
  });
  async function HandleNameInput(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
    // console.log(input.fullname);
  }

  return (
    <div className="procard">
      <div className="cover-photo" onClick={handleOpenAva}>
        <img
          src={
            data
              ? data.profileImage
              : "https://res.cloudinary.com/dp3zeejct/image/upload/v1663663499/Emagi/Creative_thinking-bro_ekpkf1.png"
          }
          alt="file"
          className="profile"
        />
      </div>
      <Modal
        title="Edit Avatar"
        closable={false}
        width={"30rem"}
        centered
        visible={openAvatar}
        footer={null}
        onOk={() => setOpenAvatar(!openAvatar)}
        onCancel={() => setOpenAvatar(!openAvatar)}
      >
        <FormAvatar
          HandleNameInput={HandleNameInput}
          dispatch={dispatch}
          input={input}
          setRender={setRender}
          render={render}
        />
      </Modal>
      <h3 className="profile-name">{file?.firstName}</h3>{" "}
      {userInfo == null
        ? !userLogin.loading && <></>
        : userInfo.role === "merchant" && (
            <>
              <h3 className="profile-name">Store: {data?.username}</h3>
            </>
          )}
      <p className="about">
        {file?.lastName} <br /> Age: {file?.age}
      </p>
      {userInfo == null
        ? !userLogin.loading && (
            <Link to="/login" style={{ color: "#fa8c16" }}>
              <button className="btn">Login</button>
            </Link>
          )
        : (userInfo.role === "Admin" && <></>) ||
          (userInfo.role === "shopper" && (
            <>
              <button className="btn" onClick={() => handleMove("products")}>
                Shop
              </button>
              <button className="btn" onClick={() => handleMove("order")}>
                Order
              </button>
            </>
          )) ||
          (userInfo.role === "merchant" && (
            <>
              <button className="btn" onClick={() => handleMove("store")}>
                Store
              </button>
              <button className="btn" onClick={() => handleMove("storeorder")}>
                Delivery Catalog{" "}
              </button>
            </>
          ))}
      <button className="btn" onClick={handleOpen}>
        Edit
      </button>
      <Modal
        title="Edit Profile"
        closable={false}
        width={"30rem"}
        centered
        visible={open}
        footer={null}
        onOk={() => setOpen(!open)}
        onCancel={() => setOpen(!open)}
      >
        <FormEdit
          HandleNameInput={HandleNameInput}
          dispatch={dispatch}
          input={input}
          roles={roles}
          setRender={setRender}
          render={render}
        />
      </Modal>
      <div className="icons">
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
}
