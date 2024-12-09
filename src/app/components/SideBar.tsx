"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { SiHelpscout } from "react-icons/si";
import { MenuContext } from "../context/MenuContext";

const SideBar = () => {
  const { open }: any = useContext(MenuContext);
  return (
    <div>
      <aside
        className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${
          open ? "w-60 p-4" : "w-0"
        } lg:w-60 lg:p-4`}
      >
        <ul>
          <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
            <AiOutlineHome className="mr-2" />
            <Link href={"/"}>Home</Link>
          </li>
          <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
            <GrProjects className="mr-2" />
            <h3 className="flex-1">Projects</h3>
            <FaAngleRight />
          </li>
          <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
            <FaCheck className="mr-2" />
            <h3 className="flex-1">Signule</h3>
            <FaAngleRight />
          </li>

          <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
            <FaCheckDouble className="mr-2" />
            <h3 className="flex-1">Complex</h3>
            <FaAngleRight />
          </li>

          <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
            <SiHelpscout className="mr-2" />
            <Link href={"/about-us"}>About us</Link>
          </li>

          <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
            <FiPhoneCall className="mr-2" />
            <Link href={"/contactus"}>Contact us</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
