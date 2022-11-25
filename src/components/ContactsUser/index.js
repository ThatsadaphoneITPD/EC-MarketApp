import React, { useState, useEffect } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getListProduct, GetlistUsers } from "../../redux/actions";
import { MdExposureZero } from "react-icons/md";

export default function Contacts({ contacts, changeChat }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(async () => {
    dispatch(GetlistUsers());
  }, [dispatch, userInfo]);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  return (
    <>
      <div className="chatwith">
        <div className="brand">
          <img
            src={
              "https://res.cloudinary.com/dp3zeejct/image/upload/v1663663499/Emagi/Creative_thinking-bro_ekpkf1.png"
            }
            alt="logo"
          />
          <h3>Retailers Chat's List</h3>
        </div>
        <div className="contacts">
          {contacts?.map(
            (user, index) =>
              userInfo?.accountId !== user._id && (
                <div
                  key={user._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, user)}
                >
                  <div className="avatar">
                    <img src={user.profileImage} alt="" />
                  </div>
                  <div className="username">
                    <h3>{user.username}</h3>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="current-user">
          <div className="avatar">
            <img src={userInfo?.avatar} alt="avatar" />
          </div>
          <div className="username">
            <h2>{userInfo?.account}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
