"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Slider = () => {
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(false);

  return (
    <div className="z-[2] absolute left-[5rem] top-[0.5rem] gap-6 overflow-x-hidden">
      {/* Left Scroll Button */}
      <div
        onMouseEnter={() => setScrollLeft(true)}
        onMouseLeave={() => setScrollLeft(false)}
        className="absolute w-32 h-32 z-[3] flex items-center justify-center top-[13rem] group"
      >
        <div className="z-[3] absolute w-16 h-16 text-gray-300/40 flex items-center justify-center rounded-full group-hover:bg-[#685043]/100 group-hover:text-white transition-all duration-300">
          <FaArrowLeft className="w-8 h-8" />
        </div>
      </div>

      {/* Right Scroll Button */}
      <div
        onMouseEnter={() => setScrollRight(true)}
        onMouseLeave={() => setScrollRight(false)}
        className="absolute w-32 h-32 z-[3] flex items-center justify-center left-[55rem] top-[13rem] group"
      >
        <div className="z-[3] absolute w-16 h-16 text-gray-300/40 flex items-center justify-center rounded-full group-hover:bg-[#685043]/100 group-hover:text-white transition-all duration-300">
          <FaArrowRight className="w-8 h-8" />
        </div>
      </div>

      {/* Scrollable Content */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: scrollLeft ? "5%" : scrollRight ? "-50%" : "0%" }}
        transition={{ duration: 3, ease: "easeOut" }}
        drag="x"
        dragConstraints={{ left: -1000, right: 50 }}
        className="flex gap-4 overflow-x-auto"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="w-[24rem] bg-black h-[34rem] flex items-center justify-center"
          >
            asdas
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
