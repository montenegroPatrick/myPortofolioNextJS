"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";

function FromRightToLeftAnimation({ children, refArg, classes }) {
  const inView = useInView(refArg);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "100vw",
        transition: {
          type: "spring",
          duration: 1,
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

export default FromRightToLeftAnimation;
