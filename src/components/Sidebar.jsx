import React from "react";
import { BiHome } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="h-\[100vh\] w-[40%] bg-[rgb(15,15,15)] text-white">
      <ul>
        <li>
          <NavLink
            to="#"
            className="flex items-center gap-3 p-2 m-2 rounded bg-[rgb(39,39,39)] hover:bg-[rgb(39,39,39)]"
          >
            <BiHome className="size-6" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="flex items-center gap-3 p-2 m-2 rounded  hover:bg-[rgb(39,39,39)]"
          >
            <SiYoutubeshorts className="size-6" />
            <span>Shorts</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="flex items-center gap-3 p-2 m-2 rounded  hover:bg-[rgb(39,39,39)] "
          >
            <MdSubscriptions className="size-6" />
            <span>Subscriptions</span>
          </NavLink>
        </li>
      </ul>
      <hr className="border-[rgb(39,39,39)]" />
    </div>
  );
};

export default Sidebar;
