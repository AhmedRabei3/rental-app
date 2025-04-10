import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",

  initialState: {
    notification: [],
  },

  reducers: {
    setNotification(state, action) {
      state.notification = action.payload;
    },
    addNotification(state, action) {
      state.notification = [...state.notification, action.payload];
    },
    removeNotification(state, action) {
      state.notification = state.notification.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

const notificationActions = notificationSlice.actions;
const notificationReducer = notificationSlice.reducer;
export { notificationActions, notificationReducer };
