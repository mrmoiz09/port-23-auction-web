import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { FaEyeSlash, FaFilter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export const Sidebaraccount = () => {
  const navigate = useNavigate();

  const handlebid = () => {
    navigate(`/accountbid`);
  };
  const handlewatchlist =()=>{
  navigate(`/accountwatchlist`)
}
const navigateinvoice=() =>{
navigate(`/accountinvoices`)
}
const navigateconsigments =()=>{
  navigate(`/consigmentsaccount`)
}
const accountapproval =()=>{
  navigate(`/accountapproval`)
}
const Profileroute=()=>{
  navigate(`/Profileaccount`)
}
  return (
    <>
      <div className="w-fit w-custom">
        {/* Mobile Toggle Button */}
       

        {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          aria-label=""
          className="sidebar"
          >
          <Sidebar.Items>
            <Sidebar.ItemGroup className="flex lg:flex-col flex-row" >
              <Link to="/accountbid" className="">
                <Sidebar.Item  >My Bids</Sidebar.Item>
              </Link>
            <hr className="border-1 hidden lg:block" />
              <Link to="/accountwatchlist ">
                <Sidebar.Item>My Watchlist</Sidebar.Item>
              </Link>
            <hr className="border-1 hidden lg:block" />

              <Link to="/accountinvoices">
                <Sidebar.Item>My Invoices</Sidebar.Item>
              </Link>
            <hr className="border-1 hidden lg:block" />

              <Link to="/consigmentsaccount">
                <Sidebar.Item>My Consignments</Sidebar.Item>
              </Link>

              <Link to="/accountapproval">
              <hr className="border-1 hidden lg:block" />
                <Sidebar.Item>My Approval</Sidebar.Item>
              </Link>

            <hr className="border-1 hidden lg:block" />

              <Link to="/Profileaccount">
                <Sidebar.Item>My Profile</Sidebar.Item>
              </Link>

              <hr className="border-1 hidden lg:block" />
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
        </div>    
      </div>


<div className="lg:hidden block  h-[7rem] text-white  w-full bg-white border-y-2 border-dashed border-[#2e0d23] mb-6">
    <div className="flex flex-wrap justify-center items-center gap-[52px]">
 <h6 onClick={handlebid} className=" bg-[#b19676] p-[4px] rounded-md relative top-[19px] font-[initial] text-white inline" >My Bids</h6>
 <h6 onClick={handlewatchlist} className=" bg-[#b19676] p-[4px] rounded-md relative top-[19px] font-[initial] text-white inline  " >My Watchlist</h6>
 <h6 onClick={navigateinvoice} className=" bg-[#b19676] p-[4px] rounded-md relative top-[19px] font-[initial] text-white inline  " >My Invoices</h6>
 </div>
 <div className="flex flex-wrap justify-center items-center gap-[49px] mt-1">
 <h6 onClick={navigateconsigments} className=" bg-[#b19676] p-[4px] rounded-md relative top-[19px] font-[initial] text-white inline  " >My Consigments</h6>
 <h6 onClick={accountapproval} className=" bg-[#b19676] p-[4px] rounded-md relative top-[19px] font-[initial] text-white inline right-[31px]  " >My Approval</h6>
 <h6 onClick={Profileroute} className=" bg-[#b19676] p-[4px] rounded-md relative top-[19px] font-[initial] text-white inline right-[22px] " >My Profile</h6>
 </div>
</div>

      {/* Mobile Styles */}
  
    </>
  );
};
