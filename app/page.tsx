"use client"
import Home from '@/Components/Home'
import React from 'react'
import Drag from "@/Components/Common/CursorFollower/Drag"
import { useMotionValue, useMotionValueEvent, useScroll} from "motion/react"
import About from '@/Components/About'
import Contact from '@/Components/Contact'

const Page = () => {
  const { scrollYProgress } = useScroll();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page progress: ", latest);
  });


  return (
    <div className='w-[100%] h-full relative'>
      <Drag divX={x} divY={y} />
      <Home x={x} y={y} scrollYProgress={scrollYProgress} />
      {/* <About x={x} y={y} scrollYMainProgress={scrollYProgress} /> */}
      <About />
      {/* <Contact scrollYMainProgress={scrollYProgress} /> */}
      <Contact />
    </div>
  )
}

export default Page