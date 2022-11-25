import React from "react";
import { Button, Row } from "antd";
import { Link } from "react-router-dom";
import "./_landing.scss";
const Landing = () => {
  return (
    <div className="main">
      <Row>
        <div className="intro-text">
          <div>
            <h1 className="title">Welcome to ECmart</h1>
            <p className="subtitle">
              Global retail Store for Shopping and trading .
            </p>
          </div>
          <div className="buttonContainer">
            <Button type="primary" shape="round" size={"large"}>
              <Link to="/login">Login</Link>
            </Button>

            <Button type="primary" shape="round" size={"large"}>
              <Link to="/register">Sign-up</Link>
            </Button>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Landing;
