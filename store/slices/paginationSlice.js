import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    resetPagination: () => {
      return initialState;
    },
  },
});

export const { setSearchQuery, resetPagination } = paginationSlice.actions;

// Selectors
export const selectPagination = (state) => state.pagination;

export default paginationSlice.reducer;
