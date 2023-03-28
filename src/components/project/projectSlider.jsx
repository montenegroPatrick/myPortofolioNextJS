"use client";
import MyToolTip from "./MyToolTip";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRepos } from "../query-hooks/FetchRepos";
import FromLeftToRightAnimation from "../animations/FromLeftToRightAnimation";
import TextWritting from "../animations/TextWritting";
import BookAnimation from "../animations/bookAnimation";
import { motion, useAnimate } from "framer-motion";

function ProjectPrez() {
  const divEl = useRef();
  const repos = useRepos();
  const [indexProjectInView, setIndexProjectInView] = useState(0);
  const [scope, animate] = useAnimate();
  console.log(repos);

  return (
    <>
      {repos.isSuccess && (
        <div
          ref={divEl}
          className="flex flex-row md:gap-36 bg-gray-400 m-3 rounded-3xl lg:gap-48 h-screen justify-center items-center p-2 "
        >
          {/* <h1 className="border-b-black dark:border-b-white flex justify-center w-full mr-8 mb-4 p-4 place-content-center text-normal md:text-xl lg:text-2xl italic text-gray-800 dark:text-gray-300/[0.6] "></h1> */}
          {repos.data
            .filter((repo, index) => {
              console.log(indexProjectInView);
              return index === indexProjectInView;
            })
            .map((repo, index) => (
              <>
                <div
                  className="font-bold text-3xl md:text-5xl lg:text-9xl text-gray-200/[0.5] cursor-pointer hover:scale-110"
                  onClick={() => {
                    const indexRepos = Object.keys(repos.data);

                    console.log(indexRepos);
                    if (indexProjectInView > 0) {
                      setIndexProjectInView(indexProjectInView - 1);
                    } else {
                      setIndexProjectInView(Math.max(...indexRepos));
                    }
                  }}
                >
                  {" "}
                  {"<"}{" "}
                </div>

                <FromLeftToRightAnimation
                  key={repo.id}
                  refArg={divEl}
                  classes="group projectShadow bg-gray-400/50  dark:bg-blue-gray-900/50 border-collapse rounded-3xl md:w-1/3 w-11/12 h-3/6 "
                >
                  <MyToolTip content={repo.name} name={repo.name}>
                    <Link href={repo.html_url} target="_blank" className="">
                      <div className="rounded-xl">
                        <div className="rounded-xl group-hover:scale-200 duration-500 border-stone-700 ">
                          <div className="w-full h-full py-8 px-18 group-hover:opacity-0 absolute top-0 left-0 flex flex-col items-center justify-between gap-4 group-hover:duration-700 cursor-pointer">
                            <h1 className="text-2xl  text-white lg:uppercase font-semibold font-cantarell p-10">
                              {repo.name}
                            </h1>
                            <p className="lg:px-10 py-2 text-justify font-titilliumWeb italic text-md md:text-sm lg:text-xl text-white bg-green-900/[0.1] shadowBox w-full">
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

                <div
                  className="font-bold text-3xl md:text-5xl lg:text-9xl text-gray-200/[0.5] cursor-pointer duration-700 hover:scale-110"
                  onClick={() => {
                    console.log(indexProjectInView);
                    if (
                      indexProjectInView ===
                      Math.max(...Object.keys(repos.data))
                    ) {
                      setIndexProjectInView(0);
                      animate(scope.current, {
                        opacity: 0,
                        rotateZ: "90deg",
                        duration: 1,
                      });
                    } else {
                      setIndexProjectInView(indexProjectInView + 1);
                    }
                  }}
                >
                  {" "}
                  {">"}{" "}
                </div>
              </>
            ))}
        </div>
      )}
    </>
  );
}

export default ProjectPrez;
