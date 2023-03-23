import React from "react";
import logo from "../../../public/logo.png";
import "./styles.css";
import bureau from "../../../public/bureau.jpeg";
import patrick from "../../../public/patrick.jpg";
import patrickTrafiquey from "../../../public/patrick-trafiquey.png";
import "./styles.css";
import Image from "next/image";
function BackgroundImagePrez() {
  return (
    <div className="w-full h-screen border-b-2 rounded-3xl presentation flex p-20 justify-left justify-between mt-16">
      {/* <Image
        className="hidden dark:z-0 shadowBox md:block mr-4 mt-12 rounded-3xl h-96 border-gray-500"
        src={patrick.src}
        alt="patrick"
        height="50"
        width="400"
      /> */}
      <section className="flex mt-5 presentationShadow rounded-3xl flex-grow px-5 py-5 lg:w-3/6 flex-col xl:flex-row lg:flex-nowrap justify-between gap-2">
        <div className="w-fit -z-10 dark:z-0 text-5xl xl:text-9xl font-bold">
          <h1 className=" pt-6 border-gray-700 dark:border-blue-gray-700  text-gray-800 dark:text-gray-500 font-mono">
            Montenegro Patrick
          </h1>
          <h2 className="text-center my-2 font-cantarell text-gray-800 dark:text-gray-500 mb-16">
            Développeur{" "}
            <strong className="text-gray-800 dark:text-gray-500">
              Front
              <span className=" text-blue-gray-800/[0.7]">-</span>
              End
            </strong>
          </h2>
        </div>
        <div className="text-xl -z-10 dark:z-0 h-fit w-full xl:w-1/2 shadowBox p-10 font-bold space-y-36 rounded-lg lg:text-5xl text-justify flex flex-col gap-2 pb-5  text-brown-900 dark:text-gray-300/[0.8] font-delicious">
          <p>Portofolio</p>
          <p>FROM BASTIA WITH LOVE</p>
          <p>BEYOND THE SEA </p>
        </div>
      </section>
    </div>
  );
}

export default BackgroundImagePrez;
