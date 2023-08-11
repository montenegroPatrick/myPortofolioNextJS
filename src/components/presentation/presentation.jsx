"use client";
import React, { useRef } from "react";
import FromLeftToRightAnimation from "../animations/FromLeftToRightAnimation";
import FromRightToLeftAnimation from "../animations/FromRightToLeftAnimation";
import TextWritting from "../animations/TextWritting";
function Presentation() {
  const divName = useRef();
  return (
    <main>
      <section
        ref={divName}
        className="flex mt-20 h-screen w-screenrounded-3xl dark:bg-transparent px-10 justify-center items-center "
      >
        <FromLeftToRightAnimation refArg={divName}>
          <div className="flex w-full justify-center dark:z-0 text-5xl md:text-9xl h-full bg-transparent font-extrabold p-5 rounded-3xl font-titilliumWeb translate-z-10 ">
            <div>
              <TextWritting
                refArf={divName}
                text="Développeur Web"
                classes="pt-4 border-gray-700 dark:border-blue-gray-700  font-bold text-green-500/30  dark:text-gray-500 "
              />
              <TextWritting
                refArf={divName}
                text="Front-end"
                classes="pt-4 border-gray-700 italic text-right dark:border-blue-gray-700 text-black/50 text-gray/10  dark:text-gray-500 "
              />
            </div>
          </div>
        </FromLeftToRightAnimation>
      </section>
      <section className="h-full w-full flex items-center justify-center">
        <FromRightToLeftAnimation
          refArg={divName}
          classes="bg-transparent text-white  text-sm dark:z-0 h-fit w-fit rounded-xl lg:text-xl xl:text-5xl text-right flex flex-col dark:text-gray-300/[0.8] font-kanit"
        >
          <p className="text-center textBackground px-20">
            Welcome, ici vous trouverez mes projets publics sur Github, ainsi
            que mon cv.
            <br />
            N'hésitez pas à me contacter via le formulaire.
            <br />{" "}
          </p>
        </FromRightToLeftAnimation>
      </section>
    </main>
  );
}

export default Presentation;
