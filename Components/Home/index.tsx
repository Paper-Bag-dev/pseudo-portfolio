import React from "react";
import BirdMarquee from "../Common/BirdMarquee/BirdMarquee";
import * as motion from "motion/react-client";
import {
  MotionValue,
  useSpring,
  useTransform,
} from "motion/react";

interface Props {
  x: MotionValue<number>;
  y: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}

const typeBird1 = [
  "w",
  "gr",
  "w",
  "w",
  "gr",
  "w",
  "gr",
  "w",
  "w",
  "gr",
  "w",
  "gr",
];
const typeBird2 = [
  "bl",
  "dg",
  "dg",
  "bl",
  "dg",
  "bl",
  "dg",
  "dg",
  "bl",
  "dg",
  "bl",
  "dg",
];

const Home = ({ x, y, scrollYProgress }: Props) => {
  const smoothX = useSpring(x, {
    stiffness: 100,
    damping: 15,
    restDelta: 0.001,
  });
  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 15,
    restDelta: 0.001,
  });

  // const pathTransform = useTransform(
  //   [smoothX, smoothY],
  //   ([latestX, latestY]) => {

  //     return {
  //     x: (latestX as number) * 0.5,
  //     y: (latestY as number) * 0.5,
  //   }}
  // );

  const clipPath = useTransform(
    [smoothX, smoothY],
    ([latestX, latestY]) =>
      `circle(70px at ${(latestX as number) + 50}px ${
        (latestY as number) - 50 + scrollYProgress.get() * 1000
      }px)`
  );

  return (
    <div id="home" className="flex flex-col w-full h-full overflow-x-hidden overflow-y-hidden bg-homeBg text-homeText z-[0] relative">
      {/* The background lines */}

      {/* Horizontal */}
      <motion.div
        initial={{ scaleX: 0.5, x: -100 }}
        animate={{ scaleX: [0.5, 0.5, 1], x: [-100, 0, 0] }}
        transition={{
          duration: 4,
          times: [0, 0.2, 0.8],
          ease: "easeOut",
        }}
        style={{
          transformOrigin: "left",
          y: 0,
        }}
        className="absolute bg-[#3D4048] top-[44vh] left-[2vw] w-[58rem] rounded-full z-[998] h-[1.5px]"
      />
      {/* Circle */}
      <motion.div
        initial={{ scaleX: 0.7, scaleY: 0.7, x: -30 }}
        animate={{
          scaleX: [0.7, 0.8, 1],
          scaleY: [0.7, 0.8, 1],
          x: [-30, -10, 0],
        }}
        transition={{
          duration: 4,
          times: [0, 0.2, 0.8],
          ease: "easeOut",
        }}
        style={{ transformOrigin: "center" }}
        className="absolute bg-transparent top-[10vh] left-[2.5vw] w-[20rem] h-[20rem] border-2 border-[#3D4048] rounded-full"
      />
      {/* Vertical */}
      <motion.div
        initial={{ scaleX: 0.5, y: 0 }}
        animate={{ scaleY: [0.2, 0.5, 1], y: [0, 0, 0] }}
        transition={{
          duration: 4,
          times: [0, 0.2, 0.8],
          ease: "easeOut",
        }}
        style={{ transformOrigin: "top" }}
        className="absolute bg-[#3D4048] top-[6vh] left-[13.5vw] h-[25rem] w-[2px]"
      />

      <div className="flex justify-between w-full pl-[32rem] pr-[26rem] pt-6 h-24 text-2xl z-[998] text-[#3D4048]/50">
        <button className="hover:text-[#3d4048]">Home</button>
        <button className="hover:text-[#3d4048]">About</button>
        <button className="hover:text-[#3d4048]">Contact</button>
      </div>

      <div className="w-full h-full z-[1] relative">
        <div className="absolute inset-0 z-[-1]">
          <motion.div
            className="w-full h-full"
            style={{
              clipPath: clipPath,
            }}
          >
            <div className="flex flex-wrap w-full h-full gap-1 overflow-hidden overflow-y-hidden">
              {Array.from({ length: 7000 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#c8c8d0]" />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex  z-[1] ">
          <div className="flex-grow w-2/3">
            <div className="flex flex-col py-12 pl-12">
              <div className="flex">
                <span className="text-[150px] leading-[1.5] h-48 font-joseSans text-[#3d4048] font-bold">
                  INNOVATE
                </span>
                <motion.div
                  initial={{ y: 0, scaleY: 1 }}
                  animate={{
                    y: [0, 24, 24],
                    scaleY: [1, 1.2, 1],
                    transformOrigin: ["top", "bottom", "bottom"],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                    repeatType: "reverse",
                  }}
                  className="w-7 bg-[#ff4444] h-24 mt-10 ml-5"
                />
              </div>

              <div className="flex flex-row-reverse">
                <span className="font-joseSans text-[65px] leading-[1.5] font-bold text-[#3d4048] ">
                  καινοτομώ
                </span>
              </div>
            </div>
            <div className="flex justify-between flex-grow w-full pt-12">
              <div className="w-64 h-full pl-2 text-lg">
                <motion.div
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 2 }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 3,
                    repeatType: "reverse",
                  }}
                  style={{ transformOrigin: "left" }}
                  className="w-[10rem] bg-[#ff4444] h-2 mb-3"
                />
                Crafting seamless UI/UX with interactive animations that enhance
                user engagement.
              </div>
              <div className="w-64 pt-5 text-lg">
                Blending motion and design to create immersive digital
                experiences.
              </div>
              <div className="w-64 pt-5 text-lg">
                Every detail is thoughtfully designed to push the boundaries of
                frontend creativity.
              </div>
            </div>
          </div>

          <div className="w-full pr-20 text-lg pl-28 py-36 text-homeText">
            Bringing ideas to life through motion and design. This site is a
            glimpse into my creative world, where animations meet seamless UI to
            craft engaging digital experiences. Every detail, from typography to
            transitions, is thoughtfully designed to enhance interactivity and
            aesthetics. Explore and see my work in action.
          </div>
        </div>
      </div>

      <div className="container">
        <BirdMarquee types={typeBird1} duration={20} />
        <BirdMarquee types={typeBird2} duration={24} />
      </div>
    </div>
  );
};

export default Home;
