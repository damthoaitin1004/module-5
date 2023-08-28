import { combineReducers } from "redux";
import postsReducer from "../reducer/Reducer";
const rootReducer = combineReducers({
    posts: postsReducer,
});
export default rootReducer;