import baseApi from "../baseApi";

export const uploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation({
      query: (data) => ({
        url: "/upload",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["upload"],
    }),

    getFiles: builder.query({
      query: () => ({
        url: "/upload",
        method: "GET",
      }),
      providesTags: ["upload"],
    }),

    deleteFile: builder.mutation({
      query: (id) => ({
        url: `/upload/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["upload"],
    }),
  }),
});

export const { useUploadFileMutation, useGetFilesQuery, useDeleteFileMutation } = uploadApi;
