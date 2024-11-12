"use client";
import { handleModal } from "@/store/slices/modalSlice";
import HeaderWithText from "../common/Header/HeaderWithText";
import CustomModal from "../common/Modal/CustomModal";
import { CustomTable } from "../common/Table/CustomTable";
import { useDispatch } from "react-redux";

const UploadPage = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log("Delete", id);
  };

  const handleEdit = (record) => {
    console.log("Edit", record);
    dispatch(handleModal({ open: true, editData: record }));
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
        data={{
          data: [
            {
              _id: 1,
              title: "Arif Jahan",
              pdfUrl: "test.pdf",
              createdAt: "2021-08-17T15:00:00.000Z",
            },
          ],
        }}
        loading={false}
        onDelete={handleDelete}
        onEdit={handleEdit}
        hiddenColumns={["_id"]}
      />
      <CustomModal
        title="Upload File"
        width={600}
        onclose={() => {
          dispatch(handleModal({ open: false }));
        }}
      >
        <h1>testing</h1>
        {/* <CustomForm
          formData={formData}
          onSubmit={onFormSubmit}
          loading={AddNewsCategoryLoading || UpdateLoading}
        /> */}
      </CustomModal>
    </section>
  );
};

export default UploadPage;
