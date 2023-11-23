"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import KeyzText from "./Keyz/text";
import { ObserverFunc } from "./Keyz/observer";

const Clients = ({ ClientData, font }) => {
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
      ref={componentRef}
      className=" w-full relative bg-gradient-to-t from-red-600/20 to-black flex justify-center  py-8 items-center "
      id="clients"
    >
      <div className="w-full lg:max-w-[1000px] flex flex-col items-center justify-center">
        <div className={font.className}>
          <div className="   w-full flex justify-center gap-x-2  md:text-5xl text-3xl py-8 text-white">
            <KeyzText
              text="Our"
              state={isVisible}
              style="font-medium"
              scaleDownBounce={true}
            />
            <KeyzText
              text="Clients"
              state={isVisible}
              style="text-red-500 font-medium"
              delay={100}
              scaleDownBounce={true}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6   gap-x-10 gap-y-5 justify-center ">
          {ClientData.map((element, index) => (
            <ClientContainer image={element.thumbnail} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;

const ClientContainer = ({ image, i }) => {
  return (
    <div className=" group  relative  h-[80px] lg:h-full">
      <Image
        alt="client_image"
        width={100}
        height={100}
        src={image}
        className=" h-full group-hover:scale-110 grayscale group-hover:grayscale-0 object-contain transition-all duration-500"
      />
    </div>
  );
};
