"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Loading = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  return (
    <div
      className={`z-20 fixed top-0 left-0 right-0 overflow-hidden ${
        isVisible ? "h-[0vh]" : "h-[100vh]"
      }  transition-all duration-500 delay-700 `}
    >
      <div
        className={`${
          isVisible ? "h-[0vh]" : "h-[100vh]"
        } bg-white w-full transition-all duration-500 flex delay-500 justify-center items-center`}
      />
      <div
        className={`${
          isVisible ? "h-[0vh]" : "h-[100vh]"
        } bg-red-600 w-full transition-all absolute top-0  duration-300 delay-300 flex justify-center items-center`}
      />
      <div
        className={`${
          isVisible ? "h-[0vh]" : "h-[100vh]"
        } bg-black w-full absolute top-0  transition-all duration-500 overflow-hidden flex justify-center items-center`}
      >
        <div className="float w-[220px] overflow-hidden h-[300px]">
          <Image
            src="/big_logo.png"
            width={300}
            height={300}
            alt="logo image"
            className="w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
