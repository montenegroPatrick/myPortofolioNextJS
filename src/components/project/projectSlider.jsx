"use client";
import MyToolTip from "./MyToolTip";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";
function ProjectPrez({ repos }) {
  return (
    <div className="flex flex-row flex-wrap max-w-full p-2">
      {repos.map((repo) => (
        <>
          <MyToolTip content={repo.name} name={repo.name}>
            <div className="hover:transition translate-y-5" key={repo.id}>
              <Link href={repo.html_url} target="_blank">
                <Image src={logo} alt={repo.name} width={100} height={100} />
              </Link>
            </div>
          </MyToolTip>
        </>
      ))}
    </div>
  );
}

export default ProjectPrez;
