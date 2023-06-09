import React from "react";
import style from "./Users.module.css";
import axios from 'axios';
import userNoHaveAvatar from '../../../assets/userNoHaveAvatar.jpg'

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then (response => {
        props.setUsers ( response.data.items );
      });
    }
  }

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img
                className={style.photo}
                src={u.photos.small == null ? userNoHaveAvatar : u.photos.small}
                alt={ u.id + "_user_photo" }
              />
            </div>
            <div>
              {u.followed 
              ? ( <button onClick={() => { props.unfollow(u.id); }} >Unfollow</button> ) 
              : ( <button onClick={() => { props.follow(u.id); }} >Follow</button> )
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              {/* <div>{u.status}</div> */}
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;



    // {
    //   id: 1,
    //   photoUrl:
    //     "https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg",
    //   followed: true,
    //   fullName: "Mak",
    //   status: "I'm a big boss!",
    //   location: { country: "Belarus", city: "Mogilev" },
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRW3Zx0wevThx4eoKM6jov6v-YpNUj8ClbcA&usqp=CAU",
    //   followed: false,
    //   fullName: "Valeria",
    //   status: "I'm a boss!",
    //   location: { country: "Belarus", city: "Mogilev" },
    // },
    // {
    //   id: 3,
    //   photoUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutbLNp4R3IOGc1VeQSKFzUJO6D08VqwiHwg&usqp=CAU",
    //   followed: true,
    //   fullName: "Lidia",
    //   status: "I'm grandma of the big boss!",
    //   location: { country: "Belarus", city: "Orsha" },
    // },