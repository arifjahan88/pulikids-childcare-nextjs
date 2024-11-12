import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  itemsPerPage: 10,
  searchQuery: "",
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    resetPagination: () => {
      return initialState;
    },
  },
});

export const { setCurrentPage, setItemsPerPage, setSearchQuery, resetPagination } =
  paginationSlice.actions;

// Selectors
export const selectPagination = (state) => state.pagination;

export default paginationSlice.reducer;
