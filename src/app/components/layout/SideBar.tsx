"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { SiHelpscout, SiSinglestore } from "react-icons/si";
import { MenuContext } from "../../context/MenuContext";

const SideBar = () => {
  const { open,toggle }: any = useContext(MenuContext);

  const clodeSideBarHanlder = () => {
    toggle()
  }
  return (
    <div>
      <aside
        className={`bg-white top-4 left-4 lg:fixed lg:block lg:top-16 lg:left-8 rounded-lg overflow-hidden transition-all duration-200 ${
          open ? "w-60 p-4 block fixed" : "w-0 hidden" 
        } lg:w-60 lg:p-4 z-50 shadow-sm`}
      >
        <ul>
        <li className="flex items-center justify-end lg:hidden">
            <AiOutlineClose className="text-red-300 hover:text-red-800 cursor-pointer" onClick={clodeSideBarHanlder}/>
          </li>

          <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
            <AiOutlineHome className="mr-2" />
            <Link href={"/"} onClick={clodeSideBarHanlder}>Home</Link>
          </li>
          <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
            <GrProjects className="mr-2" />
            <h3 className="flex-1">Projects</h3>
            <FaAngleRight />
          </li>


          <li className="flex flex-col items-start justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
            <div className="w-full flex flex-row justify-start items-center">
            <FaCheck className="mr-2" />
            <h3 className="flex-1">Signular</h3>
            <FaAngleRight />
            </div>
            <ul className="ml-8 mt-4">
              <li className="flex justify-center items-center gap-3">
                <SiSinglestore/>
                <Link href={"/singular/selectbox"}  onClick={clodeSideBarHanlder}>Select Box</Link>
              </li>
            </ul>
          </li>

          <li className="flex flex-col items-start justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
            <div className="w-full flex flex-row justify-start items-center">
            <FaCheckDouble className="mr-2" />
            <h3 className="flex-1">Complex</h3>
            <FaAngleRight />
            </div>
            <ul className="ml-8 mt-4">
              <li className="flex justify-start items-center gap-3 my-1">
                <SiSinglestore/>
                <Link href={"/complex/horizontal-scrollbar"}  onClick={clodeSideBarHanlder}>Ho-Scrollbar</Link>
              </li>
              <li className="flex justify-start items-center gap-3 my-1">
                <SiSinglestore/>
                <Link href={"/complex/tabs"}  onClick={clodeSideBarHanlder}>Tabs</Link>
              </li>
            </ul>
          </li>

          <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
            <SiHelpscout className="mr-2" />
            <Link href={"/aboutus"}  onClick={clodeSideBarHanlder}> About us</Link>
          </li>

          <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
            <FiPhoneCall className="mr-2" />
            <Link href={"/contactus"}  onClick={clodeSideBarHanlder}>Contact us</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
