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
      <Post />
    </div>
  );
};

export default MyPosts;
