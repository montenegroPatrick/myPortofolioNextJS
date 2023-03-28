"use client";
import { Tooltip } from "@material-tailwind/react";

export default function MyTooltip({ children, content }) {
  return (
    <Tooltip
      className="bg-green-800/20 text-gray-700 text-xl rounded-full px-10  shadowBox italic font-bold"
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
