import style from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div className={style.posts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add new post</button>
      </div>
      <Post message="Hello, World!" likesCount="15"/>
      <Post message="It's my first post" likesCount="20"/>
    </div>
  );
};

export default MyPosts;
