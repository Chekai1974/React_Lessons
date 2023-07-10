import { combineReducers  } from "redux"
import { postReducer } from "./postReducer"
import { newPostsReducer } from "./newPostReducer";

const rootReducer = combineReducers({
    postReducer,
    newPostsReducer,
})
export default rootReducer;