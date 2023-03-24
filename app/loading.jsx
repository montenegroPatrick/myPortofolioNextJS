"use client";
import TextWritting from "@/src/components/animations/TextWritting";
import { motion, useMotionValue, useTime, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {});
  return (
    <TextWritting
      text="..."
      classes=" w-screen h-screen flex justify-center text-3xl items-center"
    />
  );
}
