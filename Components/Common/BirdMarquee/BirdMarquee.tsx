import React from "react";
import * as motion from "motion/react-client"
import BirdPic from "../Bird";

interface Props {
  types: string[];
  duration: number;
}

const BirdMarquee = ({ types, duration }: Props) => {
  return (
    <div className="container mx-auto h-[8rem] overflow-y-hidden overflow-x-hidden">
      <div className="flex">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex"
        >
          {types.map((type, index) => {
            return <BirdPic width={130} height={130} type={type} key={index} />;
          })}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex"
        >
          {types.map((type, index) => {
            return <BirdPic width={130} height={130} type={type} key={index} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default BirdMarquee;
