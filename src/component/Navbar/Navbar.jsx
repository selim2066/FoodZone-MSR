import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const links = ["Home", "Menu", "Contact", "About"];

  return (
    <div className="flex justify-center items-center">
      <div className="navbar w-11/12 mx-auto bg-base-100 shadow-sm px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links.map((text, i) => (
                <li key={i}>
                  <a href={`/${text.toLowerCase()}`}>{text}</a>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold text-primary">FoodZone</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((text, i) => (
              <li key={i}>
                <a href={`/${text.toLowerCase()}`}>{text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <a className="btn text-red-600 font-bold px-5">SignUp</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
