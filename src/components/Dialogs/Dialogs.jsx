import React from "react";
import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogsElement = props.dialogPage.dialogData.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava}  key={d.id}/>
  ));

  let messagesElement = props.dialogPage.messageData.map((m) => (
    <Message message={m.message} addNewMessage={props.addNewMessage}  key={m.id}/>
  ));

  let newMessageElement = React.createRef();

  let onAddNewMessage = () => {
    props.addNewMessage();
  };
  let onMessageChange = () => {
    let newText = newMessageElement.current.value;
    props.updateNewMessageText(newText)
    //props.dispatch(updateNewMessageTextActionCreator(newText));
  };

  return (
    <div className={style.dialogs}>
      {/* Dialogs */}
      <div className={style.dialogs__items}>{dialogsElement}</div>
      <div className={style.messages}>{messagesElement}</div>
      <div className={style.newMessageAreaButton} >
        <div>
          <textarea
            id="newMessageTextarea"
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.dialogPage.newMessageText}
          />
        </div>
        <div>
          <button onClick={onAddNewMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;