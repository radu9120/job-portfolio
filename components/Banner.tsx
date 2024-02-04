"use client";

import React from "react";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
const Banner = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20] ">
      <div className="flex flex-col  justify-center  text-center">
        <div className="justify-center flex ">
          <Image src="/Me.png" height={300} width={300} alt="Dumitru Radu" />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer hover:-translate-y-1  transition  hover:scale-110 transition ease-in-out hover:text-transparent bg-clip-text  hover:bg-gradient-to-r from-teal-700 to-emerald-400 z-[1] tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Dumitru Radu!
        </div>
        <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
          Code Relax{" "}
          <span className="text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-green-400 to-teal-800">
            Repeat
          </span>{" "}
          💪🏼
        </p>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          Passionate full-stack developer with more than 2 years of experience.
          I enjoy building amazing websites. My focus is React (Next.js).
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:chirca@dumitruradu.co.uk")}
            className=" z-[1]     padding-20  hover:bg-white rounded-3xl  text-white font-semibold hover:text-black py-3 px-10  border-[0.1px] border-white hover:border-transparent "
          >
            Contact Me
          </button>
          <a
            className="group ml-8 bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white"
            href="/CV.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
