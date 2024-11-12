import mongoose from "mongoose";

const fileUploadSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxLength: [255, "Title cannot exceed 255 characters"],
    },
    url: {
      type: String,
      required: [true, "URL is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

fileUploadSchema.index({ createdAt: -1 });

const FileUpload = mongoose.models.FileUpload || mongoose.model("FileUpload", fileUploadSchema);

export default FileUpload;
