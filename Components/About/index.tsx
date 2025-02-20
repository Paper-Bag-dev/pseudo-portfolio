import React, { useRef } from "react";
import * as motion from "motion/react-client";
import BirdMarquee from "../Common/BirdMarquee/BirdMarquee";
import { useScroll, useTransform, MotionValue } from "motion/react";
import Slider from "../Slider";

// interface Props {
//   x: MotionValue<number>;
//   y: MotionValue<number>;
//   scrollYMainProgress: MotionValue<number>;
// }

// const typeBird3 = [
//   "lbr",
//   "lbr",
//   "lbr",
//   "lbr",
//   "lbr",
//   "lbr",
//   "lbr",
//   "lbr",
//   "lbr",
//   "lbr",
//   "lbr",
//   "lbr",
// ];

const typeBird4 = [
  "br",
  "br",
  "br",
  "br",
  "br",
  "br",
  "br",
  "br",
  "br",
  "br",
  "br",
  "br",
];

const typeBird5 = [
  "dbr",
  "dbr",
  "dbr",
  "dbr",
  "dbr",
  "dbr",
  "dbr",
  "dbr",
  "dbr",
  "dbr",
  "dbr",
  "dbr",
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });


  return (
    <>
    <motion.div
      ref={containerRef}
      className="relative flex flex-col w-full overflow-x-hidden overflow-y-hidden bg-AboutBg text-homeText"
    >
      <TitleText myScroll={scrollYProgress} />

      <div className="">
        <div className="container z-[0] flex flex-col relative">
          <div className="h-full overflow-hidden">
            <div className="bg-[#33251d]">
              <BirdMarquee types={typeBird4} duration={34} />
            </div>
            {Array.from({ length: 8 }).map((_, index) => (
              <BirdMarquee
                key={index}
                types={typeBird5}
                duration={38 + index * 2}
              />
            ))}
          </div>

          <div className="absolute flex w-full max-h-full overflow-hidden bottom-12 left-[3.5rem]">
            <motion.div className="w-[24rem] z-[2] h-[35rem] pt-14 overflow-hidden text-xl text-[#A79890] py-6 text-right">
              Welcome to my creative space! As a frontend developer with a
              passion for design and animations, I love crafting visually
              engaging and interactive experiences. This site is a showcase of
              my ability to blend aesthetics with functionality, using motion
              and UI elements to create immersive digital interactions. Every
              animation and design here reflects my dedication to pushing the
              boundaries of frontend development. Dive in and explore!
            </motion.div>
            <div className="relative h-full">
              <div className="relative">
                <motion.div
                  className="absolute bg-[#755a4b] top-[1vh] z-[2] left-[2rem] w-7"
                  initial={{ scale: 0, height: "0rem" }}
                  whileInView={{
                    scale: [0, 1, 1],
                    height: ["0rem", "2rem", "33rem"],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    times: [0, 0.4, 1],
                    delay: 1,
                  }}
                  viewport={{ once: true }}
                />

                <motion.div
                  className="absolute bg-[#642704] top-[3vh] z-[1] left-[1rem] w-7"
                  initial={{ scale: 0, height: "0rem" }}
                  whileInView={{
                    scale: [0, 1, 1],
                    height: ["0rem", "2rem", "33rem"],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    times: [0, 0.4, 1],
                    delay: 1,
                  }}
                  viewport={{ once: true }}
                />
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

const TitleText = ({ myScroll }: { myScroll: MotionValue<number> }) => {
  const y = useTransform(myScroll, [0, 1], [0, 350]);
  return (
    <motion.div className="sticky top-0 w-full z-[1]" style={{ y }}>
      <span className="font-joseSans font-bold text-[#765b4c] z-[2] text-9xl absolute right-[3rem] top-[4.5rem]">
        ABOUT
      </span>
      <span className="font-joseSans font-bold text-[#642704] z-[1] absolute text-9xl right-[4rem] top-[5rem]">
        ABOUT
      </span>
      <motion.div
        initial={{ scaleX: 0.2 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 4.5,
          ease: "easeOut",
        }}
        style={{ transformOrigin: "right" }}
        viewport={{ once: true }}
        className=" bg-[#411e0a]  absolute top-[6rem] w-[36rem] right-0 z-[1] h-6"
      />
      <motion.div
        initial={{ scaleX: 0.2 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 4.5,
          ease: "easeOut",
          delay: 0.8,
        }}
        style={{ transformOrigin: "right" }}
        viewport={{ once: true }}
        className=" bg-[#411e0a] absolute  top-[8.5rem] w-[34rem] right-0 z-[1] h-6"
      />
    </motion.div>
  );
};

export default About;
