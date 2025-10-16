import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const links = ["Home", "Menu", "Contact", "About"];

  return (
    <div className="flex justify-center items-center mt-5 sticky top-0 z-50 bg-base-100 shadow-md">
      <div className="navbar w-11/12 mx-auto bg-base-100shadow-sm px-6">
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
                  <NavLink href={`/${text.toLowerCase()}`}>{text}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* <a className="btn btn-ghost  font-bold text-primary border-none shadow-none text-2xl">
            FoodZone
          </a> */}
          <Link to="/" className="btn btn-ghost  font-bold text-primary border-none shadow-none text-2xl" >FoodZone</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((text, i) => (
              <li key={i}>
                <NavLink to="/" href={`/${text.toLowerCase()}`}>{text}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end flex gap-4 items-center">
          <div>
            <img src={assets.basket_icon} alt="" />
          </div>
          <div>
            <img src={assets.search_icon} alt="" />
          </div>
          {/* <a className="btn text-red-600 font-bold px-5 rounded-3xl hover:bg-amber-100 transition-colors duration-500 ease-in-out">
            SignUp
          </a> */}
          <Link to="/auth/login" className="btn text-red-600 font-bold px-5 rounded-3xl hover:bg-amber-100 transition-colors duration-500 ease-in-out">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
