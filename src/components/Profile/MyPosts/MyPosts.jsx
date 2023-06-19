import style from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import React from "react";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";

const MyPosts = (props) => {
  let postElement = props.postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addNewPost = () => {
    props.dispatch(addNewPostActionCreator());
  };

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(newText));
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addNewPost}>Add new post</button>
        </div>
      </div>
      <div className={style.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
