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
import BookAnimation from "../animations/bookAnimation";

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
      url: "/projet",
      name: "projects",
      id: "2",
    },
    {
      url: "/contact",
      name: "contact",
      id: "3",
    },
    {
      url: "/cv",
      name: "cv",
      id: "4",
    },
  ];
  const navList = (
    <ul className="flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-right lg:gap-4 ">
      {links.map((link) => (
        <Typography
          key={link.id}
          as="li"
          variant="small"
          color="blue-gray"
          className="dark:text-gray-200 italic text-white text-md bg-green-900/30 font-bold lg:text-lg mr-2 rounded-lg hover:-translate-y-1 hover:scale-110 duration-200"
        >
          <Link
            href={link.url}
            className="p-2 pt-2 dark:bg-white/[0.1]  shadowBox rounded-xl"
          >
            {link.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <nav className="w-screen px-5 py-2 fixed rounded-lg lg:w-screen z-10 duration-700">
      <div className="flex justify-between ">
        <div className=" flex flex-row gap-10 cursor-pointer">
          <div className="flex flex-row gap-4">
            {dark ? (
              <WiMoonAltWaningCrescent5 className="h-7 w-7 bg-green-500/10" />
            ) : (
              <WiMoonNew className="h-7 w-7 bg-green-500/10" />
            )}
            <Switch
              onClick={() => setDarkMode(!dark)}
              color={dark ? "gray" : "blue-gray"}
              className="text-black rounded-lg shadowBox dark:text-white/[0.3] hover:scale-150 duration-500"
            />
          </div>
          <section className="flex flex-row gap-4 pt-2">
            <Link
              href="https://github.com/montenegroPatrick"
              target="_blank"
              alt="github"
            >
              <BsGithub className="text-green-900/[0.4] rounded-lg shadowBox dark:text-white/[0.3] hover:scale-150 duration-500 lg:w-5 lg:h-5" />
            </Link>
            <Link
              href="https://www.facebook.com/patrick.montenegro2b/"
              alt="facebook"
              target="_blank"
            >
              <BsFacebook className="text-green-900/[0.4] rounded-lg shadowBox dark:text-white/[0.3] hover:scale-150 lg:w-5 duration-500 lg:h-5" />
            </Link>{" "}
            <Link
              href="https://www.linkedin.com/feed/"
              alt="linkedIn"
              target="_blank"
            >
              <BsLinkedin className="text-green-900/[0.4] rounded-lg shadowBox dark:text-white/[0.3] hover:scale-150 duration-500 lg:w-5 lg:h-5" />
            </Link>
          </section>
        </div>

        <IconButton
          variant="text"
          className="h-6 w-6 bg-green-500/50 lg:hidden"
          color="green"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-10 w-6"
              stroke="white"
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
              className="h-6 w-6 "
              fill="none"
              stroke="white"
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
        <div className="hidden lg:block">{navList}</div>
      </div>
      <MobileNav open={openNav} className="rounded-full lg:hidden">
        <div className="flex justify-end  py-5 rounded-full">{navList}</div>
      </MobileNav>
    </nav>
  );
}
