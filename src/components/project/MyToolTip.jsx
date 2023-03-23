"use client";
import { Tooltip, Button } from "@material-tailwind/react";
import { useState } from "react";

export default function MyTooltip({ children, content }) {
  return (
    <Tooltip
      className="bg-blue-gray-800/50 text-gray-300 text-xl rounded-full px-10  shadowBox italic font-bold"
      content={content}
      animate={{
        mount: { scale: 1.5, y: 0 },
        unmount: { scale: 0, y: 40 },
      }}
    >
      {children}
    </Tooltip>
  );
}
