import Link from "next/link";
import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <footer className="p-10">
      <div className="flex flex-row justify-between lg:justify-center border-t-white border-t-2">
        <div></div>
        <div className="flex flew-row gap-3 py-10 ">
          <Link href="https://github.com/montenegroPatrick" alt="github">
            <BsGithub className="text-white lg:w-10 lg:h-10" />
          </Link>
          <Link
            href="https://www.facebook.com/patrick.montenegro2b/"
            alt="facebook"
          >
            <BsFacebook className="text-white lg:w-10 lg:h-10" />
          </Link>
          <Link href="https://www.linkedin.com/feed/" alt="linkedIn">
            <BsLinkedin className="text-white lg:w-10 lg:h-10" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
