"use client";
import MyToolTip from "./MyToolTip";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/logo.png";
import patrick from "../../../public/patrick.jpg";
import patrickTrafiquey from "../../../public/patrick-trafiquey.png";
import { motion } from "framer-motion";
function ProjectPrez({ repos }) {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center p-2 m-5 lg:justify-start">
      {repos.map((repo) => (
        <>
          <MyToolTip content={repo.name} name={repo.name}>
            <div key={repo.id}>
              <Link
                href={repo.html_url}
                target="_blank"
                className="group relative"
              >
                <div
                  className="w-96 h-32 group-hover:scale-75 group-hover:backdrop-blur-xl border-2 border-stone-700"
                  style={{
                    backgroundImage: `url(${patrickTrafiquey.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="text-white font-bold opacity-0 w-96 h-32 my-auto mx-auto flex flex-col justify-between -translate-x-20 group-hover:opacity-100 bg-black/[0.8] group-hover:translate-x-0 duration-700 delay-100">
                    <section>
                      <h2 className="font-bold text-xl">ce projet...</h2>
                    </section>
                    <section>
                      <h3 className="font-bold text-xl text-right">
                        signé by montenegro Patrick
                      </h3>
                    </section>
                  </div>
                </div>
              </Link>
            </div>
          </MyToolTip>
        </>
      ))}
    </div>
  );
}

export default ProjectPrez;
