import React, { useState } from "react";
import logo from "../../../assest/header-logo.jpg";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="h-12">
            <img src={logo} alt="" className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={"/home"}>Home</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
          <div className="text-primary text-2xl relative">
            <BsFillCartFill></BsFillCartFill>
            <div className="absolute -top-3 -right-3 bg-slate-500 font-medium w-5 text-base rounded-full flex justify-center items-center h-5 text-white">
              0
            </div>
          </div>
          <div onClick={() => setShowMenu((prev) => !prev)}>
            <div className="border-2 text-2xl cursor-pointer rounded-full p-1 border-slate-200 text-primary">
              <FaRegUserCircle></FaRegUserCircle>
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md rounded-md flex flex-col space-y-1">
                <Link
                  to={"/new_product"}
                  className="whitespace-nowrap cursor-pointer"
                >
                  New Product
                </Link>
                <Link
                  to={"/login"}
                  className="whitespace-nowrap cursor-pointer"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
