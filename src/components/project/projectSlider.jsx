"use client";
import MyToolTip from "./MyToolTip";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import Loading from "@/app/loading";
import Error from "@/app/error";
import { useRepos } from "../query-hooks/FetchRepos";
import FromLeftToRightAnimation from "../animations/FromLeftToRightAnimation";
import Image from "next/image";

function ProjectPrez() {
  const divEl = useRef();
  const repos = useRepos();
  return (
    <>
      {repos.isSuccess && (
        <div
          ref={divEl}
          className="flex flex-row flex-wrap md:gap-5 lg:gap-0 ml-14 justify-center p-2 "
        >
          <h1 className="border-b-black dark:border-b-white flex justify-center w-full mr-8 mb-4 p-4 place-content-center text-normal md:text-xl lg:text-2xl italic text-gray-800 dark:text-gray-300/[0.6] "></h1>
          {repos.data.map((repo) => (
            <FromLeftToRightAnimation
              key={repo.id}
              refArg={divEl}
              classes="group shadowBox  bg-gradient-to-b from-green-900/30 to-transparent border-2 dark:bg-blue-gray-900/50 border-collapse border-black/10 rounded-3xl relative w-full md:w-1/3 h-96"
            >
              <MyToolTip content={repo.name} name={repo.name}>
                <Link href={repo.html_url} target="_blank" className="">
                  <div className="rounded-xl ">
                    <div
                      className="rounded-xl group-hover:scale-200 duration-500 border-stone-700"
                      style={{
                        postion: "relative",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="w-full h-full group-hover:opacity-0 absolute top-0 left-0 flex flex-col items-center justify-between gap-4 -z-10 group-hover:duration-700 cursor-pointer">
                        <h1 className="text-2xl z-50 text-white lg:uppercase font-semibold font-cantarell p-10">
                          {repo.name}
                        </h1>
                        <p className="lg:px-10 py-2 text-justify font-titilliumWeb italic text-md md:text-sm lg:text-xl text-white bg-green-900/[0.1]  shadowBox w-full">
                          {repo.description}
                        </p>
                        <ul className="flex flex-end flex-row flex-wrap p-4">
                          {repo.topics.map((topic) => (
                            <div key={topic.id}>
                              <li
                                key={topic.id}
                                className="mt-3 text-white dark:text-white text-sm mr-2 bg-lime-50/[0.1] px-2 py-1 shadowBox rounded-xl"
                              >
                                #{topic}
                              </li>
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-full bg-blue-gray-800/20 dark:text-white text-white opacity-0 flex flex-col rounded-3xl justify-around -translate-x-20 group-hover:opacity-100 group-hover:translate-x-0 duration-700 delay-100">
                    <section>
                      <h2 className="text-xl font-semibold p-8 text-justify flex flex-col gap-4">
                        <span className="font-bold text-7xl">{">"}</span>
                        GO TO
                      </h2>
                    </section>
                    <section>
                      <h3 className="text-sm p-4 text-right font-semibold">
                        last update : {repo.updated_at}
                      </h3>
                    </section>
                  </div>
                </Link>
              </MyToolTip>
            </FromLeftToRightAnimation>
          ))}
        </div>
      )}
    </>
  );
}

export default ProjectPrez;
