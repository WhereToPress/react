import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img className={style.main__img}
          src="https://blog.hubspot.com/hs-fs/hub/53/file-2421972586-png/00-Blog_Thinkstock_Images/social-content-data.png?width=595&height=400&name=social-content-data.png"
          alt="content-main-img"
        ></img>
      </div>
      <div className={style.descriptionBlock}>
        <img
          className={style.content__ava_img}
          src="https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg"
          alt="profile_avatar"
        ></img>
        ava + descriprion
      </div>
    </div>
  );
};

export default ProfileInfo;
