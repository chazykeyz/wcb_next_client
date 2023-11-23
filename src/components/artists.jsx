"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import KeyzText from "./Keyz/text";
import { ObserverFunc } from "./Keyz/observer";

const Artist = ({ artists, font }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

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
      className=" w-full bg-white/10 flex-wrap flex justify-center py-10"
      id="artist"
      ref={componentRef}
    >
      <div className={font.className}>
        <div className="w-full flex justify-center gap-x-2  md:text-5xl text-3xl py-8 text-white">
          <KeyzText
            text="Our"
            state={isVisible}
            style="font-medium"
            scaleDownBounce={true}
          />
          <KeyzText
            text="Music"
            state={isVisible}
            style="text-red-500 font-medium"
            delay={100}
            scaleDownBounce={true}
          />
          <KeyzText
            text="Artists"
            state={isVisible}
            delay={200}
            style="font-medium"
            scaleDownBounce={true}
          />
        </div>
      </div>
      <div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-2 w-3/4 2xl:w-2/4">
        {artists.map((item, index) => (
          <MyCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Artist;

const MyCard = ({ item }) => {
  const [nameAnime, setNameAnime] = useState(false);
  const nameRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(nameRef.current);
    setTimeout(() => {
      nameRef.current = setNameAnime(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(nameRef.current);
    nameRef.current = setNameAnime(false);
  };

  return (
    <div
      // to={`artist/${item.slug}`}
      // href="/"
      className="relative group float"
      key={item.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={nameRef}
    >
      <div className="overflow-hidden ">
        <Image
          src={item.thumbnail}
          alt="artist_images"
          width={250}
          height={300}
          className="group-hover:scale-110 transition duration-700 w-[300px]"
        />
      </div>
      <div
        className=" absolute group  w-full top-0 flex flex-col justify-end items-start"
        style={{
          height: "100%",
        }}
      >
        <div className="p-5 flex flex-col items-start">
          <div className="relative text-white ">
            <div className=" px-4  text-white/0 overflow-hidden whitespace-nowrap w-full h-[40px]  ">
              {item.artist_name}
            </div>

            <div className="bg-white px-4 text-white/0 overflow-hidden whitespace-nowrap w-full h-0 group-hover:h-[40px]  transition-all duration-300  top-0 absolute">
              <KeyzText
                text={item.artist_name}
                scaleDownBounce={true}
                state={nameAnime}
              />
            </div>
            <div className="bg-black px-4 text-white/0 overflow-hidden whitespace-nowrap w-full h-0 group-hover:h-[40px]  transition-all duration-[600ms]  top-0 absolute">
              <KeyzText
                text={item.artist_name}
                scaleDownBounce={true}
                state={nameAnime}
              />
            </div>
            <div className="bg-red-600 px-4 flex items-center overflow-hidden whitespace-nowrap w-full h-0 group-hover:h-[40px]  transition-all duration-[900ms] delay-300 top-0 absolute">
              <KeyzText
                text={item.artist_name}
                scaleDownBounce={true}
                state={nameAnime}
              />
            </div>
          </div>

          <div className="relative text-left  my-[1px] ">
            <div className="bg-white py-2 px-0  text-white overflow-hidden whitespace-nowrap group-hover:w-full group-hover:px-4 w-0 transition-all duration-300 delay-200">
              Artist
            </div>
            <div className="bg-black text-white  py-2 overflow-hidden  top-0 absolute whitespace-nowrap group-hover:w-full group-hover:px-4 w-0 transition-all duration-300 delay-500">
              <KeyzText text="Artist" positionLeft={true} state={nameAnime} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
