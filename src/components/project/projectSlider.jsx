"use client";
import MyToolTip from "./MyToolTip";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/logo.png";
import { motion } from "framer-motion";
function ProjectPrez({ repos }) {
  const [x, setX] = useState(0);
  return (
    <div className="flex flex-row flex-wrap max-w-full p-2 m-5">
      {repos.map((repo) => (
        <>
          <MyToolTip content={repo.name} name={repo.name}>
            <div key={repo.id}>
              <Link
                href={repo.html_url}
                target="_blank"
                className="group relative"
              >
                <motion.div>
                  <Image
                    src={logo}
                    alt={repo.name}
                    width={400}
                    height={400}
                    className="group-hover:opacity-40 group-hover:scale-75"
                  />

                  <div className="opacity-0 transform -translate-x-60 absolute top-0 left-0 group-hover:opacity-100 group-hover:translate-x-20 duration-500">
                    <p>ce projet...</p>
                    <p>signé by </p>
                  </div>
                </motion.div>
              </Link>
            </div>
          </MyToolTip>
        </>
      ))}
    </div>
  );
}

export default ProjectPrez;
