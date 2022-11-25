import React, { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
export default function DropdownMenu({ menu, event }) {
  const [openMenu, setOpenMenu] = useState(false);
  const setClassNames = (num) => {
    const classArr = ["m-subitem"];
    if (openMenu) classArr.push(`open-${num}`);
    return classArr.join(" ");
  };
  //   const actionCheck = () => {
  //     console.log("Oke");
  //   };
  //   let menu = [
  //     {
  //       icon: "Go",
  //       colortext: "green",
  //       bgc: "red",
  //       action: actionCheck,
  //     },
  //     {
  //       icon: "Del",
  //       colortext: "red",
  //       bgc: "green",
  //       action: actionCheck,
  //     },
  //     {
  //       icon: "Del",
  //       colortext: "red",
  //       bgc: "green",
  //       action: actionCheck,
  //     },
  //   ];

  return (
    <div className="Menu">
      <div
        key={233}
        className={"m-item m-logo"}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <BiRightArrow size={20} className={`icon ${openMenu && "open"}`} />
      </div>
      {menu ? (
        menu.map((i, index) => (
          <div
            key={index - 1}
            style={{ color: i.colortext, backgroundColor: i.bgc }}
            className={setClassNames(1 + index)}
            onClick={() => {
              i.action(event);
            }}
          >
            {i.icon}
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
