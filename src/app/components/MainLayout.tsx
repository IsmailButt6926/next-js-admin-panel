import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const MainLayout = ({ children }: any) => {
  return (
    <div className="bg-gray-200 w-screen min-h-screen">
      <Header />
      <div className="flex justify-start items-start">
        <SideBar/>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
