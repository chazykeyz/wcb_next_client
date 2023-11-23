"use client";

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import KeyzText from "@/components/Keyz/text";
import { Roboto_Condensed, Bricolage_Grotesque } from "next/font/google";

const textFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "600"],
});

const Footer = () => {
  const year = new Date().getFullYear();
  const [isvisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  });
  return (
    <div className={textFont.className}>
      <footer
        style={{
          backgroundImage: `url(${"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_HGw5sET9G3F9sN72BCc70a-g3KbVfbqA7n106cZxFLwHk1FFra1S85SkhCTFuckBvRGW987Nr9GIexZxf7JRJ_hOJlAo0VNxvzw0gCZ_hELTxB9h53w2j-AVzFyz94gnrQCSso9RLWL4SExwQnT0noKZfRWqrJs76xP1rRPMfmTzrg_yGFMcDw4G/s16000/DSC05378.jpeg"})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        ref={componentRef}
        className="h-screen w-full flex flex-col justify-center relative "
      >
        <div className="absolute top-0 left-0 right-0 z-10"></div>
        <div className="h-screen w-full flex justify-center relative bg-black bg-opacity-80">
          <div className="w-full lg:max-w-[1000px] flex flex-col justify-center ">
            <div className="flex md:flex-row flex-col items-center w-full justify-between">
              <div className="md:text-6xl text-4xl float text-white text-left font-thin">
                <KeyzText
                  text="Number One"
                  state={isvisible}
                  scaleDownBounce={true}
                  style=" text-white/40"
                />

                <KeyzText
                  text="Music Label"
                  state={isvisible}
                  scaleDownBounce={true}
                  delay={300}
                  style="text-red-600"
                />

                <KeyzText
                  text="In Africa."
                  state={isvisible}
                  positionLeft={true}
                  delay={700}
                  bounce="-10px "
                />
              </div>
              <div className="flex flex-col md:items-end  items-center my-4 float">
                <Link
                  className="flex my-2 text-white text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
                  to="home"
                  duration={500}
                  smooth={true}
                  offset={-70}
                >
                  <div>HOME</div>
                </Link>
                <Link
                  className="flex my-2 text-white text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
                  to="about"
                  duration={500}
                  smooth={true}
                  offset={-70}
                >
                  <div>ABOUT</div>
                </Link>
                <Link
                  className="flex my-2 text-white text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
                  to="artist"
                  duration={500}
                  smooth={true}
                  offset={-70}
                >
                  <div>ARTIST</div>
                </Link>
                <Link
                  className="flex my-2 text-white text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
                  to="release"
                  duration={500}
                  smooth={true}
                  offset={-170}
                >
                  <div>RELEASE</div>
                </Link>
                <Link
                  className="flex my-2 text-white text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
                  to="services"
                  duration={500}
                  smooth={true}
                  offset={-170}
                >
                  <div>SERVICES</div>
                </Link>

                {/* <Link
                className="flex my-2 text-white text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
                to="blog"
                duration={500}
                smooth={true}
                offset={-70}
              >
                <div>BLOG</div>
              </Link> */}
              </div>
            </div>
          </div>
          <div className=" w-full absolute bottom-0 float flex flex-col items-center">
            <div className="flex justify-center items-center ">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/OfficialWcbWasafi/"
                className="w-10 h-10 mx-2 rounded-full bg-white bg-opacity-20 hover:bg-red-600 text-white flex justify-center items-center"
              >
                <BsFacebook size={22} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/wcb_wasafi/"
                className="w-10 h-10 mx-2 rounded-full bg-white bg-opacity-20 hover:bg-red-600 text-white flex justify-center items-center"
              >
                <AiFillInstagram size={22} />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/Wcbwasafi_?t=Rjfky1NnhPmczekA-EFCdg&s=09"
                className="w-10 h-10 mx-2 rounded-full bg-white bg-opacity-20 hover:bg-red-600 text-white flex justify-center items-center"
              >
                <BsTwitter size={22} />
              </a>
            </div>
            <div className="text-gray-300 text-sm my-4 hover:text-red-400">
              <a
                href="mailto:music@wcbwasafi.com"
                rel="noreferrer"
                target="_blank"
                className=" text-sm"
              >
                <KeyzText
                  text={`© wcbwasafi  Copyright ${year}.`}
                  state={isvisible}
                  scaleDownBounce={true}
                  delay={300}
                  bounce="-10px "
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
