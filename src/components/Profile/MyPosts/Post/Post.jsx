import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg"
        alt="profile_avatar"
      ></img>
      <div>
        <div>{props.message}</div>
        <div>
          <span>like: {props.likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;