import React from "react";
import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";

export const Sidebaraccount = () => {
  return (
    <>
      <div className="w-fit">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Link to="/accountbid">
                <Sidebar.Item>My Bids</Sidebar.Item>
              </Link>
              <hr className="border-1" />
              <Link to="/accountwatchlist">
                {" "}
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
                {" "}
                <Sidebar.Item>My Consigmets</Sidebar.Item>
              </Link>

              <Link to="/accountapproval">
                {" "}
                <hr className="border-1" />
                <Sidebar.Item href="#">My Approval</Sidebar.Item>
              </Link>

              <hr className="border-1" />

              <Link to="/Profileaccount">
                {" "}
                <Sidebar.Item href="#">My Profile</Sidebar.Item>
              </Link>

              <hr className="border-1" />
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
};
