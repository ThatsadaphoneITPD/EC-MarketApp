import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { ChatContainer, Contacts } from "../../components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getListProduct, GetlistUsers, getMessage } from "../../redux/actions";
import { serviceAPI } from "../../service";

export default function ChatUser() {
  const navigate = useNavigate();
  const socket = useRef();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userList = useSelector((state) => state.userList);
  const { accounts } = userList;

  const [contacts, setContacts] = useState([]);
  const [render, setRedender] = useState(false);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(userInfo);
  useEffect(async () => {
    dispatch(GetlistUsers());
    setContacts(accounts);
  }, [dispatch, userInfo]);
  useEffect(() => {
    if (currentUser) {
      socket.current = io("http://localhost:5000");
      socket.current.emit("add-user", currentUser.accountId);
    }
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
    setRedender(!render);
  };
  return (
    <>
      <div className="ChatUser">
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <div>
              <img
                className="WelcomeChat"
                src="https://media.giphy.com/media/3o6fJ66RKYXJbkQ1RC/giphy.gif"
                alt="send"
              />
            </div>
          ) : (
            <ChatContainer
              currentChat={currentChat}
              socket={socket}
              render={render}
            />
          )}
        </div>
      </div>
    </>
  );
}
