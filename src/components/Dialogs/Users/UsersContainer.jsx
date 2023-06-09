import Users from "./UsersClassComponent";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../../redux/users_reducer";

let mapStateToProps = (state) => {
  debugger
  return {
    users: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID) => {
      dispatch(unfollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
  }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer;