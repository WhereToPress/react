import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
})

const store = createStore(reducers);

export default store;