import style from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  let postData = [
    {id: 1, message: "Hello, World!", likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 20}
  ]
  let postElement = postData.map( p => (<Post message={p.message} likesCount={p.likesCount} />))
  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add new post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postElement}
      </div>
    </div>
  );
};

export default MyPosts;
