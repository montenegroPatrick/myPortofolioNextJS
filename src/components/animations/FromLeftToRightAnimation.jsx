"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
/**
 * Animates children components from left to right when they come into view using Framer Motion library.
 *
 * @param {Object} props - The component properties.
 * @param {React.RefObject} props.refArg - A reference object used to detect if the component is in view or not.
 * @param {string} props.classes - CSS classes applied to the animated div element.
 * @returns {JSX.Element} A React JSX element that animates its children from left to right when it comes into view.
 */
function FromLeftToRightAnimation({ children, refArg, classes }) {
  const inView = useInView(refArg);
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
