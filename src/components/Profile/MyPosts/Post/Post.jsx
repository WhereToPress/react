import style from "./Post.module.css";

const Post = () => {
  return (
    <div className={style.item}>
      <img
        src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
        alt="post_avatar"
      ></img>
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;