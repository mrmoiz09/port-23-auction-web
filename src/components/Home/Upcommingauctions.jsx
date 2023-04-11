import React from "react";
import { Link } from "react-router-dom";
// import "../css/Upcomming.css";

export const Upcommingauctions = () => {
  return (
    <>
 
     <h1 className="text-4xl font-[initial] tracking-tight text-gray-900 md:ml-[127px] sm:ml-[20px] " >
     Upcoming auctions
  </h1>
      
      
    
      <section className="py-10 mx-auto w-[80%]">
        <div
          className="space-y-4  box-sx"
         
        >
          <template x-for="auction in current_auctions">
            <button
              href="//"
              className="group grid grid-cols-1 lg:grid-cols-4 rounded-lg transition ease-in-out duration-300 "
              style={{ border: "none" }} >
              <div className="col-span-3 lg:col-span-1" >
                <div className="relative">
                <img
                  src="auction.image"
                  className="w-full rounded sticky top-0" 
                  alt=""
                />
                </div>
              </div>
              <div className="p-4 col-span-3 lg:col-span-3 space-y-4">
                <div className="border-b pb-4">
                  <p
                    x-text="auction.title"
                    className="text-2xl tracking-tight font-bold group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition ease-in-out duration-300 inline"
                  ></p>
                  <p className="text-lg text-yellow-500 dark:text-yellow-300 block inline">
                    <br />
                    <span x-text="auction.count_all_items"></span> Lots
                  </p>
                  <template x-if="auction.planned_starting_formatted != '-'">
                    <p
                      className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                      x-text="'('+ auction.planned_starting_formatted + ' -  ' + auction.planned_ending_formatted + ')'"
                    ></p>
                  </template>
                </div>
                <div className="text-sm" x-html="auction.description"></div>
              </div>
            </button>
          </template>
          <a
            className="group grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 bg-white dark:bg-night-900 border border-gray-200 dark:border-night-700 hover:shadow-lg rounded-lg transition ease-in-out duration-300"
            href="lots?auction_id=80"
          >
            <div className="col-span-3 lg:col-span-1">
              <img
                className="w-full rounded"
                src="https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg"
                alt=""
              />
            </div>
            <div className="p-4 col-span-3 lg:col-span-3 space-y-4">
              <div className="border-b pb-4">
                <p
                  x-text="auction.title"
                  className="text-2xl tracking-tight font-bold group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition ease-in-out duration-300 inline"
                >
                  Auction 80 - Premium Coins &amp; Banknotes of The World{" "}
                </p>
                <p className="text-lg text-yellow-500 dark:text-yellow-300 block inline">
                  <br />
                  <span x-text="auction.count_all_items">1926</span> Lots
                </p>
                <template x-if="auction.planned_starting_formatted != '-'">
                  <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    x-text="'('+ auction.planned_starting_formatted + ' -  ' + auction.planned_ending_formatted + ')'"
                  ></p>
                </template>
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  x-text="'('+ auction.planned_starting_formatted + ' -  ' + auction.planned_ending_formatted + ')'"
                >
                  
                  (21.03.2023 10:35 - 06.04.2023 21:00)
                </p>
              </div>
              <div className="text-sm" x-html="auction.description">
                <p>Dear Friends,</p>
                <p>
                  {" "}
                  <br />
                </p>
                <p>
                  We are happy to welcome you to our Auction 80 - Premium Coins
                  &amp; Banknotes of The World.
                </p>
                <p>
                  {" "}
                  <br />
                </p>
                <p>
                  <span>
                    Please pay attention that the total premium starting from
                    Auction 80 is 22% but not less than 4 euros per lot!
                  </span>
                </p>
                <p>
                  {" "}
                  <br />
                </p>
                <p>
                  <u>Live Auction Schedule:</u>
                </p>
                <p>
                  {" "}
                  <br />
                </p>
                <p>
                  <u>Session 1. 5th of April. 10-00 CET.</u>
                </p>
                <p>
                  {" "}
                  <br />
                </p>
                <ul>
                  <li>
                    1 - 40. Coins - <span>Czech &amp; Slovak</span>.
                  </li>
                  <li>41 - 234. Coins - Austria-Hungary.</li>
                  <li>235 - 556. Coins - Europe.</li>
                  <li>557 - 650. German Coins of all periods.</li>
                  <li>
                    651 - 720. <span>Coins - Italy.</span>
                  </li>
                  <li>721 - 792. Coins - Middle East.</li>
                  <li>
                    793 - 936. <span>Coins - America.</span>
                  </li>
                </ul>
                
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};
