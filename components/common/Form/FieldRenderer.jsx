import { Input, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { ErrorNotification, SuccessNotification } from "@/hooks/useNotification";

const { Dragger } = Upload;

const FieldRenderer = ({ field, data, setValue }) => {
  const acceptedFileTypes = ".pdf,.txt,.doc,.docx,.csv";
  const props = {
    name: "file",
    multiple: false,
    accept: acceptedFileTypes,
    beforeUpload: (file) => {
      const isLt2M = file.size / 1024 / 1024 < 2;
      const isValidFileType = acceptedFileTypes.includes(`.${file.name.split(".").pop()}`);

      if (!isValidFileType) {
        ErrorNotification("Only PDF, Text, DOC, DOCX, and CSV files are allowed!");
        return Upload.LIST_IGNORE;
      }

      if (!isLt2M) {
        ErrorNotification("File must smaller than 2MB!");
        return Upload.LIST_IGNORE;
      }
      setValue(data.name, file);
      return true;
    },
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        SuccessNotification("File Uploaded Successfully");
      } else if (status === "error") {
        ErrorNotification(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      setValue(data.name, e.dataTransfer.files[0]);
    },
  };

  switch (data.type) {
    case "file": {
      return (
        <>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Upload Pdf File Only</p>
          </Dragger>
        </>
      );
    }

    default:
      return (
        <Input
          {...field}
          placeholder={data.label}
          id={data.name}
          size="large"
          className="w-full"
          type={data.type}
        />
      );
  }
};

export default FieldRenderer;
