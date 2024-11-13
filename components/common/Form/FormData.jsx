export const UploadFormData = () => {
  return [
    { label: "Title", name: "title", type: "text", required: true },
    { label: "Upload File", name: "upload_file", type: "file", required: true },
  ];
};
