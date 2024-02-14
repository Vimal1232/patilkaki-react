import React from "react";
import { useTimer } from "react-timer-hook";

const Countdown = ({ expiryTimestamp }) => {
  const { totalSeconds, seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div>
      <div className=" text-[108px] font-GeneralSans font-bold text-secondary max-sm:text-[56px]  ">
        <span className="    px-3 py-2 rounded-[4px] ">{minutes}</span>
        <span className=""> : </span>
        <span className="  px-3 py-2 rounded-[4px] ">{seconds}</span>
      </div>
    </div>
  );
};

export default Countdown;
