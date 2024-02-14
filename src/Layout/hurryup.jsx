import React from "react";
import { Countdown } from "../Components";

const Hurryup = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  return (
    <section className=" px-10 max-sm:px-5  ">
      <div className=" p-16 Background rounded-[28px] max-sm:p-5 ">
        <div className="flex flex-col items-center justify-center gap-5 card p-10 max-sm:p-5">
          <div>
            <h2 className=" font-GeneralSans font-bold text-[56px] text-white max-sm:text-[30px] text-center">
              Hurry up! Limited time
            </h2>
          </div>
          <div>
            <Countdown expiryTimestamp={time} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hurryup;
