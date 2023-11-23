"use client";
import React, { useState, useEffect, useRef } from "react";
import KeyzText from "./Keyz/text";
import { ObserverFunc } from "./Keyz/observer";

const About = ({ font }) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    ObserverFunc([
      {
        state: setTitleVisible,
        ref: titleRef,
        threshold: 0.1,
      },
    ]);
  }, [setTitleVisible, titleRef]);

  return (
    <div
      className="lg:pb-24 w-full pb-20 bg-black flex flex-col items-center justify-center relative"
      id="about"
      ref={titleRef}
    >
      <div className="lg:w-3/4 2xl:w-2/4 w-full text-white text-center float ">
        <div className={font.className}>
          <div className="w-full flex justify-center gap-x-2  md:text-5xl text-3xl py-8 text-white">
            <KeyzText
              text="We"
              state={titleVisible}
              style="font-medium"
              scaleDownBounce={true}
            />
            <KeyzText
              text="Love"
              state={titleVisible}
              style="text-red-500 font-medium"
              delay={100}
              scaleDownBounce={true}
            />
            <KeyzText
              text="Music"
              state={titleVisible}
              delay={200}
              style="font-medium"
              scaleDownBounce={true}
            />
          </div>
        </div>
        <div className="lg:text-xl text-lg py-4 text-gray-400 md:px-0 px-2">
          WCB Wasafi is Pioneering the future of African Music with creativity
          and imagination
        </div>

        <br />
        <div align="justify" className="font-thin text-white/70 mx-4">
          <div>
            Wasafi Classic Baby (widely referred by its short form,{" "}
            <b className="font-black text-white">&quot;WCB&quot;</b>; also,
            sometimes referred to as WCB Wasafi) is a Tanzanian-based record
            label founded by{" "}
            <b className="font-black text-white">Diamond Platnumz</b>.
            Officially registered on February 02, 2016, the label was launched
            and signed four artists who have successfully won and beyond Africa.
            The signed artists where
            <b className="font-black text-white">
              Harmonize, Queen Darleen, Rayvanny
            </b>{" "}
            and <b className="font-black text-white">Rich Mavoko</b>
          </div>
          <div>
            On May 24, 2017 WCB Wasafi revealed another new artist “Lava Lava”.
            On August 11, 2018 WCB Wasafi agreed to part ways with Rich Mavoko
            and was officially out of the WCB Wasafi label who established his
            own label and management company.
          </div>

          <div>
            On August 22, 2019 Harmonize & WCB Wasafi agreed to terminate his
            contract and established his own label and recruited new management.
          </div>

          <div>
            On April 08, 2020 WCB Wasafi unveiled a new female artist{" "}
            <b className="font-black text-white">Zuchu</b>. Some of these
            artists under WCB Wasafi have gone winning and being nominated on
            different awards like{" "}
            <b className="font-black text-white">
              BET, MTV EMA Awards, AFRIMA, SOUNDCITY, HIPIPO, AFRIMMA
            </b>{" "}
            and <b className="font-black text-white">AEA Awards</b> on different
            categories
          </div>

          <div>
            WCB Wasafi owns a successful studio and its producers have being
            nominated on different awards as Best Producer of the year.
          </div>
        </div>
        {/* <div className="flex justify-center mt-4 group relative" ref={titleRef}>
          <Link href="/about">
            <KeyzButton
              feature="borderAnimate"
              text={
                <KeyzText
                  text="DISCOVER MORE"
                  state={buttonVisible}
                  scaleDownBounce={true}
                />
              }
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default About;
