import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import baseApi from "./api/baseApi";
import modalReducer from "./slices/modalSlice";
import paginationReducer from "./slices/paginationSlice";
import { errorLoggingMiddleware } from "./middleware";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    modal: modalReducer,
    pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, errorLoggingMiddleware),
});

setupListeners(store.dispatch);
