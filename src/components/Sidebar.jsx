import React from "react";
import { BiHome } from "react-icons/bi";
import { FaSubscript } from "react-icons/fa6";
import { GiShorts } from "react-icons/gi";
import { SiShortcut } from "react-icons/si";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="h-[100vh] w-[40%] bg-black text-white">
      <ul>
        <li>
          <NavLink
            to="#"
            className="flex gap-3 p-2 m-2 bg-gray-800 hover:bg-red-900"
          >
            <BiHome className="size-7" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="flex gap-3 p-2 m-2 bg-gray-800 hover:bg-red-900"
          >
            <SiShortcut className="size-5" />
            <span>Shorts</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="flex gap-3 p-2 m-2 bg-gray-800 hover:bg-red-900"
          >
            <FaSubscript className="size-7" />
            <span>Subscribe</span>
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
