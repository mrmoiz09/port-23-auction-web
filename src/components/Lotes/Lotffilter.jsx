import React , {  useState } from 'react'
import { FaEye } from 'react-icons/fa';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
export const Lotffilter = () => {
    const [iscateogrizeOpen, setIsDropdownOpen] = useState(false);
    const [showDiv, setShowDiv] = useState(false);
    const handleCateogrizeToggle = () => {
      setIsDropdownOpen(!iscateogrizeOpen);
    };
    // cateogrize dropdown end
  
    const [isGreekOpen, setGreekDropdownOpen] = useState(false);
  
  const Greekoptionopen = ()=>[
  setGreekDropdownOpen(!isGreekOpen)
  ]
  
  return (
    <>
    <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 shadow-x rounded-lg">
    <label htmlFor="bitcoin1" className="inline-flex items-centerborder-b-2 border-slate-500 mt-6">
      <input
        type="radio"
        id="bitcoin1"
        name="bitcoin"
        className="form-radio relative top-1"
      />
      <span className="ml-2">Available for immediate purchase</span>
    </label>
    {/*  */}
    <label htmlFor="bitcoin1" className="inline-flex items-center mt-2">
      <input
        type="radio"
        id="bitcoin1"
        name="bitcoin"
        className="form-radio relative top-1"
      />
      <span className="ml-2">Lots auctioned on website</span>
    </label>
    {/* drops starrting  for option cateogrize*/}
    <div className="cursor-pointer mt-6">
      <h3
        href="#"
        className=" font-medium text-gray-500 dark:text-gray-300 hover:underline cursor-pointer font-[initial] flex"
        onClick={handleCateogrizeToggle}
      >
        Cateogrize
        <span className="mt-[6px] ml-9 ">
          {iscateogrizeOpen ? <FaAngleUp className="" />: <FaAngleDown/>}
        </span>
      </h3>

      {iscateogrizeOpen && (
        <div className="ml-4 space-y-2">
          <label
            htmlFor="bitcoin1"
            className="inline-flex items-center"
          >
            <input
              type="radio"
              id="bitcoin1"
              name="bitcoin"
              className="form-radio"
            />
            <span className="ml-2">Bitcoin Option 1</span>
          </label>
          <label
            htmlFor="bitcoin2"
            className="inline-flex items-center"
          >
            <input
              type="radio"
              id="bitcoin2"
              name="bitcoin"
              className="form-radio"
            />
            <span className="ml-2">Bitcoin Option 2</span>
          </label>
          <label
            htmlFor="bitcoin3"
            className="inline-flex items-center"
          >
            <input
              type="radio"
              id="bitcoin3"
              name="bitcoin"
              className="form-radio"
            />
            <span className="ml-2">Bitcoin Option 3</span>
          </label>
          <label
            htmlFor="bitcoin4"
            className="inline-flex items-center"
          >
            <input
              type="radio"
              id="bitcoin4"
              name="bitcoin"
              className="form-radio"
            />
            <span className="ml-2">Bitcoin Option 4</span>
          </label>
        </div>
      )}
    </div>
{/* drops ending  */}

{/*  drop down optio 2 roman*/}<div className="cursor-pointer mt-6">
<h3
        href="#"
        className="font-medium text-gray-500 dark:text-gray-300 hover:underline cursor-pointer flex"
        onClick={Greekoptionopen}
      >
        Greek 
        <span className="mt-[6px] ml-14 ">
          {isGreekOpen ? <FaAngleUp className="" />: <FaAngleDown/>}
        </span>
      </h3>

      {isGreekOpen && (
        <div className="ml-4 space-y-2 flex flex-col">
          <label
            htmlFor="bitcoin1"
            className="inline-flex items-center"
          >
            <input
              type="radio"
              id="bitcoin1"
              name="bitcoin"
              className="form-radio"
            />
            <span className="ml-2">Roman</span>
          </label>
          <label
            htmlFor="bitcoin2"
            className="inline-flex items-center"
          >
            <input
              type="radio"
              id="bitcoin2"
              name="bitcoin"
              className="form-radio"
            />
            <span className="ml-2">Imperial</span>
          </label>
          <label
            htmlFor="bitcoin3"
            className="inline-flex items-center"
          >
            <input
              type="radio"
              id="bitcoin3"
              name="bitcoin"
              className="form-radio"
            />
            <span className="ml-2">Provinicial</span>
          </label>
          
        </div>
      )}
    </div>
    <a
      href="#"
      className="block font-medium text-gray-500 dark:text-gray-300 hover:underline mt-6"
    >
Byzantine
    </a>
    <a
      href="#"
      className="block font-medium text-gray-500 dark:text-gray-300 hover:underline mt-6"
    >
    Medieval
    </a>
    <a
      href="#"
      className="block font-medium text-gray-500 dark:text-gray-300 hover:underline mt-6"
    >
     Islamic
    </a>
    <a
      href="#"
      className="block font-medium text-gray-500 dark:text-gray-300 hover:underline mt-6"
    >
      Antiquities
    </a>
    <a
      href="#"
      className="block font-medium text-gray-500 dark:text-gray-300 hover:underline mt-6"
    >
      Lots
    </a>
    <a
      href="#"
      className="block font-medium text-gray-500 dark:text-gray-300 hover:underline mt-6"
    >
      New listd
    </a>
    <a
      href="#"
      className="block font-medium text-gray-500 dark:text-gray-300 hover:underline "
    >
     View More Options
    </a>

  </div>


  </>


  )
}
