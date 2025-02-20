import React from "react";
// import { MotionValue } from "motion/react";
import BirdPic from "../Common/Bird";
import { LiaGithubSquare } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import { LiaMedium } from "react-icons/lia";
import { BiLogoUpwork } from "react-icons/bi";

// interface Props {
//   scrollYMainProgress: MotionValue<number>;
// }

const Contact = () => {
  return (
    <div className="flex h-screen z-[0] bg-black w-full relative">
      {/* first col */}
      <div className="flex flex-col w-full">
        <span className="w-full mt-4 font-bold text-8xl font-joseSan">
          CONTACT ME
        </span>

        {/* <div className="w-[38rem] h-6 bg-transparent border-2 border-white/90" /> */}
        <div>
          <CustomBirds birdLength={5} />
          <CustomBirds birdLength={4} />
          <CustomBirds birdLength={4} />
          <CustomBirds birdLength={3} />
          <CustomBirds birdLength={2} />
        </div>
        <div className="flex-grow" />
        {/* <div className="w-[30rem] h-6 bg-transparent border-2 border-white/90" /> */}
      </div>

      {/* second column */}
      <div className="w-1/3 h-full"></div>

      {/* third column */}
      <div className="h-full ">
        <div className="pt-2">
          <div className="flex flex-row-reverse">
            {/* <div className="w-[17rem] h-6 bg-transparent border-2 border-white/90" /> */}
          </div>
          <CustomBirds rev={true} birdLength={2} />
          <CustomBirds rev={true} birdLength={3} />
          <CustomBirds rev={true} birdLength={4} />
          <CustomBirds rev={true} birdLength={4} />
          <CustomBirds rev={true} birdLength={5} />
        </div>
        <div className="h-1 mt-4 bg-white/60" />
        <div className="flex flex-col items-start pt-4 text-white/80">
          <div className="flex justify-between w-full gap-3 px-2 text-5xl">
            <LiaLinkedin />
            <LiaGithubSquare />
            <LiaInstagram />
            <BsTwitterX className="mt-2 text-3xl" />
            <LiaMedium />
            <BiLogoUpwork />
          </div>

          <div className="flex justify-around w-full mt-4 text-lg font-joseSans">
            <div>
              mail: <span className="text-white">vikalpsh1234@gmail.com</span>
            </div>
            <div>
              contact: <span className="text-white">+91 9900233006</span>
            </div>
            <span className="text-lg underline cursor-pointer font-joseSans">resume</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomBirds = ({
  birdLength,
  rev = false,
}: {
  birdLength: number;
  rev?: boolean;
}) => {
  return (
    <div className={rev ? "flex flex-row-reverse" : "flex"}>
      {Array.from({ length: birdLength }).map((_, index) => (
        <BirdPic type="ln" height={120} width={120} key={index} />
      ))}
    </div>
  );
};

export default Contact;
