import { selectModal } from "@/store/slices/modalSlice";
import { useSelector } from "react-redux";

export const UploadFormData = () => {
  const { editData } = useSelector(selectModal);
  return [
    { label: "Title", name: "title", type: "text", required: true },
    { label: "Upload File", name: "upload_file", type: "file", required: !editData },
  ];
};
