import { AntdRegistry } from "@ant-design/nextjs-registry";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";

const FrontLayout = ({ children }) => {
  return (
    <AntdRegistry>
      <SignedOut>
        <main className="min-h-screen flex justify-center items-center">
          <SignIn routing="hash" />
        </main>
      </SignedOut>

      <SignedIn>
        <header className="flex justify-between p-5 bg-orange-100">
          <h1 className="font-bold text-xl text-teal-700">Pulikids Childcare</h1>
          <UserButton showName />
        </header>
        {children}
      </SignedIn>
    </AntdRegistry>
  );
};

export default FrontLayout;
