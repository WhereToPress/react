import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogsElement = props.dialogPage.dialogData.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));

  let messagesElement = props.dialogPage.messageData.map((m) => (
    <Message message={m.message} addNewMessage={props.addNewMessage} />
  ));

  let newMessageElement = React.createRef();

  let addNewMessage = () => {
    let action = {type: "ADD-NEW-MESSAGE"}
    props.dispatch(action);
    //props.addNewMessage();
  };
  let onMessageChange = () => {
    let newText = newMessageElement.current.value;
    let action = {type: "UPDATE-NEW-MESSAGE-TEXT", currentText: newText}
    props.dispatch(action)
    //props.updateNewMessageText(newText);
  };

  return (
    <div className={style.dialogs}>
      {/* Dialogs */}
      <div className={style.dialogs__items}>{dialogsElement}</div>
      <div className={style.messages}>{messagesElement}</div>
      <div>
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.dialogPage.newMessageText}
        />
      </div>
      <div>
        <button onClick={addNewMessage}>Send message</button>
      </div>
    </div>
  );
};

export default Dialogs;
