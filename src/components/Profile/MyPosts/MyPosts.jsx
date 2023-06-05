import style from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import React from "react";

const MyPosts = (props) => {
  let postElement = props.postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addNewPost = () => {
    let textNewPost = newPostElement.current.value;
    props.addNewPost(textNewPost);
    textNewPost = "";
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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
