"use client";
import { handleModal } from "@/store/slices/modalSlice";
import HeaderWithText from "../common/Header/HeaderWithText";
import CustomModal from "../common/Modal/CustomModal";
import { CustomTable } from "../common/Table/CustomTable";
import { useDispatch } from "react-redux";
import CustomForm from "../common/Form/CustomForm";
import { UploadFormData } from "../common/Form/FormData";
import {
  useDeleteFileMutation,
  useGetFilesQuery,
  useUpdateFileMutation,
  useUploadFileMutation,
} from "@/store/api/endpoints/upload";
import { SuccessNotification } from "@/hooks/useNotification";

const UploadPage = () => {
  const dispatch = useDispatch();
  const formData = UploadFormData();

  //Api call
  const [uploadFile, { isLoading: UploadLoading }] = useUploadFileMutation();
  const { data: AllData, isFetching: GetDataLoading } = useGetFilesQuery();
  const [DeleteFile] = useDeleteFileMutation();
  const [UpdateFile, { isLoading: UpdateLoading }] = useUpdateFileMutation();

  const handleDelete = async (id) => {
    const res = await DeleteFile(id);
    if (res?.data?.success) {
      SuccessNotification(res?.data?.message);
    }
  };

  const handleEdit = (record) => {
    dispatch(handleModal({ open: true, editData: record }));
  };

  const onFormSubmit = async (data) => {
    const sendData = new FormData();
    sendData.append("title", data.title);
    data.upload_file && sendData.append("upload_file", data.upload_file);

    const apiCall = data?._id
      ? await UpdateFile({
          id: data?._id,
          data: sendData,
        })
      : await uploadFile(sendData);

    if (apiCall?.data?.success) {
      SuccessNotification(apiCall?.data?.message);
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
        <CustomForm
          formData={formData}
          onSubmit={onFormSubmit}
          loading={UploadLoading || UpdateLoading}
        />
      </CustomModal>
    </section>
  );
};

export default UploadPage;
