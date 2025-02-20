"use client";
import { MotionValue, motion, useMotionValue, useSpring, frame, useMotionValueEvent } from "motion/react";
import { RefObject, useEffect, useRef } from "react";

interface Props {
  divX: MotionValue<number>;
  divY: MotionValue<number>;
}

export default function Drag({ divX, divY }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  useMotionValueEvent(x, "change", (latest) => divX.set(latest));
  useMotionValueEvent(y, "change", (latest) => divY.set(latest));

  return (
    <motion.div
      className="w-[100px] z-[999] h-[100px] bg-[#ff4444]/90 overflow-hidden shadow-xl rounded-full fixed top-0 left-0 p-4 text-sm pointer-events-none"
      ref={ref}
      style={{ x, y }}
    ></motion.div>
  );
}

const spring = { damping: 10, stiffness: 50, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY  }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        xPoint.set(clientX  - element.offsetLeft - element.offsetWidth / 2);
        yPoint.set(clientY  - element.offsetTop - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  });

  return { x, y };
}
