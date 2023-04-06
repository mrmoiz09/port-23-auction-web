import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
export const Archivepage = () => {
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
    console.log("Jump for Lot:", jumpForLot);
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
            className="bg-white rounded-l-md px-4 py-2 border border-gray-300 w-1/2 mr-2 border rounded-lg md:h-[35px] drop-shadow-lg"
            type="text"
            style={{ borderRadius: "17px" }}
            placeholder="Jump for Lot"
            value={jumpForLot}
            onChange={handleJumpForLotChange}
          />
          <input
            className="bg-white rounded-r-md px-4 py-2 border border-gray-300 w-1/2 mr-2 border rounded-lg md:h-[35px] drop-shadow-lg"
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
      {/*  */}

      <div className="bg-slate-200 md:p-[37px] sm:p-[2px]">
        {/* font-size: 21px; position: absolute; font-family: initial; margin-left:
        43px; */}
        <h1
          className="  	 font-[initial] md:absolute lg:absolute sm:relative  ml-[36px] sm:text-[auto] md:text-[23px] mt-[-4px] border-4 border-b-border-black"
          style={{ borderBottom: "2px solid" }}
        >
          Archives{" "}
        </h1>
      </div>
      {/*  */}
      <div className="card-section-rpw">
        {/* card01  */}
        <div className="p-8 ">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex md:w-[95%] md:mx-auto md:m-auto drop-shadow-lg">
            <img
              src="https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg"
              alt="Product Image"
              className="object-contain h-48 w-96"
            />
            <div className="p-4 flex flex-row sm:flex-col justify-center md:p-[57px] md:gap-[17.25rem] ">
              <div className=" md:ml-[33px]">
                <h2 className="font-bold text-xl mb-2">Product Name</h2>
                <p className="text-gray-700 mb-4">
                  Greek, Roman, Byzantine and Medieval Coins, Seals,
                  Antiquities.
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-700 font-bold">Price: $19.99</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 01 end  */}
        {/* card01  */}
        <div className="p-8 ">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex md:w-[95%] md:mx-auto md:m-auto drop-shadow-lg">
            <img
              src="https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg"
              alt="Product Image"
              className="object-contain h-48 w-96"
            />
            <div className="p-4 flex flex-row sm:flex-row justify-center md:p-[57px] md:gap-[17.25rem] ">
              <div className=" md:ml-[33px]">
                <h2 className="font-bold text-xl mb-2">Product Name</h2>
                <p className="text-gray-700 mb-4">
                  Greek, Roman, Byzantine and Medieval Coins, Seals,
                  Antiquities.
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-700 font-bold">Price: $19.99</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 01 end  */}
        {/* card01  */}
        <div className="p-8 ">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex md:w-[95%] md:mx-auto md:m-auto drop-shadow-lg">
            <img
              src="https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg"
              alt="Product Image"
              className="object-contain h-48 w-96"
            />
            <div className="p-4 flex flex-row sm:flex-col justify-center md:p-[57px] md:gap-[17.25rem] ">
              <div className=" md:ml-[33px]">
                <h2 className="font-bold text-xl mb-2">Product Name</h2>
                <p className="text-gray-700 mb-4">
                  Greek, Roman, Byzantine and Medieval Coins, Seals,
                  Antiquities.
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-700 font-bold">Price: $19.99</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 01 end  */}
        {/* card01  */}
        <div className="p-8 ">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex md:w-[95%] md:mx-auto md:m-auto drop-shadow-lg">
            <img
              src="https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg"
              alt="Product Image"
              className="object-contain h-48 w-96"
            />
            <div className="p-4 flex flex-row sm:flex-col justify-center md:p-[57px] md:gap-[17.25rem] ">
              <div className=" md:ml-[33px]">
                <h2 className="font-bold text-xl mb-2">Product Name</h2>
                <p className="text-gray-700 mb-4">
                  Greek, Roman, Byzantine and Medieval Coins, Seals,
                  Antiquities.
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-700 font-bold">Price: $19.99</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 01 end  */}
        {/* card01  */}
        <div className="p-8 ">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex md:w-[95%] md:mx-auto md:m-auto drop-shadow-lg">
            <img
              src="https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg"
              alt="Product Image"
              className="object-contain h-48 w-96"
            />
            <div className="p-4 flex flex-row sm:flex-col justify-center md:p-[57px] md:gap-[17.25rem] ">
              <div className=" md:ml-[33px]">
                <h2 className="font-bold text-xl mb-2">Product Name</h2>
                <p className="text-gray-700 mb-4">
                  Greek, Roman, Byzantine and Medieval Coins, Seals,
                  Antiquities.
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-700 font-bold">Price: $19.99</p>
              </div>
            </div>
          </div>
        </div>
        {/* card 01 end  */}
      </div>
    </>
  );
};
