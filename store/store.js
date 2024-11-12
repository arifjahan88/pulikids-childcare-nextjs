import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import baseApi from "./api/baseApi";
import modalReducer from "./slices/modalSlice";
import paginationReducer from "./slices/paginationSlice";
import fileUploadReducer from "./slices/fileUploadSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    modal: modalReducer,
    pagination: paginationReducer,
    fileUpload: fileUploadReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);
