"use client";
import { Tooltip, Button } from "@material-tailwind/react";
import { useState } from "react";

export default function MyTooltip({ children, content }) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <Tooltip
      open={isOpen}
      content={content}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      {children}
    </Tooltip>
  );
}
