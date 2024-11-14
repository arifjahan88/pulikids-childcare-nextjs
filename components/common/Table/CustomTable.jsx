import { Table as AntTable, Button } from "antd";
import { TableHeader } from "./TableHeader";
import { useDispatch } from "react-redux";
import { setCurrentPage, setItemsPerPage, setSearchQuery } from "@/store/slices/paginationSlice";
import { TableActions } from "./TableActions";

const { Column } = AntTable;

export const CustomTable = ({
  data: AllData,
  loading,
  onDelete,
  onEdit,
  hiddenColumns = [],
  actions = { edit: true, delete: true },
  searchable = true,
  pagination = { enabled: true },
}) => {
  const allHiddenColumns = [...hiddenColumns];
  const dispatch = useDispatch();

  //search handler
  const handleSearch = (value) => {
    dispatch(setSearchQuery(value));
  };

  return (
    <section className="bg-white rounded-xl border">
      <TableHeader
        totalItems={AllData?.data?.length}
        onSearch={handleSearch}
        searchable={searchable}
      />

      <AntTable
        showHeader={AllData?.data?.length > 0}
        loading={loading}
        dataSource={AllData?.data}
        rowKey={(record) => record?._id}
        onChange={(pagination) => {
          dispatch(setCurrentPage(pagination?.current));
          dispatch(setItemsPerPage(pagination?.pageSize));
        }}
        scroll={{ x: "max-content" }}
      >
        <Column title="SL" key="sl" width={50} render={(_, __, index) => index + 1} />

        {Object.keys(AllData?.data?.[0] || {}).map((key) => {
          if (allHiddenColumns.includes(key)) return null;

          return (
            <Column
              key={key}
              dataIndex={key}
              title={key}
              width={150}
              render={(value) => {
                if (key === "url") {
                  return (
                    <Button type="primary" onClick={() => window.open(value)}>
                      View File
                    </Button>
                  );
                }

                return value;
              }}
            />
          );
        })}

        <Column
          align="center"
          title="Action"
          key="action"
          width={80}
          render={(_, record) => (
            <TableActions record={record} onEdit={onEdit} onDelete={onDelete} actions={actions} />
          )}
        />
      </AntTable>
    </section>
  );
};
