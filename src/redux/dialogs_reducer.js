const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE });
export const updateNewMessageTextActionCreator = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  currentText: newText,
});

let initialState = {
  dialogData: [
    {
      id: 1,
      name: "Valeria",
      ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRW3Zx0wevThx4eoKM6jov6v-YpNUj8ClbcA&usqp=CAU",
    },
    {
      id: 2,
      name: "Lidia",
      ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutbLNp4R3IOGc1VeQSKFzUJO6D08VqwiHwg&usqp=CAU",
    },
    {
      id: 3,
      name: "Sergey",
      ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7p6AQAKeoe_G4fGB6gyI4RzcGhnPRhaw11g&usqp=CAU",
    },
    {
      id: 4,
      name: "Roman",
      ava: "https://img.freepik.com/premium-vector/it-specialist-at-desk-working-on-laptop-vector-illustration_107173-13303.jpg?w=2000",
    },
    {
      id: 5,
      name: "Valera",
      ava: "https://w7.pngwing.com/pngs/939/901/png-transparent-drawing-reggae-bob-marley-celebrities-computer-wallpaper-monochrome.png",
    },
  ],
  messageData: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Good, thanks!" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = {...state}
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      stateCopy.newMessageText = action.currentText;
      return stateCopy;
    case ADD_NEW_MESSAGE:
      let newMessage = { id: 4, message: state.newMessageText };
      stateCopy.messageData = [...state.messageData]
      stateCopy.messageData.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    default:
      return state;
  }
};

export default dialogsReducer;