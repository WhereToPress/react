import style from "./Message.module.css";
import React from "react";

const Message = (props) => {
  return (
    <div>
      <div className={style.message}>{props.message}</div>
    </div>
  );
};

export default Message;
