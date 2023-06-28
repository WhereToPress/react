const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  currentText: newText,
});

let initialState = {
  profileData: {
    id: 0,
    name: "Mak",
    ava: "https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg",
  },

  postData: [
    { id: 1, message: "It's my first post", likesCount: 20 },
    { id: 2, message: "Hello, World!", likesCount: 15 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = {...state}
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      stateCopy.newPostText = action.currentText;
      return stateCopy;
    case ADD_NEW_POST:
      let newPost = { id: 3, message: state.newPostText, likesCount: 100 };
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    default:
      return state;
  }
};

export default profileReducer;
