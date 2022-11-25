import React from "react";
import { Alert } from "antd";

const ErrorMessage = ({ variant, ...restProp }) => {
  return (
    <Alert
      type={variant}
      // message={children}
      {...restProp}
      style={{ fontSize: 20 }}
      showIcon
    />
  );
};

export default ErrorMessage;
