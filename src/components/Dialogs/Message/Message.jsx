import style from "./Message.module.css";
import React from "react";

const Message = (props) => {
  let newMessageElement = React.createRef();

  let sendNewMessage = () => {
    let textNewMessage = newMessageElement.current.value;
    alert(textNewMessage);
  };

  return (
    <div>
      <div className={style.message}>{props.message}</div>
      <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <div>
        <button onClick={sendNewMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Message;
