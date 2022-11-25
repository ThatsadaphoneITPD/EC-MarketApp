import React from "react";
import { SearchOutlined } from "@ant-design/icons";

export default function Search({ valueInput, handler, child }) {
  return (
    <div class="search">
      <div class="search__icon">
        <SearchOutlined name="search"></SearchOutlined>
      </div>
      <input
        type="text"
        value={valueInput}
        onChange={handler}
        class="search__input"
        placeholder="Search..."
      >
        {child}
      </input>
    </div>
  );
}
