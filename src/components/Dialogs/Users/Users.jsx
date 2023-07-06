import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
  // if (props.users.length === 0) {
  //   debugger
  //   props.setUsers ( [
  //     {
  //       id: 1,
  //       photoUrl:
  //         "https://funkylife.in/wp-content/uploads/2023/03/good-morning-image-531.jpg",
  //       followed: true,
  //       fullName: "Mak",
  //       status: "I'm a big boss!",
  //       location: { country: "Belarus", city: "Mogilev" },
  //     },
  //     {
  //       id: 2,
  //       photoUrl:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRW3Zx0wevThx4eoKM6jov6v-YpNUj8ClbcA&usqp=CAU",
  //       followed: false,
  //       fullName: "Valeria",
  //       status: "I'm a boss!",
  //       location: { country: "Belarus", city: "Mogilev" },
  //     },
  //     {
  //       id: 3,
  //       photoUrl:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutbLNp4R3IOGc1VeQSKFzUJO6D08VqwiHwg&usqp=CAU",
  //       followed: true,
  //       fullName: "Lidia",
  //       status: "I'm grandma of the big boss!",
  //       location: { country: "Belarus", city: "Orsha" },
  //     },
  //   ] );
    
  // }
  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img
                className={style.photo}
                src={u.photoUrl}
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
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;