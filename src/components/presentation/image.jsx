import React from "react";
import logo from "../../../public/logo.png";
import "./styles.css";
import bureau from "../../../public/bureau.jpeg";
import patrick from "../../../public/patrick.jpg";
import patrickTrafiquey from "../../../public/patrick-trafiquey.png";
import "./styles.css";
import Image from "next/image";
function BackgroundImagePrez({ dark }) {
  return (
    <div className="w-full h-full border-b-2 rounded-3xl presentation flex p-10 justify-left justify-between mt-16">
      <Image
        className="hidden dark:z-0 shadowBox md:block mr-4 mt-12 rounded-3xl h-96 border-gray-500"
        src={dark ? patrick.src : patrickTrafiquey.src}
        alt="patrick"
        height="50"
        width="400"
      />
      <section className="flex mt-5 items-center presentationShadow rounded-3xl flex-grow px-5 py-5 lg:w-3/6 justify-center flex-col gap-2">
        <div>
          <h1 className="font-normal pt-6 border-gray-700 dark:border-blue-gray-700 text-2xl md:text-7xl text-gray-800 dark:text-gray-500 font-mono">
            Montenegro Patrick
          </h1>
          <h2 className="text-xl italic md:text-2xl text-center lg:text-5xl my-2 font-cantarell text-gray-800 dark:text-gray-500 mb-16">
            Développeur{" "}
            <strong className="text-gray-800 font-normal dark:text-gray-500">
              Front
              <span className=" text-blue-gray-800/[0.7]">-</span>
              End
            </strong>
          </h2>
        </div>
        <div className="text-md md:text-lg text-center flex flex-col gap-2 pb-5 text-gray-800 dark:text-gray-300/[0.8] font-cantarell">
          <p>Bonjour, voici mon Portofolio</p>
          <p>
            ici vous pouvez me contacter voir les projets réalisés ou en cours
            de réalisation !
          </p>
          <p>merci de votre visite, n'hésitez pas à prendre contact</p>
        </div>
      </section>
    </div>
  );
}

export default BackgroundImagePrez;
