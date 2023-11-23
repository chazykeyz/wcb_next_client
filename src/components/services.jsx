"use client";
import React, { useEffect, useRef, useState } from "react";
import KeyzText from "./Keyz/text";
import { ObserverFunc } from "./Keyz/observer";

const Services = ({ font }) => {
  const [activeIndex, setActiveIndex] = useState(1);
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

  const Accordion = ({
    title,
    content,
    index,
    activeIndex,
    setActiveIndex,
  }) => {
    const handleSetIndex = (index) =>
      activeIndex !== index ? setActiveIndex(index) : setActiveIndex(0);
    return (
      <div
        className="flex flex-col  w-full rounded-xl border border-white border-opacity-20  overflow-hidden my-2"
        // data-aos="zoom-out"
        // data-aos-delay={100 * index}
      >
        <div
          className={`p-4 w-full bg-white bg-opacity-10 border-l-8
           border-red-500 cursor-pointer flex justify-between items-center`}
          onClick={() => handleSetIndex(index)}
          role="button"
        >
          <div className=" text-base text-gray-400">{title}</div>

          <div className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex justify-center items-center text-4xl  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transition-all delay-150 duration-300 ease-in-out transform  ${
                activeIndex === index ? "rotate-0" : "rotate-45"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        {activeIndex === index && (
          <div className="p-4 text-gray-400 w-full bg-white bg-opacity-10 text-base text-left border-t border-black">
            {content}
          </div>
        )}
      </div>
    );
  };
  return (
    <div
      className=" w-full flex justify-center items-center pb-10"
      id="services"
      ref={componentRef}
    >
      <div className="  flex flex-col items-center">
        <div className={font.className}>
          <div className="   w-full flex justify-center gap-x-2  md:text-5xl text-3xl py-8 text-white">
            <KeyzText
              text="Our"
              state={isVisible}
              style="font-medium"
              scaleDownBounce={true}
            />
            <KeyzText
              text="Services"
              state={isVisible}
              style="text-red-500 font-medium"
              delay={100}
              scaleDownBounce={true}
            />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="w-full px-4 lg:px-0 lg:w-[1000px]">
            <Accordion
              index={1}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              title="Music Video Production and Filming"
              content={
                <div>
                  As the number one video production company in East Africa ZOOM
                  Extra is comprised of talented crew with a wide array of gear
                  at their disposal. Whether it’s a music video, dance video,
                  documentary or short film Our team is capable of taking an
                  idea and transforming it into something absolutely inspiring..
                  Email Us!
                </div>
              }
            />
            <Accordion
              index={2}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              title="Events planning"
              content={
                <div>
                  Charged with creating experiences and bringing visions to
                  life. In addition to sourcing and booking great talent, WCB
                  Wasafi specializes in coordinating performers, musicians, and
                  other live entertainers at your event. We’ll take care of
                  providing parking instructions, playlists, payments, and any
                  other issues that arise on the day of your event. Email Us!
                </div>
              }
            />
            <Accordion
              index={3}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              title="Performance and Appearances"
              content={
                <div>
                  Having won numerous awards and filling up different stadiums
                  locally and international, either it’s an Appearance or Show
                  Wasafi artist will surely turn your event to a lifetime memory
                  with their creative and unique performances. Email Us!
                </div>
              }
            />
            <Accordion
              index={4}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              title="Music Recording"
              content={
                <div>
                  Finding, developing and retaining recording artists, marketing
                  and promoting their recorded music in all formats and
                  platforms. Email Us!
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
