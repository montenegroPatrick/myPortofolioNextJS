"use client";
import { motion, useAnimation } from "framer-motion";

function BookAnimation({ children, classes }) {
  return (
    <motion.div
      className={classes}
      initial={{ zoom: "10%" }}
      animate={{ zoom: "100%", transitionDuration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default BookAnimation;
