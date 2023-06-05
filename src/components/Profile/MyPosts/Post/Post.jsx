import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"
        alt="post_avatar"
      ></img>
      <div>{props.message}</div>
      <div>
        <span>like: {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;