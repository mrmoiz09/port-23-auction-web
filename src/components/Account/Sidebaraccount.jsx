import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaFilter } from "react-icons/fa";

export const Sidebaraccount = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="w-fit w-custom">
        {/* Mobile Toggle Button */}
        <button className="mobile-toggle-btn" onClick={handleToggle}>
          {showNav ? <FaEyeSlash className="relative" /> : <FaFilter className="relative" />}
        </button>

        {/* Sidebar */}
        <Sidebar
          aria-label="Default sidebar example"
          className={`sidebar${showNav ? " is-open" : ""}`}
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Link to="/accountbid">
                <Sidebar.Item>My Bids</Sidebar.Item>
              </Link>
              <hr className="border-1" />
              <Link to="/accountwatchlist">
                <Sidebar.Item href="#" label="Pro" labelColor="alternative">
                  My Watchlist
                </Sidebar.Item>
              </Link>
              <hr className="border-1" />

              <Link to="/accountinvoices">
                <Sidebar.Item href="#" label="3">
                  My Invoices
                </Sidebar.Item>
              </Link>
              <hr className="border-1" />

              <Link to="/consigmentsaccount">
                <Sidebar.Item>My Consigmets</Sidebar.Item>
              </Link>

              <Link to="/accountapproval">
                <hr className="border-1" />
                <Sidebar.Item href="#">My Approval</Sidebar.Item>
              </Link>

              <hr className="border-1" />

              <Link to="/Profileaccount">
                <Sidebar.Item href="#">My Profile</Sidebar.Item>
              </Link>

              <hr className="border-1" />
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>

      {/* Mobile Styles */}
      <style>
        {`
          .mobile-toggle-btn {
            position: absolute;
            top: 10rem;
            right: 0;
            padding: 10px;
           
            border: none;
            cursor: pointer;
            z-index: 9999;
          }

          .sidebar {
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            height: calc(100% - 60px);
            overflow-y: auto;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            z-index: 9998;
          }

          .sidebar.is-open {
            transform: translateX(0%);
          }

          @media screen and (min-width: 768px) {
            .mobile-toggle-btn {
              display: none;
            }

            .sidebar {
              position: relative;
              top: initial;
              left: initial;
              width: initial;
              height: initial;
              overflow-y: initial;
              transform: initial;
              transition: initial;
              z-index: initial;
            }
          }
        `}
      </style>
    </>
  );
};
