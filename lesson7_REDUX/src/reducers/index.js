import clicerReducer from "./clickerreduser";
import postReducers from "./post";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    clicer: clicerReducer,
    posts: postReducers,
})
export default rootReducer;