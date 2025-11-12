import React from "react";
import { Link, NavLink } from "react-router";
import youtubeLogo from "../assets/youtube_logo_icon.png";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="h-16 flex justify-between gap-2 items-center bg-neutral-800 text-neutral-50 px-5">
      <div className="flex items-center gap-6">
        <NavLink>
          <MdMenu className="size-6" />
        </NavLink>
        <Link to={"/"} className="flex items-center gap-1">
          <img className="h-8 w-8" src={youtubeLogo} alt="" />
          <h1 className="font-semibold">YouTube</h1>
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <input
          placeholder="Search Video Here.."
          className="border border-neutral-100 rounded px-2 py-1.5"
          onChange={(e) => {
            console.log(e.target.value);
            setInputValue(e.target.value);
          }}
        />
        <button>Search</button>
      </div>

      <nav>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Signup</Link>
      </nav>
    </header>
  );
};

export default Navbar;
