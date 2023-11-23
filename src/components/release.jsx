"use client";
import React, { useEffect, useState, useRef } from "react";
import SwiperSlider from "./swiper";
import { ObserverFunc } from "./Keyz/observer";
import KeyzText from "./Keyz/text";

const MyRelease = ({ ReleaseData, font }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    ObserverFunc([{ state: setIsVisible, ref: componentRef }]);
  }, [setIsVisible, componentRef]);
  return (
    <div
      className=" w-full flex bg-white/10  flex-col items-center py-10  relative overflow-hidden"
      id="release"
      ref={componentRef}
    >
      <div className="w-full lg:max-w-[1024px] flex flex-col items-center">
        <div className={font.className}>
          <div className=" w-full flex justify-center gap-x-2  md:text-5xl text-3xl py-8 text-white">
            <KeyzText
              text="Latest"
              state={isVisible}
              style="font-medium"
              scaleDownBounce={true}
            />
            <KeyzText
              text="Release"
              state={isVisible}
              style="text-red-500 font-medium"
              delay={200}
              scaleDownBounce={true}
            />
          </div>
        </div>
        <div className="lg:max-w-[1000px] w-full ">
          <SwiperSlider ReleaseData={ReleaseData} />
        </div>
      </div>
    </div>
  );
};

export default MyRelease;
