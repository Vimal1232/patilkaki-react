import React from "react";
import { Founder } from "../assets/Images";

const Aboutus = () => {
  return (
    <section id="About" className="px-10 max-sm:px-5">
      <div className="flex items-center justify-center  gap-10 max-md:flex-wrap">
        <div>
          <img src={Founder} alt="" className="" />
        </div>
        <div className="flex flex-col gap-5 max-w-[550px]">
          <h2 className="text-[56px] font-GeneralSans font-bold text-black max-sm:text-[40px]">
            Hello! I'm Darsheel, a co-founder at PatilKaki
          </h2>
          <p className=" text-[18px] font-GeneralSans font-light text-tertiary max-sm:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            error voluptatum dolore possimus aliquam, veniam culpa temporibus
            laborum amet, porro incidunt quis repellendus nisi ab, accusantium
            fuga praesentium nemo eos!
          </p>
          <div>
            <button className=" text-primary hover-underline-animation box-border">
              <a href="">Learn More -{"> "}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
