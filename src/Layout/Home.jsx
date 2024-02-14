import React from "react";
import { Hero1, Hero2 } from "../assets/Images";

const Home = () => {
  return (
    <section id="Home">
      <div className="px-10 max-sm:px-5 py-10 flex justify-center items-center">
        <div className="flex items-center gap-10">
          <div className=" max-w-[550px] flex flex-col gap-5">
            <h1 className="text-[56px] text-black font-GeneralSans font-bold max-sm:text-[40px]">
              Code the future, innovate the present
            </h1>
            <p className="text-[18px] text-tertiary font-GeneralSans font-light max-sm:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              explicabo reprehenderit alias, assumenda blanditiis deleniti esse
              ipsum soluta voluptates corporis beatae maiores, obcaecati dicta
              nam eius sunt eaque dolorem iusto!
            </p>
            <div className="flex items-center gap-5 max-sm:flex-wrap">
              <button className="bg-primary text-white px-5 py-3 rounded-[4px] hover:bg-primaryhover duration-300  ease-in-out">
                Join Us Now
              </button>
              <button className=" text-primary px-5 py-3 rounded-[4px] hover:bg-primarylight duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
          <div className=" max-md:hidden">
            <img src={Hero2} alt="Hero1" width="100%" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
