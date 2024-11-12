"use client";
import { store } from "@/store/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import { Provider } from "react-redux";

const FrontLayout = ({ children }) => {
  return (
    <AntdRegistry>
      <SignedOut>
        <section className="min-h-screen flex justify-center items-center">
          <SignIn routing="hash" />
        </section>
      </SignedOut>

      <SignedIn>
        <header className="flex justify-between p-5 shadow-sm border-b">
          <h1 className="font-bold text-xl text-primary">Pulikids Childcare</h1>
          <UserButton showName />
        </header>
        <Provider store={store}>
          <main className="container">{children}</main>
        </Provider>
      </SignedIn>
    </AntdRegistry>
  );
};

export default FrontLayout;
