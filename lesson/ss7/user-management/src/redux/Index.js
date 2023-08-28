import { combineReducers } from "redux";
import userReducer from "../reducer/Reducer";
export const rootReduce = combineReducers({
    userList: userReducer
})