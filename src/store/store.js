import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import itemReducer from "../features/updatingItemSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        item: itemReducer,
    }
})