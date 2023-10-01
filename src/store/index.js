import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import commonReducer from "./Reducers";


export const store = configureStore({
    reducer: commonReducer,
    middleware: [thunk]
});