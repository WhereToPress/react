import React from "react";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: () => {
      dispatch(addNewMessageActionCreator());
    },
    updateNewMessageText: (newText) => {
      dispatch(updateNewMessageTextActionCreator(newText));
    }
  }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;
