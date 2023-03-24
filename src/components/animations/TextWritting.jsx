import {
  motion,
  motionValue,
  useAnimation,
  useCycle,
  useInView,
  useTime,
  useTransform,
} from "framer-motion";
import React, { useEffect } from "react";

function TextWritting({ text, classes, refArg }) {
  const textSplit = text.split("");
  console.log(textSplit);
  const time = useTime();
  const rotate = useTransform(time, [0, 1000], [0, 360], { clamp: false });
  return (
    <motion.h1 className={classes}>
      {textSplit.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            repeat: "reverse",
            repeat: 2,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default TextWritting;
