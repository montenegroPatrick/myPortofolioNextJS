"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

function FromLeftToRightAnimation({ children, refArg, classes }) {
  const inView = useInView(refArg);
  console.log(inView);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.7,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
        transition: {
          type: "spring",
          duration: 2,
        },
      });
    }
  }, [inView]);
  return (
    <motion.div className={classes} animate={animation}>
      {children}
    </motion.div>
  );
}

export default FromLeftToRightAnimation;
