import React from "react";
import { Slider, Star, Stack, ManFe, WomenFe } from "../assets/Images";

const Whyus = () => (
  <section id="Why">
    <div className="px-10 max-sm:px-5 relative">
      <div className=" flex flex-col gap-40 max-sm:gap-20">
        <div className="flex flex-col gap-5 items-center justify-center max-w-[600px] mx-auto text-center">
          <div className="bg-primarylight rounded-[4px] px-3 py-2">
            <p className=" text-[14px] text-primary  font-GeneralSans font-medium">
              +55,000 BUSINESS TRUST
            </p>
          </div>
          <div>
            <h2 className="text-[56px] text-black font-GeneralSans font-bold max-sm:text-[40px] ">
              Partner with Success
            </h2>
          </div>
          <div>
            <p className="text-[18px] text-tertiary font-GeneralSans font-light max-sm:text-[14px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis voluptates fuga quaerat, hic, tempora quos earum dolor
              blanditiis reprehenderit adipisci saepe autem amet repellat
              dignissimos quam. Neque dolorum consectetur debitis?
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 max-vmd:grid-cols-2 max-ss:grid-cols-1 gap-5">
          <div className="flex items-center gap-5 col-span-1 ">
            <div className="flex flex-col items-center  ">
              <img
                src={Slider}
                alt=""
                width="100%"
                className="w-[30px] h-[30px]"
              />
              <div
                className=" border-r-[1px] border-tertiary  h-[100px]
              "
              ></div>
            </div>
            <div>
              <h3 className="text-[24px] text-black font-GeneralSans font-bold mb-2">
                100% Secure
              </h3>
              <p className="text-[18px] text-tertiary font-GeneralSans font-light max-sm:text-[14px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 col-span-1 ">
            <div className="flex flex-col items-center  ">
              <img
                src={Stack}
                alt=""
                width="100%"
                className="w-[30px] h-[30px]"
              />
              <div
                className=" border-r-[1px] border-tertiary  h-[100px]
              "
              ></div>
            </div>
            <div>
              <h3 className="text-[24px] text-black font-GeneralSans font-bold mb-2">
                24/7 Support
              </h3>
              <p className="text-[18px] text-tertiary font-GeneralSans font-light max-sm:text-[14px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 col-span-1 ">
            <div className="flex flex-col items-center  ">
              <img
                src={Star}
                alt=""
                width="100%"
                className="w-[30px] h-[30px]"
              />
              <div
                className=" border-r-[1px] border-tertiary  h-[100px]
              "
              ></div>
            </div>
            <div>
              <h3 className="text-[24px] text-black font-GeneralSans font-bold mb-2">
                13+ Years of Experience
              </h3>
              <p className="text-[18px] text-tertiary font-GeneralSans font-light max-sm:text-[14px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={ManFe}
        alt=""
        className=" absolute  top-[-50px] left-[-40px]  w-[200px] max-vmd:hidden  "
      />
      <img
        src={WomenFe}
        alt=""
        className="absolute  top-[160px] right-[-20px] w-[200px] max-vmd:hidden  "
      />
    </div>
  </section>
);
export default Whyus;
