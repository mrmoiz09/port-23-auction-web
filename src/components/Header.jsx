import React, { useState } from "react";
import { Link } from "react-router-dom";
// Item
// Link
import "../css/nav.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#2E0D23]  pad sm:p-[auto]">
      <h1 className="text-[#b19676] text-2xl uppercase font-medium tracking-wider">
        bacephalus numismatic
      </h1>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex -mr-2 sm:hidden">
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-700 focus:outline-none focus:bg-purple-700 focus:text-white transition duration-150 ease-in-out"
            >
              {isOpen ? (
                <svg
                  className="block h-6 w-6 absolute right-0"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6 absolute right-0"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <ul className="flex items-center gap-8 text-white text-lg font-medium list-none font-semibold">
              <Link to="/">
                {" "}
                <li className="bord-r">Home </li>
              </Link>
              <Link to="/archive">
                {" "}
                <li>Archive </li>
              </Link>
              <Link to="/lots">
                {" "}
                <li>Lots</li>
              </Link>
              <Link to="/faq">
                {" "}
                <li>FAQ</li>
              </Link>
              <Link to="/cartpage">
                {" "}
                <li>Cart</li>
              </Link>
              <Link to="/account">
                {" "}
                <li>My Account</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <ul className="mt-2 py-3 px-2 text-center text-lg font-medium list-none font-semibold flex flex-col gap-1">
<Link to="/">
                {" "}
                <li className="bord-r">Home </li>
              </Link>
              <Link to="/archive">
                {" "}
                <li>Archive </li>
              </Link>
              <Link to="/lots">
                {" "}
                <li>Lots</li>
              </Link>
              <Link to="/faq">
                {" "}
                <li>FAQ</li>
              </Link>
              <Link to="/cartpage">
                {" "}
                <li>Cart</li>
              </Link>
              <Link to="/account">
                {" "}
                <li>My Account</li>
              </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
