"use client";
import MyToolTip from "./MyToolTip";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import Loading from "@/app/loading";
import Error from "@/app/error";
import { useRepos } from "../query-hooks/FetchRepos";

function ProjectPrez() {
  const divEl = useRef();
  const inView = useInView(divEl);
  console.log(inView);
  const animation = useAnimation();
  const repos = useRepos();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.7,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
        transition: {
          type: "spring",
          duration: 2,
        },
      });
    }
  }, [inView]);

  return (
    <>
      {repos.isSuccess && (
        <div
          ref={divEl}
          className="flex flex-row flex-wrap gap-12 ml-14 justify-center p-2 "
        >
          <h1 className="border-b-black dark:border-b-white flex justify-center w-full mr-8 mb-4 p-4 place-content-center text-normal md:text-xl lg:text-2xl italic text-gray-800 dark:text-gray-300/[0.6] "></h1>
          {repos.data.map((repo) => (
            <MyToolTip key={repo.id} content={repo.name} name={repo.name}>
              <motion.div
                className="group shadowBox border-2 dark:bg-blue-gray-900/50 border-collapse border-black/10 rounded-3xl relative w-full md:w-1/3 h-96"
                animate={animation}
              >
                <Link href={repo.html_url} target="_blank" className="">
                  <div className="rounded-xl opacity-30" key={repo.id}>
                    <div
                      className="rounded-xl group-hover:scale-200 duration-500 border-stone-700"
                      style={{
                        postion: "relative",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="w-full h-full group-hover:opacity-0 absolute top-0 left-0 flex flex-col items-center justify-between gap-4 -z-10 group-hover:duration-700 ">
                        <h1 className="text-2xl dark:text-white font-semibold font-delicious p-10">
                          {repo.name}
                        </h1>
                        <ul className="flex flex-end flex-row flex-wrap p-10">
                          {repo.topics.map((topic) => (
                            <li
                              key={topic.id}
                              className="mt-3 text-black dark:text-white text-sm  mr-2 bg-lime-50/[0.1] px-2 py-1 shadowBox rounded-xl"
                            >
                              #{topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="w-full h-full dark:text-white text-white opacity-0 flex flex-col rounded-3xl justify-around -translate-x-20 group-hover:opacity-100 bg-black/[0.3] group-hover:translate-x-0 duration-700 delay-100">
                  <section>
                    <h2 className="text-xg font-semibold p-8 text-justify flex flex-col gap-4">
                      <span className="font-bold text-7xl">{">"}</span>
                      {repo.description}
                    </h2>
                  </section>
                  <section>
                    <h3 className="text-sm p-4 text-right font-semibold">
                      dernière MAJ : {repo.updated_at}
                    </h3>
                  </section>
                </div>
              </motion.div>
            </MyToolTip>
          ))}
        </div>
      )}
    </>
  );
}

export default ProjectPrez;
