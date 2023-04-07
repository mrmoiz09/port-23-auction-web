import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Lotcardslider } from "./Lotcardslider";
import { Lotffilter } from "./Lotffilter";
// for filter _ card

// data for card images

// filter + card section  end

export const Lotestock = () => {
  // cateogrize dropdown

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

      {/* product section starting cmain tetx*/}
      <div className="bg-slate-200 md:p-[37px] sm:p-[2px]">
        <h1
          className="  	 font-[initial] md:absolute lg:absolute sm:relative  ml-[36px] sm:text-[auto] md:text-[23px] mt-[-4px] border-4 border-b-border-black"
          style={{ borderBottom: "2px solid" }}
        >
          Lots
        </h1>
      </div>
      {/* will add the grid bar here in flex  */}

      {/* filter + card section jsx  */}

      {/* <!-- component --> */}
      <section class="bg-white dark:bg-gray-900">
        {/*fil div below  */}
        <div class="container px-6 py-8 mx-auto">
          <div class="lg:flex lg:-mx-2">
            {/* add here  */}

            {/* add component here for filter  */}
            <Lotffilter />

            <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
              <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                <p class="text-gray-500 dark:text-gray-300">6 Items</p>
                <div class="flex items-center">
                  <p class="text-gray-500 dark:text-gray-300">Sort</p>
                  <select class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                    <option value="#">Recommended</option>
                    <option value="#">Size</option>
                    <option value="#">Price</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                  <img
                    class=" object-cover w-full rounded-md h-72 xl:h-80 shadow-x rounded"
                    src="https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg"
                    alt="T-Shirt"
                  />
                  <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                    lorrem 1psum deial etc
                  </h4>
                  <p class="text-blue-500">$12.55</p>

                  <div className="flex flex-row gap-2">
                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 md:text-[10px] md:h-[37px] ">
                      <span class="mx-1">Add to cart</span>
                    </button>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 md:text-[10px] md:h-[37px] ">
                     <span class="mx-1"><Link to="/Productpage">bid now</Link></span>
                    </button>
                  </div>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                  <img
                    class=" object-cover w-full rounded-md h-72 xl:h-80 shadow-x rounded"
                    src="https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg"
                    alt="T-Shirt"
                  />
                  <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                    {" "}
                    lorrem 1psum deial etc
                  </h4>
                  <p class="text-blue-500">$18.70</p>
                  <div className="flex flex-row gap-2">
                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 md:text-[10px] md:h-[37px] ">
                      <span class="mx-1">Add to cart</span>
                    </button>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 md:text-[10px] md:h-[37px] ">
                      <span class="mx-1"><Link to="/Productpage">bid now</Link></span>
                    </button>
                  </div>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                  <img
                    class=" object-cover w-full h-72 xl:h-80 shadow-x rounded"
                    src="https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg"
                    alt="T-Shirt"
                  />
                  <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                    lorrem 1psum deial etc
                  </h4>
                  <p class="text-blue-500">$16.55</p>

                  <div className="flex flex-row gap-2">
                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 md:text-[10px] md:h-[37px] ">
                      <span class="mx-1">Add to cart</span>
                    </button>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 md:text-[10px] md:h-[37px] ">
                     <span class="mx-1"><Link to="/Productpage">bid now</Link></span>
                    </button>
                  </div>
                </div>

                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                  <img
                    class=" object-cover w-full rounded-md h-72 xl:h-80 shadow-x rounded"
                    src="https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg"
                    alt="T-Shirt"
                  />
                  <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                    lorrem 1psum deial etc
                  </h4>
                  <p class="text-blue-500">$12.55</p>

                  <div className="flex flex-row gap-2">
                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 md:text-[10px] md:h-[37px] ">
                      <span class="mx-1">Add to cart</span>
                    </button>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 md:text-[10px] md:h-[37px] ">
                     <span class="mx-1"><Link to="/Productpage">bid now</Link></span>
                    </button>
                  </div>
                </div>
                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                  <img
                    class=" object-cover w-full rounded-md h-72 xl:h-80 shadow-x rounded"
                    src="https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg"
                    alt="T-Shirt"
                  />
                  <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
                    lorrem 1psum deial etc
                  </h4>
                  <p class="text-blue-500">$12.55</p>
                  <div className="flex flex-row gap-2">
                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 md:text-[10px] md:h-[37px] ">
                      <span class="mx-1">Add to cart</span>
                    </button>

                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 md:text-[10px] md:h-[37px] ">
                     <span class="mx-1"><Link to="/Productpage">bid now</Link></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Lotcardslider />
    </>
  );
};
