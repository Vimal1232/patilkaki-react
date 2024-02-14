import React, { useState, useEffect } from "react";
import { Navbar, Home, Aboutus, Whyus, Hurryup, CTA } from "./Layout";
import Modal from "react-modal";
import { motion } from "framer-motion";

const App = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const modalVariants = {
    hidden: { y: "100vh" },
    visible: {
      y: "22vh",
      transition: { type: "spring", stiffness: 30, duration: 1 },
    },
  };

  return (
    <div className="">
      <Modal
        className="flex justify-center items-center bg-transparent  w-[200px] h-[400px] mx-auto"
        isOpen={ModalOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: "transparent",
            outline: "none",
          },
          content: {
            outline: "none",
          },
        }}
      >
        <motion.div
          className=" card2 p-20 rounded-[12px] max-sm:p-3 "
          variants={modalVariants}
          initial="hidden"
          animate={ModalOpen ? "visible" : "hidden"}
        >
          <div className="flex items-center justify-center flex-col gap-8">
            <div className="">
              <h1 className="text-[56px] font-GeneralSans font-bold text-black">
                Sign In
              </h1>
            </div>
            <div className="">
              <form
                action=""
                className="flex flex-col justify-center items-center gap-5"
              >
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[24px] font-generalSans font-semibold text-primarylight"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-primarylight px-4 py-2 rounded-[12px]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-[24px] font-generalSans font-semibold text-primarylight"
                  >
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    className="bg-primarylight px-4 py-2 rounded-[12px]"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className=" flex justify-center items-center mt-3 gap-5">
            <button className="bg-primary text-white text-[18px] font-GeneralSans font-semibold px-3 py-2 rounded-[4px] hover:bg-primaryhover duration-300 ease-in-out">
              Sign in
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="text-white text-[18px] font-GeneralSans font-semibold px-3 py-2 rounded-[4px] hover:bg-primaryhover duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </motion.div>
      </Modal>

      <div className="py-6">
        <Navbar />
      </div>
      <div className="mb-20 max-sm:mb-10">
        <Home />
      </div>
      <div className="pt-20 max-sm:pt-5 mb-20 max-sm:mb-10">
        <Aboutus />
      </div>
      <div className="pt-20 max-sm:pt-5 mb-20 max-sm:mb-10">
        <Whyus />
      </div>
      <div className="pt-20 max-sm:pt-5 mb-20 max-sm:mb-10 ">
        <Hurryup />
      </div>
      <div className="pt-20 max-sm:pt-5 mb-20 max-sm:mb-10">
        <CTA />
      </div>
    </div>
  );
};
export default App;
