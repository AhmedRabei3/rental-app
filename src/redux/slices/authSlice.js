import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    registerMessage: null,
  },
  reducers: {
    login(state, actions) {
      state.user = actions.payload.user;
    },
    logout(state) {
      state.user = null;
      state.registerMessage = null;
      localStorage.clear();
    },
    profile(state, actions) {
      state.user = actions.payload;
    },
    register(state, actions) {
      state.registerMessage = actions.payload;
    },
  },
});
const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authActions, authReducer };
