import React from "react";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addNewMessage = () => {
    props.store.dispatch(addNewMessageActionCreator());
  };
  let onMessageChange = (newText) => {
    props.store.dispatch(updateNewMessageTextActionCreator(newText));
  };

  return (
    <Dialogs
      addNewMessage={addNewMessage}
      updateNewMessageText={onMessageChange}
      dialogPage={state.dialogPage}
    />
  );
};

export default DialogsContainer;
