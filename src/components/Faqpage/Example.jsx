import React, { useState } from 'react'

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
const accordionItems = [
    {
      title: 'WHERE ARE THE AUCTIONS PUBLISHED?',
      content: 'This is the content of item 1'
    },
    {
      title: 'WHAT ARE THE PAYMENT METHODS?',
      content: 'This is the content of item 2'
    }
    ,
    {
      title: ' WHAT IS THE COSTS FOR SHIPMENTS?',
      content: 'This is the content of item 2'
    },
    {
      title: 'ARE THE COINS AUTHENTIC?',
      content: 'This is the content of item 2'
    },
    {
      title: 'IS THERE A PARTNER COMPANY?',
      content: 'This is the content of item 2'
    },
    {
      title: 'ASK ABOUT THIS LOT.',
      content: 'This is the content of item 2'
    },
    {
      title: 'HOW TO PLACE A BID? (PRE BID)',
      content: 'This is the content of item 2'
    }
  ];
  
export const Example = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
   <>
    <div className="w-[60%] mx-auto m-auto p-[4rem]">
      {accordionItems.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="m-[5px] flex justify-between items-center w-full px-4 py-3 text-lg font-medium text-left bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue"
            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
          >
            <span>{item.title}</span>
            {activeIndex === index ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </button>
          <div
            className={`${
              activeIndex === index ? 'block' : 'hidden'
            } px-4 py-3 text-sm leading-5 text-gray-500 transition-all duration-300`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>

   </>
  )
}
