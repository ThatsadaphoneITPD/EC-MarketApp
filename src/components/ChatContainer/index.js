import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage, sendMessage } from "../../redux/actions";
import ChatInput from "../ChatInput";

export default function ChatContainer({ currentChat, socket, render }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const getChat = useSelector((state) => state.getChat);
  const { getMSSG } = getChat;
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (currentChat) {
      dispatch(getMessage(userInfo?.accountId, currentChat._id));
      setMessages(getMSSG);
    }
  }, [currentChat, render]);
  const handleSendMsg = async (msg) => {
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: userInfo?.accountId,
      msg,
    });
    dispatch(sendMessage(userInfo?.accountId, currentChat._id, msg));
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="ChatContainer">
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img src={currentChat.profileImage} alt="" />
          </div>
          <div className="username">
            <h3>{currentChat.username}</h3>
          </div>
        </div>
      </div>
      <div className="chat-messages">
        {messages &&
          messages?.map((message, index) => {
            return (
              <div ref={scrollRef} key={index + 1}>
                <div
                  className={`message ${
                    message.fromSelf ? "sended" : "recieved"
                  }`}
                >
                  <div className="content ">
                    <p>{message.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <ChatInput handleSendMsg={handleSendMsg} />
    </div>
  );
}
