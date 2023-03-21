import React from "react";
import logo from "../../../public/logo.png";
import "./styles.css";
import bureau from "../../../public/bureau.jpeg";
import patrickTrafiquey from "../../../public/patrick-trafiquey.png";
import "./styles.css";
import Image from "next/image";
function BackgroundImagePrez() {
  return (
    <div className="persentation w-screen bg-fixed h-screen border-white-200 border-2 flex p-10 justify-left justify-between">
      <section className="flex flex-grow px-5 py-5 lg:w-3/6 justify-center flex-col gap-4  text-white ">
        <h1 className="font-bold text-5xl md:text-7xl lg:text-9xl">
          Montenegro Patrick
        </h1>
        <h2 className="text-2xl italic md:text-5xl lg:text-7xl my-10 ">
          Développeur <strong>Front-End</strong>
        </h2>
        <p className="w-fulltext-md text-right pb-5 ">
          Bonjour, voici mon Portofolio
        </p>
        <div className="border-b-4 border-b-white w-full mt-10" />
      </section>

      <Image
        className="hidden md:block border-4 mr-4 mt-12 rounded-xl h-96 border-white"
        src={patrickTrafiquey.src}
        alt="patrick"
        height="50"
        width="300"
      />
    </div>
  );
}

export default BackgroundImagePrez;
