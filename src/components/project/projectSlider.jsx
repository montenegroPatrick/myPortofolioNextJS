"use client";
import MyToolTip from "./MyToolTip";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../../public/logo.png";
import patrick from "../../../public/patrick.jpg";
import miniJeux from "../../../public/miniJeux.png";
import chatroom from "../../../public/chatroom.png";
import patrickTrafiquey from "../../../public/patrick-trafiquey.png";
import { motion, useAnimation, useInView } from "framer-motion";
import format from "date-fns/format";
function ProjectPrez({ repos }) {
  const divEl = useRef();
  const inView = useInView(divEl);
  const animation = useAnimation();
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
  const formatDate = (date) => {
    const formattedDate = format(new Date(date), "dd/MM/yyyy");
    return formattedDate;
  };
  return (
    <div
      ref={divEl}
      className="flex flex-row flex-wrap gap-4 ml-14 justify-left p-2 "
    >
      <h1 className=" border-b-white border-b-2 flex justify-center text-white w-full ml-8 mr-8 mb-4 p-4 place-content-center text-2xl">
        PROJECT
      </h1>
      {repos.map((repo) => (
        <motion.div animate={animation}>
          <MyToolTip content={repo.name} name={repo.name}>
            <div key={repo.id}>
              <Link
                href={repo.html_url}
                target="_blank"
                className="group relative"
              >
                <div
                  className="card w-96 rounded-lg h-36 group-hover:scale-110 group-hover:block group-hover:w-fit group-hover:h-fit duration-500 border-2 border-stone-700"
                  style={{
                    postion: "relative",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="group-hover:opacity-0 shadow-lg absolute top-0 left-0 flex flex-col -z-10 group-hover:duration-700">
                    <ul className="flex flex-row flex-wrap">
                      {repo.topics.map((topic) => (
                        <li className="w-fit h-fit mt-3 text-white text-sm font-semibold ml-2 mr-2 bg-black/[0.7] px-3 py-2 rounded-xl">
                          #{topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-white opacity-0 w-96 h-32 my-auto mx-auto flex flex-col justify-between -translate-x-20 group-hover:opacity-100 bg-black/[0.8] group-hover:translate-x-0 duration-700 delay-100 p-2">
                    <section>
                      <h2 className="text-sm px-2">{repo.description}</h2>
                    </section>
                    <section>
                      <h3 className="text-md px-2 text-right">
                        dernière MAJ : {formatDate(repo.updated_at)}
                      </h3>
                    </section>
                  </div>
                </div>
              </Link>
            </div>
          </MyToolTip>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectPrez;
