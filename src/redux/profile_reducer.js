const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addNewPostActionCreator = () => ({type: ADD_NEW_POST});
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, currentText: newText});

const profileReducer = (action, state) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.currentText;
      return state;
    case ADD_NEW_POST:
      let newPost = {id: 3, message: state.newPostText, likesCount: 100};
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    default:
      return state;
  };
};

export default profileReducer;
