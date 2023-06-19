import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs_reducer";

const Dialogs = (props) => {
  let dialogsElement = props.dialogPage.dialogData.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ));

  let messagesElement = props.dialogPage.messageData.map((m) => (
    <Message message={m.message} addNewMessage={props.addNewMessage} />
  ));

  let newMessageElement = React.createRef();

  let addNewMessage = () => {
    props.dispatch(addNewMessageActionCreator());
  };
  let onMessageChange = () => {
    let newText = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(newText));
  };

  return (
    <div className={style.dialogs}>
      {/* Dialogs */}
      <div className={style.dialogs__items}>{dialogsElement}</div>
      <div className={style.messages}>{messagesElement}</div>
      <div>
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
    </div>
  );
};

export default Dialogs;
