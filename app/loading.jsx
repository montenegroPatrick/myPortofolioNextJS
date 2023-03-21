"use client";
import { motion, useMotionValue, useTime, useTransform } from "framer-motion";

export default function Loading() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <motion.h1
        variants={container}
        className=" text-white p-5"
        initial="hidden"
        animate="visible"
      >
        {[".", ".", "."].map((point, index) => (
          <motion.span key={index} variant={item}>
            {point}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
