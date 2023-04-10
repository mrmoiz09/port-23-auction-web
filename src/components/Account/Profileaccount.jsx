import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Sidebaraccount } from "./Sidebaraccount";

export const Profileaccount = () => {
  const [jumpForLot, setJumpForLot] = useState("");
  const [search, setSearch] = useState("");

  const handleJumpForLotChange = (event) => {
    setJumpForLot(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Jump for Lot:", search);
    console.log("Search:", search);
  };

  return (
    <>
      <div className="flex flex-row p-4 justify-end">
        <form
          onSubmit={handleSubmit}
          className="flex md:mr-[30px] mb-7 mt-[9px]"
        >
          <input
            className="bg-white rounded-l-md px-4 py-2 border-gray-300 w-1/2 mr-2 border rounded-lg md:h-[35px] drop-shadow-lg"
            type="text"
            style={{ borderRadius: "17px" }}
            placeholder="Jump for Lot"
            value={jumpForLot}
            onChange={handleJumpForLotChange}
          />
          <input
            className="bg-white rounded-r-md px-4 py-2 r border-gray-300 w-1/2 mr-2 border rounded-lg md:h-[35px] drop-shadow-lg"
            type="text"
            placeholder="Search"
            value={search}
            style={{ borderRadius: "17px" }}
            onChange={handleSearchChange}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="flex items-center bg-[#2E0D23]  text-white font-bold py-2 px-4 rounded"
            style={{ borderRadius: "14px" }}
          >
            Search
            <FaSearch className="ml-2 " style={{ fontSize: "15px" }} />
          </button>
        </form>
      </div>

      <div className="flex flex-row justify-center gap-[10rem] mb-[107px]">
        <div className="child-1">
          <Sidebaraccount />
        </div>
        <div className="child-2">
          <h2 className="text-2xl uppercase ml-2">my Profile</h2>
          <hr className="border-1 w-[100%] " />

          <div className="form">
            <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full max-w-[550px]">
                <form
                  action=""
                >




                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
