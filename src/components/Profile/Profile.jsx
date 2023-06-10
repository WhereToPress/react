import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profileData={props.profilePage.profileData} />
      <MyPosts
        postData={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        addNewPost={props.addNewPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
