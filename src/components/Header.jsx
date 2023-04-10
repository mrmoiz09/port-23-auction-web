import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/headernav.css";
import { FaGripLines, FaTimes } from "react-icons/fa";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setShowNav(width > 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="container custom-container">
        <div className="logo-section">
          <h1 className="logo">bacephalus numismatic</h1>
          <div className="">
            {showNav ? (
              <FaTimes
                className="lg:hidden text-white iconss"
                onClick={handleToggle}
              />
            ) : (
              <FaGripLines
                className="lg:hidden text-white iconss"
                onClick={handleToggle}
              />
            )}
          </div>
        </div>
        <div
          className={showNav ? "nav-bar show" : "nav-bar"}
          id="nav-bar"
        >
          <ul>
            <Link to="/">
              <li className="li li-links" onClick={handleToggle}>
                Home
              </li>
            </Link>
            <hr className="hr border" />
            <Link to="/archive">
              <li className="li li-links" onClick={handleToggle}>
                Archives
              </li>
            </Link>
            <hr className="hr border" />
            <Link to="/lots">
              <li className="li li-links" onClick={handleToggle}>
                Lots
              </li>
            </Link>
            <hr className="hr border" />
            <Link to="/faq">
              <li className="li li-links" onClick={handleToggle}>
                Faq
              </li>
            </Link>
            <hr className="hr border" />
            <Link to="/Cartpage">
              <li className="li li-links" onClick={handleToggle}>
                Cart
              </li>
            </Link>
            <hr className="hr border" />
            <Link to="/account">
              <li className="li li-links" onClick={handleToggle}>
                MY Account
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
