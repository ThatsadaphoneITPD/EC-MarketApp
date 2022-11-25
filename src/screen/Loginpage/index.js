import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";
import { login } from "../../redux/actions/userAction";
import { ErrorMessage, Loading } from "../../components";
import "./index.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {}, [location, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (userInfo) {
    return <Navigate to={"/home"} state={{ from: location }} replace />;
  } else if (error) {
    return <Navigate to=""></Navigate>;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form className="login" onSubmit={submitHandler}>
          <h1>Login</h1>
          <input
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            autocomplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <ErrorMessage variant="error" message={error} />}
          <Row className="py-3">
            <Col>
              New Customer ? <Link to="/register">Register Here</Link>
            </Col>
          </Row>
        </form>
      )}
    </>
  );
}
