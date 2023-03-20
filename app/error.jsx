"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-row justify-center items-center w-screen h-screen font-semibold text-white bg-black divide-x-4 gap-5 flex-wrap">
      <h2>Something went wrong! </h2>

      <button
        className=" p-3 rounded-lg shadow-2xl bg-white text-black hover:saturate-400 hover:opacity-60 duration-500"
        type="button"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
