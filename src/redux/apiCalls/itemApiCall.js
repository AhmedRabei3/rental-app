import { toast } from "react-toastify";
import { itemActions } from "../slices/itemSlice";
import api from "../../services/api";

// create item functions
export function createItem(data) {
  return async (dispatch) => {
    try {
      const { data } = await api.post("/item", data);
      dispatch(itemActions.addItem(data));
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// get all items
export function getAllItems(page, price, category, place) {
  return async (dispatch) => {
    try {
      const { data } = await api.get("/item");
      if (data) {
        dispatch(itemActions.setItems(data));
        dispatch(itemActions.setTotalPages(data?.totalPages));
        dispatch(itemActions.setCurrentPage(data?.currentPage));
        dispatch(itemActions.setTotalItems(data));
      }
      toast.success("Items fetched successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// item api call
export function toggleLike(itemId) {
  return async () => {
    try {
      
      const { data } = await api.post(`/item/${itemId}`);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
