const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });
export const updateNewMessageTextActionCreator = (newText) => ({type: UPDATE_NEW_MESSAGE_TEXT, currentText: newText});

const dialogsReducer = (action, state) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.currentText;
      return state;
    case ADD_NEW_MESSAGE:
      let newMessage = {id: 4, message: state.newMessageText};
      state.messageData.push(newMessage);
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;