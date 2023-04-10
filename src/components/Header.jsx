import React, { useState } from "react";
import { Link } from "react-router-dom";
// Item
// Link
import "../css/headernav.css";
import { FaGripLines } from "react-icons/fa";
const callme = () => {
  const bar = document.getElementById("bar");
  const navBar = document.getElementById("nav-bar");

  bar.addEventListener("click", () => {
    navBar.classList.toggle("show");
  });
};

const Header = () => {
  return (
    <>
      <div class="container">
        <div class="logo-section">
          <h1 class="logo">bacephalus numismatic</h1>
          <div class="icon">
            <FaGripLines id="bar" onClick={callme} />
            {/* <i class="fa-thin fa-bars" style="color: #ebe5e5;"></i> */}
          </div>
        </div>
        <div class="nav-bar" id="nav-bar">
          <ul>
            <Link    to="/"  >
              {" "}
              <li>Home</li>
            </Link>
            <hr className="hr border " />
            <Link    to="/archive"  >
              {" "}
              <li>Archives</li>{" "}
            </Link>
            <hr className="hr border " />
            <Link    to="/lots"  >
              {" "}
              <li>Lots</li>{" "}
            </Link>
            <hr className="hr border " />
            <Link    to="/faq"  >
              {" "}
              <li>Faq</li>{" "}
            </Link>
            <hr className="hr border " />
            <Link    to="/Cartpage"  >
              {" "}
              <li>Cart</li>{" "}
            </Link>
            <hr className="hr border " />
            <Link    to="/account"  >
              {" "}
              <li>MY Account</li>{" "}
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
