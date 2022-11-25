import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Picker from "emoji-picker-react";
import { Popover } from "antd";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setMsg(msg + emoji);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };
  return (
    <div className="ChatInput">
      <div className="button-container">
        <div className="emoji">
          <Popover
            placement="topLeft"
            title={null}
            content={<Picker onEmojiClick={addEmoji} />}
            trigger="click"
          >
            <BsEmojiSmileFill />
          </Popover>
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
}
