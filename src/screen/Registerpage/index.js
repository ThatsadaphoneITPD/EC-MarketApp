import React, { useState, useEffect } from "react";
// import { Form, Button } from "react-bootstrap";

import { register } from "../../redux/actions/userAction";
import { Input } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";

import { MainScreen, ErrorMessage, Loading } from "../../components";

export default function Registerpage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };
  const [confirmShown, setConfirmShown] = useState(false);
  const toggleConfirm = (e) => {
    e.preventDefault();
    setConfirmShown(!confirmShown);
  };

  const IconTaggle = ({ Action, Condition }) => {
    return (
      <div onClick={Action}>
        {!Condition ? <EyeInvisibleOutlined /> : <EyeOutlined size={20} />}
      </div>
    );
  };

  const location = useLocation();

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  // const postDetails = (pics) => {
  //   if (
  //     pics ===
  //     "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  //   ) {
  //     return setPicMessage("Please Select an Image");
  //   }
  //   setPicMessage(null);
  //   if (pics.type === "image/jpeg" || pics.type === "image/png") {
  //     const data = new FormData();
  //     data.append("file", pics);
  //     data.append("upload_preset", "notezipper");
  //     data.append("cloud_name", "piyushproj");
  //     fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
  //       method: "post",
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setProfileImage(data.url.toString());
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     return setPicMessage("Please Select an Image");
  //   }
  // };

  useEffect(() => {}, [userInfo]);
  if (userInfo) {
    return <Navigate to={"/mynotes"} state={{ from: location }} replace />;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else dispatch(register(username, email, password, profileImage));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <MainScreen title="REGISTER">
          <div>
            {error && <ErrorMessage variant="error" message={error} />}
            {message && <ErrorMessage variant="error" message={error} />}

            <form className="register" onSubmit={submitHandler}>
              <h1>Signup</h1>
              <Input
                addonBefore="User name"
                type="name"
                value={username}
                placeholder="Enter name"
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <br />
              <Input
                addonBefore="Email"
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <Input
                addonBefore="Password"
                type={!passwordShown ? "password" : "text"}
                addonAfter={
                  <IconTaggle
                    Action={togglePassword}
                    Condition={passwordShown}
                  />
                }
                value={password}
                placeholder="Password"
                autocomplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <Input
                addonBefore="Confirm  "
                type={!confirmShown ? "password" : "text"}
                addonAfter={
                  <IconTaggle Action={toggleConfirm} Condition={confirmShown} />
                }
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )}

              {/* <Form.Group id="pic">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="file"
                  placeholder="Upload Profile Picture"
                />
              </Form.Group> */}
              <br />
              <br />
              <button type="submit">Register</button>
            </form>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              Have an Account ? <Link to="/login">Login</Link>
            </div>
          </div>
        </MainScreen>
      )}
    </>
  );
}
