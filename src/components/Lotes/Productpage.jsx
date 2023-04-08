import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Productslider } from "../Lotes/Productslider";

const ProductPage = () => {
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

  const [images, setImages] = useState({
    img1: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    img2: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    img3: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    img4: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

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

      <div className="parent flex md:flex-row parent-col">
        <div className="child-1">
          <div className="flex flex-col justify-start lg:flex-col gap-16  md:mb-[170px]">



            
            <div className="flex flex-col gap-8 lg:w-2/4 mx-auto m-auto">
              <img
                src={activeImg}
                alt=""
                className="w-full md:h-[300px] aspect-square object-cover rounded-xl  custom-img-3"
              />
              <div className="flex flex-row justify-bcenter h-24">
                <img
                  src={images.img1}
                  alt=""
                  className="w-[auto] h-24 rounded-md cursor-pointer mr-3"
                  onClick={() => setActiveImage(images.img1)}
                />
                <img
                  src={images.img2}
                  alt=""
                  className="w-[auto] h-24 rounded-md cursor-pointer mr-3"
                  onClick={() => setActiveImage(images.img2)}
                />
                {/* <img src={images.img3} alt="" className='w-[auto] h-24 rounded-md cursor-pointer mr-3' onClick={() => setActiveImage(images.img3)}/> */}
                {/* <img src={images.img4} alt="" className='w-[auto] h-24 rounded-md cursor-pointer mr-3' onClick={() => setActiveImage(images.img4)}/> */}
              </div>
            </div>
            {/* ABOUT */}
            <div className="flex flex-col gap-4 lg:w-2/4 align-middle relative left-[50px]">
              <div>
                <span className=" text-violet-600 font-semibold">
                  COIN NAME
                </span>
                <h1 className="text-3xl font-bold">auction bid </h1>
              </div>
              <p className="text-gray-700">
                Con un'er sostenerti in tutti i a, in attesa
              </p>
              <h6 className="text-2xl font-semibold">$ 199.00</h6>
              <div className="flex flex-row items-center gap-12">
                <div className="flex flex-col items-center">
                  <h1 className=" md:mr-64 text-3xl font-bold">
                    {" "}
                    Ask about the bid
                  </h1>
                  <div className="relative">
                    <textarea
                      className=" mt-[36px] drop-shadow-md  border border-gray-300 p-4 rounded-lg md:w-[80vh] h-48"
                      placeholder="Enter your message"
                    ></textarea>
                    <button className="absolute bottom-2 right-2 bg-[#2e0d23] text-white font-bold py-2 px-4 rounded-lg">
                      send message
                    </button>
                  </div>

                  {/* <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button> */}
                  {/* <span className='py-4 px-6 rounded-lg'>{amount}</span> */}
                  {/* <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button> */}
                </div>
                {/* <button className='bg-[#2e0d23] text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button> */}
              </div>
            </div>
          </div>
        </div>

        <div className=" child-col child-2 md:w-[100%] lg:w-[71%] bg-slate-100 md:h-[71vh] rounded-3xl drop-shadow relative right-5 child-form "  style={{width:"max-content"}}  >
          <div id="summary" class=" px-8 py-10 " style={{width:"max-content"}}>
            <h1 class="font-[initial] text-3xl  pb-8 w-[90%]">Buy now</h1>
            <div className="flex flex-col  items-center">
              <span className="font-[initial] text-[25px]">40 euro</span>
              <button className="bg-[#2e0d23] text-white font-semibold p-[9px] w-[90&] rounded-xl h-full">
                Add to cart
              </button>
            </div>
            <hr className="border border-gray-950 mt-8" />
            <div class="flex flex-col  mt-10 mb-5">
              <h2 class="font-[initial] text-sm uppercase">Items 3</h2>
              <div className="box bg-white  flex flex-row p-[12px] justify-center md:gap-[11rem] gap-a">
                <span className="font-[initial] text-2xl">Current Bid</span>
                <span className="font-[initial] text-2xl">700euro</span>
              </div>

              <div className="box bg-white  flex flex-row p-[12px] justify-center md:gap-[11rem] mt-[4rem] gap-a">
                <span className="font-[initial] text-2xl">Starting price</span>
                <span className="font-[initial] text-2xl">20 usd</span>
              </div>
            </div>
            <hr className="border border-gray-950 mt-8" />
            <div className="flex flex-col  items-center">
              <h1 className='class="font-[sans-serif] md:mt-[26px] md:ml-[-16rem]text-3xl  pb-8 uppercase'>
                place a bid
              </h1>

              <button className="bg-[#2e0d23] text-white font-semibold py-3 px-16 rounded-xl h-full">
                Login or Singup
              </button>
            </div>
            {/* <hr className="border border-gray-950 mt-8" /> */}
            {/* <p className="middle text-[green] mt-8"> how to bid</p> */}
          </div>
        </div>
      </div>

      {/* other lots  card */}

      <Productslider />
    </>
  );
};

export default ProductPage;
