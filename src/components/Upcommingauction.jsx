import React from "react";
import "../css/Upcomming.css";

export const Upcommingauctions = () => {
  return (
    <>
     
     <h1 className="text-4xl font-[initial] tracking-tight text-gray-900 md:ml-[127px] sm:ml-[20px] " >
  Upcomming Auctions
  </h1>
      
      
    
      <section class="py-10 mx-auto w-[80%]">
        <div
          class="space-y-4 scrollbar box-sx"
          style={{ height: "50vh", overflow: "scroll" }}
        >
          <template x-for="auction in current_auctions">
            <a
              href="//"
              class="group grid grid-cols-1 lg:grid-cols-4 rounded-lg transition ease-in-out duration-300 "
              style={{ border: "none" }} >
              <div class="col-span-3 lg:col-span-1" >
                <div className="relative">
                <img
                  src="auction.image"
                  class="w-full rounded sticky top-0" 
                  alt=""
                />
                </div>
              </div>
              <div class="p-4 col-span-3 lg:col-span-3 space-y-4">
                <div class="border-b pb-4">
                  <p
                    x-text="auction.title"
                    class="text-2xl tracking-tight font-bold group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition ease-in-out duration-300 inline"
                  ></p>
                  <p class="text-lg text-yellow-500 dark:text-yellow-300 block inline">
                    <br />
                    <span x-text="auction.count_all_items"></span> Lots
                  </p>
                  <template x-if="auction.planned_starting_formatted != '-'">
                    <p
                      class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                      x-text="'('+ auction.planned_starting_formatted + ' -  ' + auction.planned_ending_formatted + ')'"
                    ></p>
                  </template>
                </div>
                <div class="text-sm" x-html="auction.description"></div>
              </div>
            </a>
          </template>
          <a
            class="group grid grid-cols-1 lg:grid-cols-4 gap-6 p-4 bg-white dark:bg-night-900 border border-gray-200 dark:border-night-700 hover:shadow-lg rounded-lg transition ease-in-out duration-300"
            href="lots?auction_id=80"
          >
            <div class="col-span-3 lg:col-span-1">
              <img
                class="w-full rounded"
                src="https://katzauction.b-cdn.net/auction_imgs/2023_03_21__141314_80p_bbf26.jpg"
                alt=""
              />
            </div>
            <div class="p-4 col-span-3 lg:col-span-3 space-y-4">
              <div class="border-b pb-4">
                <p
                  x-text="auction.title"
                  class="text-2xl tracking-tight font-bold group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition ease-in-out duration-300 inline"
                >
                  Auction 80 - Premium Coins &amp; Banknotes of The World{" "}
                </p>
                <p class="text-lg text-yellow-500 dark:text-yellow-300 block inline">
                  <br />
                  <span x-text="auction.count_all_items">1926</span> Lots
                </p>
                <template x-if="auction.planned_starting_formatted != '-'">
                  <p
                    class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    x-text="'('+ auction.planned_starting_formatted + ' -  ' + auction.planned_ending_formatted + ')'"
                  ></p>
                </template>
                <p
                  class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  x-text="'('+ auction.planned_starting_formatted + ' -  ' + auction.planned_ending_formatted + ')'"
                >
                  
                  (21.03.2023 10:35 - 06.04.2023 21:00)
                </p>
              </div>
              <div class="text-sm" x-html="auction.description">
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
                <p>
                  {" "}
                  <br />
                </p>
                <p>
                  <u>Session 2. 6th of April. 10-00 CET.</u>
                </p>
                <p>
                  {" "}
                  <br />
                </p>
                <ul>
                  <li>
                    937 - 942. <span>Coins - Australia &amp; Oceania</span>
                  </li>
                  <li>943 - 1055. Coins - Africa</li>
                  <li>
                    1056 - 1123. <span>Coins - Asia</span>
                  </li>
                  <li>
                    1124 - 1174. <span>Coins - Ancient World</span>
                  </li>
                  <li>1175 - 1417. Russian Coins of all period.</li>
                  <li>
                    1418 - 1419. <span>Other Collectibles.</span>
                  </li>
                  <li>
                    <span>
                      1420 - 1425. Special Literature &amp; Catalogues
                    </span>
                  </li>
                  <li>
                    1426 - 1427. Paper Money -{" "}
                    <span>Australia &amp; Oceania</span>
                  </li>
                  <li>
                    1428 - 1445. <span>Paper Money - Asia</span>.
                  </li>
                  <li>
                    1446 - 1458. <span>Paper Money - </span>China.
                  </li>
                  <li>
                    1459 - 1490. <span>Paper Money - </span>exUSSR &amp;
                    Independent States.
                  </li>
                  <li>
                    1491 - 1644. <span>Paper Money - </span>Russia: Imperial,
                    RSFSR, USSR, Modern. Regional &amp; Private Issues{" "}
                  </li>
                  <li>
                    1645 - 1650. <span>Obligations, Loans &amp; Shares.</span>
                  </li>
                  <li>
                    1651 - 1681. <span>Paper Money - </span>Czech &amp; Slovak.
                  </li>
                  <li>
                    1682 - 1686. <span>Paper Money - </span>Germany.
                  </li>
                  <li>
                    1687 - 1824. <span>Paper Money - </span>Europe.
                  </li>
                  <li>
                    1825 - 1838.{" "}
                    <span>
                      Paper Money - Great Britain &amp; British Isles.
                    </span>
                  </li>
                  <li>
                    <span>1839 - 1841. Paper Money - Middle East.</span>
                  </li>
                  <li>
                    <span>1842 - 1884. Paper Money - Africa.</span>
                  </li>
                  <li>
                    <span>1885 - 1926. Paper Money - </span>America's.
                  </li>
                </ul>
                <p>
                  {" "}
                  <br />
                </p>
                <p>
                  We have approximately 130 lots per hour during the live
                  auction!
                </p>
                <p>
                  {" "}
                  <br />
                </p>
                <p>
                  Feel free to contact us with any questions and offers
                  regarding our sales!
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};
