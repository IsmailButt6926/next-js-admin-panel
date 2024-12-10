"use client"
import React, { useContext } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { MenuContext } from "../../context/MenuContext";


const MainLayout = ({ children }: any) => {
  const { open }: any = useContext(MenuContext);
  return (
    <div className="bg-green-200 min-h-screen">
        <SideBar/>

      <div className={`${open ? " max-lg:blur-xl" : "blur-0"}`}>
      <Header />
        <main className="lg:ml-[280px]">{children}</main>
      </div>
       
    </div>
  );
};

export default MainLayout;  
