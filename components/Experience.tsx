import Link from "next/link";
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="z-20">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-semi-bold pb-5  bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl z-20 ">
        <div className="flex  flex-row justify-between pt-5">
          <div className="text-gray-300">
            <Link
              href="https://www.pengroup.com"
              className="font-semibold cursor-pointer hover:font-semi-bold hover:text-lg transition-all"
            >
              Planet Education Networks /
            </Link>{" "}
            Lead Web Developer
          </div>

          <p className="text-gray-300">January 2023 - PRESENT, London, UK</p>
        </div>
        <p className="text-gray-300 pt-5">
          I currently work as the Lead Web Developer, where I am responsible for
          end-to-end development, launch, and continuous refinement of
          PEN&lsquo;s websites. I have led efforts to guarantee exceptional
          functionality, optimal load times, and a top-tier user experience,
          ensuring website security and data integrity.
          <br />
          <br />
          My role also involves leading content lifecycle management,
          collaborating with cross-functional teams, and forging strong
          partnerships with the marketing team to implement effective digital
          campaigns. I aim to set new standards in digital user experience
          aligned with PEN&lsquo;s strategic goals by conducting comprehensive
          competitor analysis and injecting creativity and innovation into web
          development processes.
        </p>
        <div className="lg:flex-row flex flex-col">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next.js
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Tailwind CSS
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer   rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Prisma
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Node.js
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Figma
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
