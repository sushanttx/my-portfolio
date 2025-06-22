"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const handleDownloadResume = () => {
  const fileUrl = "Sushant_Langhi_Resume.pdf"; // Replace with your resume file path
  const fileName = "Sushant_Langhi_Resume.pdf"; // Desired download name

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  link.click();
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.0 } // 0% of the section must be visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section ref={heroRef}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-500 to-slate-900">
              Hello, I&apos;m{" "}
            </span>
            <br />
            {isVisible && (
              <TypeAnimation
                sequence={[
                  "Sushant!",
                  1000,
                  "A Web Developer",
                  1000,
                  "A Cloud Engineer",
                  1000,
                  "A Tech Enthusiast",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            )}
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-10">
            Aspiring Software Engineer with proficiency in Java and Full-Stack Web application development with an interest in cloud computing platforms and machine learning. Actively, practically, and theoretically gaining a better understanding of computer operations.
          </p>
          <div>
            <button
              className="font-bold px-8 py-4 rounded-full mr-4 bg-gradient-to-br from-cyan-700 via-cyan-900 to-slate-900 hover:opacity-50 text-white w-full sm:w-fit"
              onClick={() =>
                document.getElementById("contacts").scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </button>
            <button
              onClick={() => handleDownloadResume()}
              className="font-bold px-1 py-1 rounded-full bg-gradient-to-br from-cyan-700 via-cyan-900 to-slate-900 text-white mt-3 w-full sm:w-fit"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 opacity-90 rounded-full px-7 py-3">
                Download Resume
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-gradient-to-b w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/mypic-min.png"
              alt="my_pic"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
