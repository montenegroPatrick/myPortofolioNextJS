import Link from "next/link";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <footer className="p-10 flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between lg:justify-center border-t-green-800/[0.5]">
        <div></div>
        <div className="flex flew-row gap-10 py-10 ">
          <Link href="https://github.com/montenegroPatrick" alt="github">
            <BsGithub className="text-green-900/[0.3] rounded-lg shadowBox dark:text-white/[0.3] hover:scale-150 duration-500 lg:w-5 lg:h-5" />
          </Link>
          <Link
            href="https://www.facebook.com/patrick.montenegro2b/"
            alt="facebook"
          >
            <BsFacebook className="text-green-900/[0.3] rounded-lg shadowBox dark:text-white/[0.3] hover:scale-150 duration-500 lg:w-5 lg:h-5" />
          </Link>
          <Link href="https://www.linkedin.com/feed/" alt="linkedIn">
            <BsLinkedin className="text-green-900/[0.3] rounded-lg shadowBox dark:text-white/[0.3] hover:scale-150 duration-500 lg:w-5 lg:h-5" />
          </Link>
        </div>
      </div>
      <p className=" text-xs underline dark:text-white text-green-900">
        2023 | by Patrick Montenegro | Bastia
      </p>
    </footer>
  );
}

export default Footer;
