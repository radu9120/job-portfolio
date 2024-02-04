import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-semi-bold pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          As an enthusiastic Web Developer specializing in Next.js, I find joy
          in the delicate interplay between precision and innovation. Currently
          engrossed in the ever-evolving landscape of digital solutions, my
          expertise lies at the intersection of Next.js and modern web
          development. Here, I skillfully fuse cutting-edge technology with
          creative solutions, crafting seamless, high-performance websites that
          elevate user experiences and set new standards in the industry. My
          core stack is React, Next.js, Node.js, and MongoDB. I am also familiar
          with TypeScript and Prisma.
          <br />
          <br />
          Whenever I&apos;m not coding, I make it a point to explore the
          boundless beauty of nature or sweat it out at the gym, striving to
          become the best version of myself.🏆
        </p>
      </div>
    </section>
  );
};

export default About;
