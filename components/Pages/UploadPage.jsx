"use client";
import { handleModal } from "@/store/slices/modalSlice";
import HeaderWithText from "../common/Header/HeaderWithText";
import CustomModal from "../common/Modal/CustomModal";
import { CustomTable } from "../common/Table/CustomTable";
import { useDispatch } from "react-redux";
import CustomForm from "../common/Form/CustomForm";
import { UploadFormData } from "../common/Form/FormData";
import { useGetFilesQuery, useUploadFileMutation } from "@/store/api/endpoints/upload";
import { SuccessNotification } from "@/hooks/useNotification";

const UploadPage = () => {
  const dispatch = useDispatch();
  const formData = UploadFormData();

  //Api call
  const [uploadFile, { isLoading: UploadLoading }] = useUploadFileMutation();
  const { data: AllData, isLoading: GetDataLoading } = useGetFilesQuery();

  const handleDelete = (id) => {
    console.log("Delete", id);
  };

  const handleEdit = (record) => {
    console.log("Edit", record);
    dispatch(handleModal({ open: true, editData: record }));
  };

  const onFormSubmit = async (data) => {
    const sendData = new FormData();
    sendData.append("title", data.title);
    sendData.append("upload_file", data.upload_file);

    const res = await uploadFile(sendData);
    if (res?.data?.success) {
      SuccessNotification(res?.data?.message);
      dispatch(handleModal({ open: false }));
    }
  };
  return (
    <section className="py-5">
      <HeaderWithText
        label="Upload"
        onclick={() => {
          dispatch(handleModal({ open: true }));
        }}
      />
      <CustomTable
        data={AllData}
        loading={GetDataLoading}
        onDelete={handleDelete}
        onEdit={handleEdit}
        hiddenColumns={["_id", "createdAt", "updatedAt"]}
      />
      <CustomModal
        title="Upload File"
        width={600}
        onclose={() => {
          dispatch(handleModal({ open: false }));
        }}
      >
        <CustomForm formData={formData} onSubmit={onFormSubmit} loading={UploadLoading} />
      </CustomModal>
    </section>
  );
};

export default UploadPage;
