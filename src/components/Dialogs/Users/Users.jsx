import React from "react";
import style from "./Users.module.css";
import axios from "axios";
import userHaveNoAvatar from "../../../assets/userHaveNoAvatar.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.setUsers(response.data.items);
    });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let index = 1; index <= pagesCount; index++) {
      pages.push(index)  
    }

    return (
      <div>
        <div className={style.usersPages}>
          {pages.map( p => {
            return <span className={this.props.currentPage === p && style.active }
            onClick = { (event) => {this.onPageChanged(p); }}> {p} </span>
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  className={style.photo}
                  src={
                    u.photos.small == null ? userHaveNoAvatar : u.photos.small
                  }
                  alt={u.id + "_user_photo"}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
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
  }
}

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
