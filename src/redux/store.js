import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { itemReducer } from "./slices/itemSlice";
import { notificationReducer } from "./slices/notificationSlice";
import { useReducer } from "react";

const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemReducer,
    notifiaction: notificationReducer,
  },
});

export default store;
