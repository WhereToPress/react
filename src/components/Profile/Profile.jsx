import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img
          src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg"
          alt="content-main-img"
        ></img>
      </div>
      <div>
        <img
          className={style.content__ava_img}
          src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg"
        ></img>
        ava + descriprion
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;