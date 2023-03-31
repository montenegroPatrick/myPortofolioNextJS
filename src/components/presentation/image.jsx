"use client";
import React, { useRef } from "react";
import FromLeftToRightAnimation from "../animations/FromLeftToRightAnimation";
import FromRightToLeftAnimation from "../animations/FromRightToLeftAnimation";
import TextWritting from "../animations/TextWritting";
function BackgroundImagePrez() {
  const divName = useRef();
  return (
    <div className=" h-screen border-b-2 m-3 rounded-3xl presentation flex justify-left justify-between mt-16">
      {/* <Image
        className="hidden dark:z-0 shadowBox md:block mr-4 mt-12 rounded-3xl h-96 border-gray-500"
        src={patrick.src}
        alt="patrick"
        height="50"
        width="400"
      /> */}
      <section
        ref={divName}
        className="flex mt-5 xl:w-1/2 w-fit rounded-3xl bg-white border-2 border-gray-200 flex-grow px-10 py-10 lg:w-3/6 flex-col xl:flex-row lg:flex-nowrap gap-2"
      >
        <FromLeftToRightAnimation refArg={divName}>
          <div className=" dark:z-0 text-3xl xl:text-9xl bg-green-400/10 font-extrabold p-5 rounded-3xl font-titilliumWeb translate-z-10 ">
            <TextWritting
              refArf={divName}
              text="Montenegro"
              classes="pt-6 border-gray-700 dark:border-blue-gray-700 md:text-7xl font-bold text-green-500/30 xl:text-9xl dark:text-gray-500 "
            />
            <TextWritting
              refArf={divName}
              text="Patrick"
              classes="pt-6 border-gray-700 italic  dark:border-blue-gray-700 text-black/10 md:text-7xl text-gray/10 xl:text-9xl dark:text-gray-500 "
            />

            <h2 className="rounded-full underline text-right my-2 font-kanit text-black/30 dark:text-gray-500 mb-16">
              developer{" "}
              <strong className=" text-slate-500 dark:text-gray-500">
                Front
                <span className="text-green-900/30">-</span>
                End
              </strong>
            </h2>
          </div>
        </FromLeftToRightAnimation>
        <FromRightToLeftAnimation
          refArg={divName}
          classes="bg-gradient-to-tl from-green-500/[0.1] to-white text-white uppercase text-xl dark:z-0 h-fit w-fit xl:w-1/2 shadowBox p-5 font-extrabold space-y-36 rounded-xl lg:text-5xl text-right flex flex-col dark:text-gray-300/[0.8] font-kanit"
        >
          <p className="shadowBox bg-gradient-to-tl from-green-900/30 to-transparent text-right p-2 rounded-lg ">
            Portofolio
          </p>
          <p className="shadowBox textBackground">
            hello As a Frontend Web Developer, I bring a unique perspective to
            the table, having started my career in the show industry as a sound
            engineer before transitioning into web development. With a passion
            for new challenge and a strong foundation in JavaScript React.{" "}
          </p>
        </FromRightToLeftAnimation>
      </section>
    </div>
  );
}

export default BackgroundImagePrez;
