import React from "react";
import MyPosts from "./MyPosts";
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile_reducer";

const MyPostsContainer = (props) => {
  let state = props.store.getState()
  let addNewPost = () => {
    props.store.dispatch(addNewPostActionCreator());
  };

  let onPostChange = (newText) => {
    props.store.dispatch(updateNewPostTextActionCreator(newText));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addNewPost={addNewPost}
      postData={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
