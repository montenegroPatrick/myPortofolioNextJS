"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import Link from "next/link";
import next from "../../../public/next.svg";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const links = [
    {
      url: "/about",
      name: "about",
      id: "1",
    },
    {
      url: "/projets",
      name: "projets",
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
    <ul className="mb-4 mt-2 float-right text-right flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-right lg:gap-6 ">
      {links.map((link) => (
        <Typography
          key={link.id}
          as="li"
          variant="small"
          color="blue-gray"
          className="text-gray-50 font-body mr-5 hover:-translate-y-1 hover:scale-110 duration-100"
        >
          <Link href={link.url} className="mr-5 ">
            {link.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className=" fixed mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4  bg-black border-none">
      <div className="container mx-auto flex items-center justify-between text-gray-50">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <Avatar src={next} alt="avatar" />
        </Typography>
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
        <div className="container float-right text-right">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}
