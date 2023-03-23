"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
  Switch,
} from "@material-tailwind/react";
import Link from "next/link";
import { WiMoonNew, WiMoonAltWaningCrescent5 } from "react-icons/wi";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import logo from "../../../public/logo.png";
import "./style.css";
import Image from "next/image";

export default function Header({ dark, setDarkMode }) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const links = [
    {
      url: "/",
      name: "portofolio",
      id: "1",
    },
    {
      url: "/contact",
      name: "contact",
      id: "2",
    },
    {
      url: "/cv",
      name: "cv",
      id: "3",
    },
  ];
  const navList = (
    <ul className="mb-4 mt-2 p-4 flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-right lg:gap-4 ">
      {links.map((link) => (
        <Typography
          key={link.id}
          as="li"
          variant="small"
          color="blue-gray"
          className="dark:text-gray-200 italic text-gray-700 text-md font-semibold lg:text-lg mr-5 hover:-translate-y-1 hover:scale-110 duration-100"
        >
          <Link
            href={link.url}
            className="p-2 dark:bg-white/[0.1] bg-gray-200/[0.2] shadowBox rounded-xl"
          >
            {link.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <nav className="p-5 mx-2 mt-2 w-screen fixed mb-2 rounded-lg lg:w-screen py-2 px-4 lg:px-6 lg:py-2 z-10 duration-700">
      <div className="flex justify-between">
        <div className="w-96 ml-10 justify-between flex flex-row cursor-pointer p-5">
          <div className="flex flex-rox gap-4">
            {dark ? (
              <WiMoonAltWaningCrescent5 className="h-7 w-7 text-white" />
            ) : (
              <WiMoonNew className="h-7 w-7 text-white" />
            )}
            <Switch
              onClick={() => setDarkMode(!dark)}
              color={dark ? "gray" : "blue-gray"}
              className="text-black rounded-lg shadowBox dark:text-white/[0.3] hover:scale-150 duration-500"
            />
          </div>
          <Link
            href="https://github.com/montenegroPatrick"
            target="_blank"
            alt="github"
          >
            <BsGithub className="text-gray-800/[0.7] rounded-lg shadowBox dark:text-white/[0.3] hover:scale-150 duration-500 lg:w-5 lg:h-5" />
          </Link>
          <Link
            href="https://www.facebook.com/patrick.montenegro2b/"
            alt="facebook"
            target="_blank"
          >
            <BsFacebook className="text-gray-800/[0.7] rounded-lg shadowBox dark:text-white/[0.3] hover:scale-150 lg:w-5 duration-500 lg:h-5" />
          </Link>{" "}
          <Link
            href="https://www.linkedin.com/feed/"
            alt="linkedIn"
            target="_blank"
          >
            <BsLinkedin className="text-gray-800/[0.7] rounded-lg shadowBox dark:text-white/[0.3] hover:scale-150 duration-500 lg:w-5 lg:h-5" />
          </Link>
        </div>

        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="flex justify-end">{navList}</div>
      </MobileNav>
    </nav>
  );
}
