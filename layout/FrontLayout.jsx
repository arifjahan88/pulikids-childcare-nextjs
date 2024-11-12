import { AntdRegistry } from "@ant-design/nextjs-registry";

const FrontLayout = ({ children }) => {
  return (
    <>
      <AntdRegistry>{children}</AntdRegistry>
    </>
  );
};

export default FrontLayout;
