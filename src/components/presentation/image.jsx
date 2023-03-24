import React, { useRef } from "react";
import logo from "../../../public/logo.png";
import "./styles.css";
import bureau from "../../../public/bureau.jpeg";
import patrick from "../../../public/patrick.jpg";
import patrickTrafiquey from "../../../public/patrick-trafiquey.png";
import "./styles.css";
import Image from "next/image";
import FromLeftToRightAnimation from "../animations/FromLeftToRightAnimation";
import FromRightToLeftAnimation from "../animations/FromRightToLeftAnimation";
import TextWritting from "../animations/TextWritting";
function BackgroundImagePrez() {
  const divName = useRef();
  return (
    <div className="w-full h-full border-b-2 rounded-3xl presentation flex p-20 justify-left justify-between mt-16">
      {/* <Image
        className="hidden dark:z-0 shadowBox md:block mr-4 mt-12 rounded-3xl h-96 border-gray-500"
        src={patrick.src}
        alt="patrick"
        height="50"
        width="400"
      /> */}
      <section
        ref={divName}
        className="flex mt-5 presentationShadow rounded-3xl flex-grow px-5 py-5 lg:w-3/6 flex-col xl:flex-row lg:flex-nowrap  gap-2"
      >
        <FromLeftToRightAnimation refArg={divName}>
          <div className="w-fit dark:z-0 text-5xl xl:text-9xl font-extrabold  p-5 rounded-3xl translate-z-10 ">
            <TextWritting
              refArf={divName}
              text="Montenegro"
              classes="pt-6 border-gray-700 dark:border-blue-gray-700 md:text-7xl font-bold text-white xl:text-9xl dark:text-gray-500 font-cantarell"
            />
            <TextWritting
              refArf={divName}
              text="Patrick"
              classes="pt-6 border-gray-700 dark:border-blue-gray-700 md:text-7xl text-white xl:text-9xl dark:text-gray-500 font-cantarell"
            />

            <h2 className="rounded-full text-center my-2 font-cantarell text-white dark:text-gray-500 mb-16">
              Développeur{" "}
              <strong className=" text-slate-500 dark:text-gray-500">
                Front
                <span className=" text-blue-gray-800/[0.7]">-</span>
                End
              </strong>
            </h2>
          </div>
        </FromLeftToRightAnimation>
        <FromRightToLeftAnimation
          refArg={divName}
          classes="bg-yellow-100/[0.2] text-white uppercase text-xl dark:z-0 h-fit w-fit xl:w-1/2 shadowBox p-5 font-bold space-y-36 rounded-xl lg:text-5xl text-center flex flex-col gap-2 pb-5   dark:text-gray-300/[0.8] font-cantarell"
        >
          <p>Portofolio</p>
        </FromRightToLeftAnimation>
      </section>
    </div>
  );
}

export default BackgroundImagePrez;
