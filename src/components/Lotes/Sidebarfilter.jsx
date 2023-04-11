import React ,{useState}from "react";
import { FaFilter } from 'react-icons/fa';
import { FaLongArrowAltRight } from "react-icons/fa";
// Link
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
export const Sidebarfilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
  <>
  <section className="col-span-12 lg:col-span-3 overflow-hidden">
  {/* position: absolute;
    top: -285px;
    left: 28px;               Filters */}
                      <button
        className="block sm:hidden  bottom-[-67.75rem]  text-black"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <FaFilter size={20} />
      </button>

      <div className={`p-6 shadow ${isFilterOpen ? 'block' : 'hidden'} sm:block`}>
 
                {/* Add Lot */}
                {/* Filters */}
                <form
                  x-ref="filterForm"
                  x-on:submit="event.preventDefault();"
                  className="space-y-4"
                >
                  {/* Available for immediate purchase */}
                  <div className="p-1 mt-1">
                    <div className="inline-flex items-center space-x-2">
                      <input
                        className="select-none cursor-pointer focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                        id="Available for immediate purchase"
                        name="Available for immediate purchase"
                        type="checkbox"
                        defaultValue=""
                        x-model="filters.Available for immediate purchase"
                        x-on:change="getObjects()"
                      />{" "}
                      <label
                        className="select-none cursor-pointer block text-sm "
                        htmlFor="Available for immediate purchase"
                        style={{ fontSize: "13px" }}
                      >
                        Available for immediate purchase
                      </label>
                    </div>
                  </div>
                  {/* Lots auctioned on website */}
                  <div className="p-1 mt-1">
                    <div className="inline-flex items-center space-x-2">
                      <input
                        className="select-none cursor-pointer focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                        id="Lots auctioned on website"
                        name="Lots auctioned on website"
                        type="checkbox"
                        defaultValue=""
                        x-model="filters.Lots auctioned on website"
                        x-on:change="getObjects()"
                      />{" "}
                      <label
                        className="select-none cursor-pointer block text-sm font-medium"
                        htmlFor="Lots auctioned on website"
                      >
                        Lots auctioned on website
                      </label>
                    </div>
                  </div>
                  {/* Certified  */}
                  {/* Order By */}
                  <div>
                    {" "}
                    <span className="select-none block text-sm font-medium">
                    Order by
                    </span>{" "}
                    <div
                      id="category"
                      className="h-64 p-2 mt-1 space-y-2 border border-gray-200 rounded-md overflow-y-auto lg:h-64"
                    >
                      {" "}
                      <template x-for="option in category_options" />{" "}
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-33"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            x-bind:for="'categories-' + option.id"
                            x-bind:value="option.id"
                            x-bind:checked="filters.categories.includes(String(option.id))"
                            x-bind:id="'categories-' + option.id"
                            x-on:change="loadCategories()"
                            htmlFor="categories-33"
                            defaultValue={33}
                            id="categories-33"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="label-checked:font-bold select-none block text-sm font-medium"
                          >
                            {" "}
                          Lot Number ASC
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-34"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            x-bind:for="'categories-' + option.id"
                            x-bind:value="option.id"
                            x-bind:checked="filters.categories.includes(String(option.id))"
                            x-bind:id="'categories-' + option.id"
                            x-on:change="loadCategories()"
                            htmlFor="categories-34"
                            defaultValue={34}
                            id="categories-34"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="label-checked:font-bold select-none block text-sm font-medium"
                          >
                            {" "}
                            Lot Number DESC
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-25"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            x-bind:for="'categories-' + option.id"
                            x-bind:value="option.id"
                            x-bind:checked="filters.categories.includes(String(option.id))"
                            x-bind:id="'categories-' + option.id"
                            x-on:change="loadCategories()"
                            htmlFor="categories-25"
                            defaultValue={25}
                            id="categories-25"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="label-checked:font-bold select-none block text-sm font-medium"
                          >
                           
                           Country ASC
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-37"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            x-bind:for="'categories-' + option.id"
                            x-bind:value="option.id"
                            x-bind:checked="filters.categories.includes(String(option.id))"
                            x-bind:id="'categories-' + option.id"
                            x-on:change="loadCategories()"
                            htmlFor="categories-37"
                            defaultValue={37}
                            id="categories-37"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="label-checked:font-bold select-none block text-sm font-medium"
                          >
                              Country DESC
                            
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-38"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            x-bind:for="'categories-' + option.id"
                            x-bind:value="option.id"
                            x-bind:checked="filters.categories.includes(String(option.id))"
                            x-bind:id="'categories-' + option.id"
                            x-on:change="loadCategories()"
                            htmlFor="categories-38"
                            defaultValue={38}
                            id="categories-38"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="label-checked:font-bold select-none block text-sm font-medium"
                          >
                            {" "}
                         Title ASC
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-123"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            x-bind:for="'categories-' + option.id"
                            x-bind:value="option.id"
                            x-bind:checked="filters.categories.includes(String(option.id))"
                            x-bind:id="'categories-' + option.id"
                            x-on:change="loadCategories()"
                            htmlFor="categories-123"
                            defaultValue={123}
                            id="categories-123"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="label-checked:font-bold select-none block text-sm font-medium"
                          >
                            {" "}
                       Title DESC
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-122"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            x-bind:for="'categories-' + option.id"
                            x-bind:value="option.id"
                            x-bind:checked="filters.categories.includes(String(option.id))"
                            x-bind:id="'categories-' + option.id"
                            x-on:change="loadCategories()"
                            htmlFor="categories-122"
                            defaultValue={122}
                            id="categories-122"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="label-checked:font-bold select-none block text-sm font-medium"
                          >
                            {" "}
                         Current price ASC
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <label
                          x-bind:for="'categories-' + option.id"
                          className="inline-flex items-center block space-x-2"
                          htmlFor="categories-129"
                        >
                          {" "}
                          <input
                            name="categories"
                            type="checkbox"
                            className="select-none focus:ring-yellow-500 h-4 w-4 text-yellow-500 border-gray-200 rounded"
                            x-bind:for="'categories-' + option.id"
                            x-bind:value="option.id"
                            x-bind:checked="filters.categories.includes(String(option.id))"
                            x-bind:id="'categories-' + option.id"
                            x-on:change="loadCategories()"
                            htmlFor="categories-129"
                            defaultValue={129}
                            id="categories-129"
                          />{" "}
                          <span
                            x-text="option.category"
                            className="label-checked:font-bold select-none block text-sm font-medium"
                          >
                            {" "}
                        Current Price DSC
                          </span>{" "}
                        </label>{" "}
                      </div>{" "}
                      
                      
                    </div>{" "}
                  </div>{" "}
                  {/* jump_to_lot_number */}
                  {/* id */}
                  {/* Country */}
                  <div>
                   <label
                      htmlFor="country"
                      className="select-none block text-sm font-medium"
                    >
                      Categories
                    </label>{" "}
                    <select
                      id="country"
                      className="block w-full border-gray-200 bg-white dark:bg-night-900 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                      x-ref="country"
                      x-model="filters.country"
                      x-on:change="getObjects()"
                    >
                  <option value="" selected="selected">
                        Categories
                      </option> 
                      <option x-text="value.country"></option>

                      <option x-text="value.country" value="NU">
                        Greek
                      </option>
                      <option x-text="value.country" value="NIE">
                        Roman
                      </option>
                      <option x-text="value.country" value="NO">
                        Republic
                      </option>
                      <option x-text="value.country" value="OM">
                        Imperial
                      </option>
                      <hr className="border-1 opacity-5	" />
                      <option x-text="value.country" value="OTTEMP">
                        Provinical
                      </option>
                    </select>
                  </div>
                  {/* Categories */}
                  <div className="flex flex-col">
                    <p>Byzantine</p>
                    <hr className="border-1" />
                    <p className="mt-1">Medieval</p>
                    <hr className="border-1" />

                    <p className="mt-1">Islamic</p>
                    <hr className="border-1" />

                    <p className="mt-1">Antiquities</p>
                    <hr className="border-1" />

                    <p className="mt-1">Lots</p>
                    <hr className="border-1" />

                 <Link to="/archive">   <p className=" cursor-pointer realtive top-2 flex flex-row align-middle gap-5 ">
                      view more option{" "}
                      <span>
                        {" "}
                        <FaLongArrowAltRight className="relative top-1" />
                      </span>
                    </p>
                    </Link>
                  </div>
                </form>
            
      </div>
      </section>
  
  </>
  )
}
