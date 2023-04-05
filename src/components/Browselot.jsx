import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { Card,Dropdown } from "flowbite-react";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  {
    name: "Available for imideiate response",
    href: "#",
    label: "White",
    checked: false,
  },
  {
    name: "Lots auction on website",
    href: "#",
    label: "White",
    checked: false,
  },
];
const filters = [
  {
    id: "color",
    name: "Order by:",
    options: [
      { value: "bitcoin", label: "Bitcoin", checked: false },
      { value: "bitcoin", label: "Bitcoin", checked: false },
      { value: "bitcoin", label: "Bitcoin", checked: true },
      { value: "bitcoin", label: "Bitcoin", checked: false },
      { value: "bitcoin", label: "Bitcoin", checked: false },
      { value: "bitcoin", label: "BItcoin", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "Greek", label: "Greek", checked: false },
      { value: "roman", label: "roman", checked: false },
      { value: "republic", label: "republic", checked: true },
      { value: "imperial", label: "imperial", checked: false },
      { value: "byzantine", label: "byzantine", checked: false },
      { value: "medevial", label: "medevial", checked: false },
      { value: "lots", label: "lots", checked: false },
    ],
  },
  {
    id: "size",
    name: "view more",
    options: [
      { value: "turkey", label: "turkey", checked: false },
      { value: "turkey", label: "turkey", checked: false },
      { value: "1turkey", checked: false },
      { value: "turkey", label: "turkey", checked: false },
      { value: "turkey", label: "turkey", checked: false },
      { value: "turkey", label: "turkey", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Browselot() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white shadow-x md:w-[80%]   md:mx-auto sm:w-[autp]">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <button className="h-6 w-6" aria-hidden="true">
                        open
                      </button>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className=" md:ml-[17px]  lg:ml-[17px] mt-4 border-t border-gray-200 shadow-x">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <a href={category.href} className="ml-2">
                              {category.name}
                            </a>
                          </label>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-[initial] tracking-tight text-gray-900">
              Browse Lots
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

<div className="flex flex-row  overflow-x-auto md:w-[90vh]">
              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="max-w-sm">
                  <Card>
                    <div className="flex justify-end px-4 pt-4">
                      <Dropdown inline={true} label="">
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Export Data
                          </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Delete
                          </a>
                        </Dropdown.Item>
                      </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                      <img
                        className="mb-3 h-24 w-24 rounded-full shadow-lg"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                       rthereum
                      </h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                      binance
                      </span>
                      <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                          href="#"
                          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          archive
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                          complimen
                        </a>
                      </div>
                    </div>
                  </Card>
                </div> 
              </div>
              {/* card 02 */}
              <div className="lg:col-span-3">
                <div className="max-w-sm">
                  <Card>
                    <div className="flex justify-end px-4 pt-4">
                      <Dropdown inline={true} label="">
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Export Data
                          </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Delete
                          </a>
                        </Dropdown.Item>
                      </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                      <img
                        className="mb-3 h-24 w-24 rounded-full shadow-lg"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                       rthereum
                      </h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                      binance
                      </span>
                      <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                          href="#"
                          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          archive
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                          complimen
                        </a>
                      </div>
                    </div>
                  </Card>
                </div> 
              </div>
              {/* 03 */}
              <div className="lg:col-span-3">
                <div className="max-w-sm">
                  <Card>
                    <div className="flex justify-end px-4 pt-4">
                      <Dropdown inline={true} label="">
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Export Data
                          </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Delete
                          </a>
                        </Dropdown.Item>
                      </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                      <img
                        className="mb-3 h-24 w-24 rounded-full shadow-lg"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                       rthereum
                      </h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                      binance
                      </span>
                      <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                          href="#"
                          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          archive
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                          complimen
                        </a>
                      </div>
                    </div>
                  </Card>
                </div> 
              </div>
              {/* 04  */}
              <div className="lg:col-span-3">
                <div className="max-w-sm">
                  <Card>
                    <div className="flex justify-end px-4 pt-4">
                      <Dropdown inline={true} label="">
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Export Data
                          </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Delete
                          </a>
                        </Dropdown.Item>
                      </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                      <img
                        className="mb-3 h-24 w-24 rounded-full shadow-lg"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                       rthereum
                      </h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                      binance
                      </span>
                      <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                          href="#"
                          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          archive
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                          complimen
                        </a>
                      </div>
                    </div>
                  </Card>
                </div> 
              </div>
              {/* 04 end  */}
              {/* card 5  */}
              <div className="lg:col-span-3">
                <div className="max-w-sm">
                  <Card>
                    <div className="flex justify-end px-4 pt-4">
                      <Dropdown inline={true} label="">
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Export Data
                          </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <a
                            href="#"
                            className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Delete
                          </a>
                        </Dropdown.Item>
                      </Dropdown>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                      <img
                        className="mb-3 h-24 w-24 rounded-full shadow-lg"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                       rthereum
                      </h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                      binance
                      </span>
                      <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                          href="#"
                          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          archive
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                          complimen
                        </a>
                      </div>
                    </div>
                  </Card>
                </div> 
              </div>
              {/* card 5 end  */}
              </div>


            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
