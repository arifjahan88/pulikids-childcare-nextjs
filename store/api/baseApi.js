import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),

  tagTypes: [],
  endpoints: () => ({}),
});

export default baseApi;
