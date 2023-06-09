import style from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
import React from "react";

const MyPosts = (props) => {
  let postElement = props.postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount}  key={p.id}/>
  ));

  let newPostElement = React.createRef();

  let onAddNewPost = () => {
    props.addNewPost();
    //props.dispatch(addNewPostActionCreator());
  };

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    props.updateNewPostText(newText)
    //props.dispatch(updateNewPostTextActionCreator(newText));
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            id="newPostTextarea"
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText} 
          />
        </div>
        <div>
          <button onClick={onAddNewPost}>Add new post</button>
        </div>
      </div>
      <div className={style.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
