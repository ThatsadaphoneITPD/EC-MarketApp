import React from "react";
export default function ButtonCustom({ children, ...restProps }) {
  return (
    <div className="btn" {...restProps}>
      {children}
    </div>
  );
}
ButtonCustom.LoadMore = function ({ children, ...restProp }) {
  return (
    <button className="btn-gray" {...restProp}>
      {children}
    </button>
  );
};
