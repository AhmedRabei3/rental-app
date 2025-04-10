import { authActions } from "../slices/authSlice";
import { toast } from "react-toastify";
import api from "../../services/api";

// Login function
export function loginUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await api.post("/auth/login", user);
      if (data) {
        dispatch(authActions.login(data));
        toast.success(data.message);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.messsage);
    }
  };
}
// register a new user function
export function registerUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await api.post("/auth/register", user);
      dispatch(authActions.register(data.message));
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export function logoutUser() {
  return async (dispatch) => {
    dispatch(authActions.logout());
  };
}
