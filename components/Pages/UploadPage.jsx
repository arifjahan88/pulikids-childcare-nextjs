"use client";
import HeaderWithText from "../common/Header/HeaderWithText";
import { CustomTable } from "../common/Table/CustomTable";

const UploadPage = () => {
  const handleDelete = (id) => {
    console.log("Delete", id);
  };

  const handleEdit = (record) => {
    console.log("Edit", record);
  };
  return (
    <section className="py-5">
      <HeaderWithText label="Upload" />
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
    </section>
  );
};

export default UploadPage;
