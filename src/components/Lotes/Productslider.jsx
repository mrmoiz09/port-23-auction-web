import React, { useState, useEffect } from "react";

import {  Tooltip ,Button} from "flowbite-react";
import { FaRegBookmark } from "react-icons/fa";
// Link
import { Card, Dropdown } from "flowbite-react";
import { Link } from 'react-router-dom';
const images = [
  {
    id: 1,
    src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    alt: "Bonnie image",
    title: "product",
    subtitle: "binance",
  },
  {
    id: 2,
    src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    alt: "Bonnie image",
    title: "product",
    subtitle: "binance",
  },

  {
    id: 3,
    src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    alt: "Bonnie image",
    title: "product",
    subtitle: "binance",
  },
  {
    id: 4,
    src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    alt: "Bonnie image",
    title: "product",
    subtitle: "binance",
  },
  {
    id: 5,
    src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    alt: "Bonnie image",
    title: "product",
    subtitle: "binance",
  },
  {
    id: 6,
    src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    alt: "Bonnie image",
    title: "product",
    subtitle: "binance",
  },
  {
    id: 7,
    src: "https://katzauction.b-cdn.net/auction_imgs/2023_03_03__170038_79P_KAPR26.jpg",
    alt: "Bonnie image",
    title: "product",
    subtitle: "binance",
  },

  // Add more objects for additional images
];
export const Productslider  = () => {
  const [countdown, setCountdown] = useState(null);
  useEffect(() => {
    const endDate = new Date("2023-06-01T00:00:00");
    const intervalId = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      if (diff < 0) {
        clearInterval(intervalId);
        setCountdown("Expired");
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
    
    <h1 className="following-head md:mt-[30px] sm:mt-[15px]  text-4xl font-[initial] tracking-tight md:text-gray-900 md:ml-[127px] sm:ml-[20px] ">
      {" "}
  Popular Items 
    </h1>
    <div className="mx-auto md:mt-[4rem]  md:mb-[110px] sm:mb-[50px] custom-margin">
      <div className="flex flex-row  overflow-x-auto md:w-[134vh] mx-auto sm:relative Bottom:[30px] custom--margin">
      {images.map((image) => (
              <div key={image.id} className="lg:col-span-3 ml-[19px]">
                <div className="max-w-sm  md:mb-[15px]">
                  <Card className="lg:w-[40vh] w-auto">
                    {/* <p className="absolute">time left for bid</p> */}
                    {/* <hr className="border-/2 w-full border-dashed" /> */}

                    <div className="flex justify-end px-4 pt-4 custom-card custom-pos">
                      <Tooltip
                        content="add to wishlist"
                        placement="top"
                        style="light"
                      >
                        <Button
                          className=" bg-white  hover:bg-white  border-0	border-transparent	 "
                          style={{ border: "none" }}
                        >
                          <FaRegBookmark color="#2E0D23" />
                        </Button>
                      </Tooltip>{" "}
                    </div>
                    <div className="flex flex-col items-center pb-10 w-[14rem] mx-auto lg:relative lg:top-[-38px]">
                      <img
                        className="mb-3  rounded-full  custom-img"
                        src={image.src}
                        alt={image.alt}
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {image.title}
                      </h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {image.subtitle}
                      </span>

                      <div className=" flex space-x-3 flex-gap-d ">
                        <Link
                          to="/bidpage"
                          className="custom-width inline-flex items-center rounded-lg bg-[#b19676] py-2 px-4 text-center hover:bg-[#ceae89] text-sm font-medium text-white  focus:outline-none "
                        >
                          <span className="relative left-[4px] lg:text-xs font-response-sm ">
                            Place a bid
                          </span>
                        </Link>
                        <Link
                          to="/bidpage"
                          className="custom-width inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                          <span className="relative left-[4px]">Buy now</span>
                        </Link>
                      </div>
                      <div className="flex flex-row ga-5 lg:gap-[55px] lg:mt-2 gap-[59px]   lg:current-position">
                        <span className="font-bold font-shadow-y   lg:text-[12px]">
                          Current bid 20$
                        </span>
                        <span className="font-bold font-shadow-y lg:left-[-17px] bid-price-sm">
                          {" "}
                          Price 20$
                        </span>
                      </div>
                    </div>
                  </Card>
                  <div className="bg-[#b19676] rounded-b-lg h-[50px] mt-[-40px]">
                    <div className=" lg:block  lg:relative lg:right-[-1px]">
                      {countdown ? (
                        <div className="grid grid-cols-4  text-white  lg:w-[10rem] gap-[1rem] relative lg:bottom-[18px] lg:left-[70px]  left-[7px] ">
                          {countdown.split(" ").map((item, index) => (
                            <div
                              key={index}
                              className="  text-center flex items-center"
                            >
                              <h4 className="lg:text-[15px] font-[initial] text-white relative lg:top-[30px] top-[15px] left-[12px]  flex">
                                {" "}
                                {item.slice(0, -1)}{" "}
                                <span className="relative left-1">
                                  {item.slice(-1)}
                                </span>
                              </h4>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>Loading countdown...</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
 

</>
  )
}
