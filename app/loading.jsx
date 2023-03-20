"use client";
import { motion, useMotionValue, useTime, useTransform } from "framer-motion";

export default function Loading() {
  const time = useTime();
  const rotation = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const motionValue = useMotionValue(0);
  const opacity = useTransform(motionValue, [0, 1]);
  return (
    <motion.div
      className="bg-black w-screen h-screen flex justify-center items-center"
      style={{ rotation }}
    >
      <h1 className="text-black font-bold text-7xl p-10 rounded-xl bg-white/[0.7]">
        is loading <motion.span style={{ opacity }}>...</motion.span>
      </h1>
    </motion.div>
  );
}
