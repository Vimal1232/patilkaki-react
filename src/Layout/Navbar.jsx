import React, { useState } from "react";
import { Logo, Ham, Close } from "../assets/Images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-10 max-sm:px-5">
      <div className="flex items-center">
        <div>
          <a href="#Home">
            <img
              src={Logo}
              alt=""
              className=" w-[100px] h-[35px] cursor-pointer"
            />
          </a>
        </div>
        <div className=" mx-auto max-sm:hidden">
          <ul className="flex items-center gap-8">
            <li className=" text-[16px] font-GeneralSans font-normal text-tertiary hover:text-primary cursor-pointer hover-underline-animation">
              <a href="#Home">Home</a>
            </li>
            <li className=" text-[16px] font-GeneralSans font-normal text-tertiary hover:text-primary  cursor-pointer hover-underline-animation">
              <a href="#About">About</a>
            </li>
            <li className=" text-[16px] font-GeneralSans font-normal text-tertiary hover:text-primary  cursor-pointer hover-underline-animation">
              <a href="#Why">Why Us</a>
            </li>
            <li className=" text-[16px]font-GeneralSans font-normal text-tertiary hover:text-primary  cursor-pointer hover-underline-animation">
              <a href="#Contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 items-center max-sm:hidden">
          <button className=" font-GeneralSans font-normal text-primary text-[16px] rounded-[4px] cursor-pointer hover:bg-primarylight py-2 px-3 duration-300 ease-in-out ">
            Sign In
          </button>
          <button className="font-GeneralSans font-normal text-white text-[16px]  bg-primary px-3 py-2 rounded-[4px] cursor-pointer hover:bg-primaryhover duration-300 ease-in-out ">
            SignUp
          </button>
        </div>
        <div className="sm:hidden ml-auto">
          <img
            src={isOpen ? Close : Ham}
            className="w-[32px] h-[32px]"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div
          className={`${
            !isOpen ? "hidden" : "flex"
          } fixed w-full h-[100vh] top-[0px] left-0 bg-white z-[5] flex flex-col   flex-grow-1 sm:px-[88px] sm:py-10  py-6 px-5  gap-36 vmd:hidden duration-200 ease-in-out`}
        >
          <div className="flex">
            <div>
              <a href="#Home">
                <img
                  src={Logo}
                  alt=""
                  className=" w-[100px] h-[35px] cursor-pointer"
                />
              </a>
            </div>
            <div className="ml-auto">
              <img
                src={isOpen ? Close : Ham}
                className="w-[32px] h-[32px]"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
          <div className="">
            <ul className="flex flex-col items-center gap-8">
              <li
                className=" text-[24px] font-GeneralSans font-normal text-tertiary hover:text-primary cursor-pointer hover-underline-animation"
                onClick={() => setIsOpen(!isOpen)}
              >
                <a href="#Home">Home</a>
              </li>
              <li
                className=" text-[24px] font-GeneralSans font-normal text-tertiary hover:text-primary  cursor-pointer hover-underline-animation"
                onClick={() => setIsOpen(!isOpen)}
              >
                <a href="#About">About</a>
              </li>
              <li
                className=" text-[24px] font-GeneralSans font-normal text-tertiary hover:text-primary  cursor-pointer hover-underline-animation"
                onClick={() => setIsOpen(!isOpen)}
              >
                <a href="#Why">Why Us</a>
              </li>
              <li
                className=" text-[24px] font-GeneralSans font-normal text-tertiary hover:text-primary  cursor-pointer hover-underline-animation"
                onClick={() => setIsOpen(!isOpen)}
              >
                <a href="#Contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
