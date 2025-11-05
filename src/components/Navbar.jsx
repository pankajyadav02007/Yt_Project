import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="h-16 flex justify-between gap-2 items-center bg-neutral-800 text-neutral-50 px-5">
      <h2>MyTUBE</h2>
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
      </nav>
    </header>
  );
};

export default Navbar;
