"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="lg:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-400 to-transparent rounded-full lg:h-80 lg:w-80 h-60 w-60 z-0 blur-[10vw] absolute left-28  top-1/4 bg-none "></div>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "JOY",
                1000,
                "Web Developer",
                1000,
                "App Developer",
                1000,
                "Figma Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Assalamualikum, HI ! MY NAME IS OBAIDUL HAQUE JOY. I AM A FULL-STACK
            DEV
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-400 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://docs.google.com/document/d/1jAO3BA1ATuIFfYz7MYI8BfrsC6PeDdKKAABnn28_f-8/edit?usp=sharing"
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-400 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </a>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-br  p-10 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden flex justify-center items-center">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-400 to-transparent rounded-full lg:h-80 lg:w-80 h-[40vw] w-[500vw] -z-1 blur-lg "></div>
            <Image
              src="/images/my-avatar.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
