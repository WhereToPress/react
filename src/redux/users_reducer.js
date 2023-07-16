const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
  users: [
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
  ],
  pageSize : 4,
  totalUsersCount : 1,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count }
    }
    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export default usersReducer;
