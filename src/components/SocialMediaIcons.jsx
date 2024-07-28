import React from "react";
import { FaSquareGithub } from "react-icons/fa6";

function SocialMediaIcons() {
  return (
    <div className="flex justify-center items-center md:justify-start my-5 sm:my-10 gap-7">
      <a
        className="hover:opacity-50  transition duration-500 border p-1 border-red rounded-md"
        href="https://www.linkedin.com/feed/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-[33px] bg-white rounded-full"
          src="../../assets/link.png"
          alt=""
        />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 border p-1 border-red rounded-md"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-[33px] bg-white rounded-full"
          src="../../assets/git1.png"
          alt=""
        />
      </a>

      <a
        className="hover:opacity-50 transition duration-500 border p-1 border-red rounded-md"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../../assets/facebook.png" alt="" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 border p-1 border-red rounded-md"
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-[33px] rounded-full"
          src="../../assets/inst.png"
          alt=""
        />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
