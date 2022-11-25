import React from "react";
import { useDispatch } from "react-redux";
import { BsBagFill, BsBagDash } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { TbMinusVertical } from "react-icons/tb";
import { FiMinus } from "react-icons/fi";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "../../redux/actions";

export default function Cart({
  carts,
  imgWidth,
  imhHeight,
  trheight,
  optionOff,
}) {
  const dispatch = useDispatch();
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(carts).forEach(function (item) {
    TotalCart += carts[item].quantity * carts[item].price;
    ListCart.push(carts[item]);
  });
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }
  const IncreaseItem = (key) => {
    dispatch(IncreaseQuantity(key));
  };
  const DecreaseItem = (key) => {
    dispatch(DecreaseQuantity(key));
  };
  const DeleteItem = (key) => {
    dispatch(DeleteCart(key));
  };
  return (
    <div>
      <table className="tableCart table-style">
        <tbody>
          <div style={{ height: trheight, overflow: "auto" }}>
            <div>
              <BsBagFill /> | {ListCart.length} Items
            </div>
            {ListCart.map((item, key) => {
              return (
                <tr key={key} style={{ overflow: "auto" }}>
                  <td>
                    <img
                      src={item.image}
                      style={{ width: imgWidth, height: imhHeight }}
                    />
                  </td>
                  <td>
                    <span>{item.name}</span>
                    <br />
                    <span>Price: {item.price}</span>
                    <br />
                    <spam>$ {TotalPrice(item.price, item.quantity)}</spam>
                    <span style={{ margin: "0 7px 0 7px" }}>|</span>
                    <span>QTY: {item.quantity}</span>
                    <br />
                    {optionOff == true && (
                      <>
                        <span onClick={() => DecreaseItem(key)}>
                          <FiMinus class="itemCartIcon" />
                        </span>
                        <TbMinusVertical fontSize="1rem" />
                        <span onClick={() => IncreaseItem(key)}>
                          <IoMdAdd class="itemCartIcon" />
                        </span>
                      </>
                    )}
                  </td>
                  {optionOff == true && (
                    <td>
                      <BsBagDash
                        class="itemCartRemove"
                        fontSize="1.5em"
                        onClick={() => DeleteItem(key)}
                      />
                    </td>
                  )}
                </tr>
              );
            })}
            {ListCart == 0 && (
              <tr className="textCart">
                <td>Empty Cart</td>
              </tr>
            )}
          </div>
        </tbody>
        <div>
          <tr>
            <td>Total Carts</td>

            <td>{Number(TotalCart).toLocaleString("en-US")} $</td>
          </tr>
        </div>
      </table>
    </div>
  );
}
