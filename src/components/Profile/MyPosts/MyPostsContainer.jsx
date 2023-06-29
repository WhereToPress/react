import React from "react";
import MyPosts from "./MyPosts";
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile_reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (newText) => {
      dispatch(updateNewPostTextActionCreator(newText))
    },
    addNewPost: () => {
      dispatch(addNewPostActionCreator())
    },
  }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;
