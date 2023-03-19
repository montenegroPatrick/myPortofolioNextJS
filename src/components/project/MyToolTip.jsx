"use client";
import { Tooltip, Button } from "@material-tailwind/react";
import { useState } from "react";

export default function MyTooltip({ children, content }) {
  return (
    <Tooltip
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
