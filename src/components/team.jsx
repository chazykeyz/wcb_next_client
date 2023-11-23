"use client";
import React, { useState, useRef, useEffect } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import KeyzText from "./Keyz/text";
import { ObserverFunc } from "./Keyz/observer";

const Management = ({ managers, font }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // observing element
  useEffect(() => {
    ObserverFunc([
      {
        state: setIsVisible,
        ref: componentRef,
      },
    ]);
  }, [componentRef, setIsVisible]);

  return (
    <div
      className="w-full bg-black  flex flex-col items-center py-10 "
      ref={componentRef}
    >
      <div className={font.className}>
        <div className=" w-full flex justify-center gap-x-2 md:text-5xl text-3xl py-8 text-white">
          <KeyzText
            text="Our"
            state={isVisible}
            style="font-medium"
            scaleDownBounce={true}
          />
          <KeyzText
            text="Team"
            state={isVisible}
            style="text-red-500 font-medium"
            delay={100}
            scaleDownBounce={true}
          />
        </div>
      </div>
      <div className=" flex-wrap  gap-2 w-full lg:min-w-[1000px] hidden lg:flex justify-center">
        {managers.map((item, index) => (
          <>
            <MyCard item={item} key={index} />
          </>
        ))}
      </div>
      <div className="lg:hidden flex  gap-2 w-full lg:min-w-[1000px]  justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {managers.map((item, index) => (
            <MobileCard item={item} isVisible={isVisible} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;

const MyCard = ({ item }) => {
  const [animateTitle, setAnimateTitle] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setAnimateTitle(true);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setAnimateTitle(false);
  };
  return (
    <Link
      href="/"
      className="relative group w-[230px]  flex-col items-center hidden lg:flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full group-hover:border border-white/20 overflow-hidden filter group-hover:grayscale group-hover:w-[160px] group-hover:h-[160px] group-hover:rounded-full transition-all duration-[700ms]">
        <Image
          src={item.thumbnail}
          alt="manager_image"
          width={500}
          height={540}
          className=" w-full h-full object-cover bg-white/10"
        />
      </div>

      <div className="w-full flex justify-center mt-2">
        <div className=" text-white flex flex-col gap-y-2 items-center">
          <div className="overflow-hidden    h-[20px]">
            <div className=" flex items-center gap-x-1">
              <BsPatchCheckFill className="text-white/20 translate-y-[30px]  group-hover:translate-y-0  transition-all duration-300 delay-100" />

              <KeyzText
                text={item.name}
                scaleUpBounce={true}
                state={animateTitle}
                style="capitalize"
              />
            </div>
          </div>

          <div className="overflow-hidden h-[30px]">
            <div className=" bg-red-500 px-2 py-1 translate-y-[30px] group-hover:translate-y-0   transition-all duration-300 delay-300">
              {item.title}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const MobileCard = ({ item, isVisible }) => {
  return (
    <Link href="/" className="relative lg:hidden   flex flex-col items-center">
      <div className=" border border-white/20 overflow-hidden filter grayscale w-[240px] h-[240px] rounded-full">
        <Image
          src={item.thumbnail}
          alt="manager_image"
          width={500}
          height={540}
          className=" w-full h-full object-cover bg-white/10"
        />
      </div>

      <div className="w-full flex justify-center mt-2">
        <div className=" text-white flex flex-col gap-y-2 items-center">
          <div className="overflow-hidden    h-[20px]">
            <div className=" flex items-center gap-x-1">
              <BsPatchCheckFill className="text-white/20 " />

              <KeyzText
                text={item.name}
                scaleUpBounce={true}
                state={isVisible}
                style="capitalize"
              />
            </div>
          </div>

          <div className="">
            <div className=" bg-red-500 px-2 py-1 ">{item.title}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
