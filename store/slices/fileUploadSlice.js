import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  previewOpen: false,
  previewImage: '',
  fileList: {},
};

const fileUploadSlice = createSlice({
  name: 'fileUpload',
  initialState,
  reducers: {
    setPreviewOpen: (state, action) => {
      state.previewOpen = action.payload;
    },
    setPreviewImage: (state, action) => {
      state.previewImage = action.payload;
    },
    setFileList: (state, action) => {
      const { name, newFileList } = action.payload;
      state.fileList = {
        ...state.fileList,
        [name]: newFileList,
      };
    },
    resetFileUpload: () => {
      return initialState;
    },
  },
});

export const { setPreviewOpen, setPreviewImage, setFileList, resetFileUpload } =
  fileUploadSlice.actions;

// Selectors
export const selectFileUpload = (state) => state.fileUpload;

export default fileUploadSlice.reducer;