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
      <div className={style.posts}>
        My posts
        <div>New post</div>
        <div>
          <div className={style.item}>post 1</div>
          <div className={style.item}>post 2</div>
          <div className={style.item}>post 3</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
