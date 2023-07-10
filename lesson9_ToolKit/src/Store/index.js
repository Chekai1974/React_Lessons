import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slices/ToDoSlice";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
},
composeWithDevTools()
)                                                  