import React from "react";

const CTA = () => {
  return (
    <section id="Contact">
      <div>
        <div className="flex flex-col items-center justify-center text-center gap-5">
          <h1 className="text-primary text-[56px] font-GeneralSans font-bold max-sm:text-[40px]">
            Ready to get started?
          </h1>
          <p className="text-tertiary text-[18px] font-GeneralSans font-light max-sm:text-[14px]">
            Get in touch or create an account to start your journey with us.
          </p>

          <div className="flex gap-5">
            <button className="bg-primary px-3 py-2 font-GeneralSans font-bold text-white rounded-[4px] text-[18p[x] hover:bg-primaryhover duration-300 ease-in-out">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
