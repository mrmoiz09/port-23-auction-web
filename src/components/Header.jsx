import React, { useState } from "react";
import { Link } from "react-router-dom";
// Item
// Link
import "../css/headernav.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="container">
        <div>
            <h1 className="logo">bacephalus numismatic</h1>
        </div>
        <div class="nav-bar">
            <ul>
                <li>Home</li>
                <hr className=" border-2 h-6 opacity-25"/>
                <li>Archives</li>
                <hr className=" border-2 h-6 opacity-25"/>
                <li>Lots</li>
                <hr className=" border-2 h-6 opacity-25"/>
                <li>faq</li>
                <hr className=" border-2 h-6 opacity-25"/>
                <li>Cart</li>
                <hr  className=" border-2 h-6 opacity-25"/>
                <li>My Account</li>
            </ul>
        </div>
    </div>


    </>
  );
};

export default Header;
