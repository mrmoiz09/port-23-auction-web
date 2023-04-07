import React from "react";
import { Navbar, Dropdown, Avatar, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
export const Navbars = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="flex flex-col">
          <div className="child-1">
            <Navbar
              fluid={true}
              rounded={true}
              className="bg-[#2E0D23]"
              style={{ background: "#2E0D23", borderRadius: "0px" }}
            >
              <Navbar.Brand href="">
                {/* <img
              // src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white font-[iniial]">
                  logo
                </span>
              </Navbar.Brand>
              <div className="flex md:order-2">
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      alt="User settings"
                      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">
                      daniel daniel auction
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
              </div>
              <Navbar.Collapse>
                <Navbar.Link className=" font-[circular] text-white bg-[#B19676]   hover:bg-sky-700  rounded-full px-5 md:w-[55px] p-[2px] text-center">
                  <Link to="/"> Home</Link>
                </Navbar.Link>

                <Navbar.Link className="text-white font-[circular]  hover:bg-sky-700 mr-3">
                  <Link to="/archive"> Archive</Link>
                </Navbar.Link>
                <Navbar.Link className="text-white font-[circular]  hover:bg-sky-700 mr-3">
                  <Link to="/lots">Lots</Link>
                </Navbar.Link>

                <Link to="/faq">
                <Navbar.Link
                  className="text-white font-[circular]  hover:bg-sky-700 mr-3"
                 
                >
                  FAQS
                </Navbar.Link>
                </Link>
                <Navbar.Link
                  className="text-white font-[circular]   hover:bg-sky-700 mr-3"
                 
                >
                  Cart
                </Navbar.Link>
                <Navbar.Link
                  className="text-white font-[circular]  hover:bg-sky-700"
                  href="/navbars"
                >
                  My-Account
                </Navbar.Link>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};
