import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    totalPages: 1,
    currentPage: 1,
    totalItems: 0,
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateItem(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    setItems(state, action) {
      state.items = action.payload.items;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload.totalPages;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload.currentPage;
    },
    setTotalItems(state, action) {
      state.totalItems = action.payload.totalItems;
    },
  },
});

const itemActions = itemSlice.actions;
const itemReducer = itemSlice.reducer;

export { itemActions, itemReducer };
