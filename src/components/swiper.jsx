"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { IoMusicalNote } from "react-icons/io5";
import { AiOutlineYoutube } from "react-icons/ai";

import Image from "next/image";

const animation = { duration: 20000, easing: (t) => t };

const SwiperSlider = ({ ReleaseData }) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [modelItem, setModelItem] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div>
      <div>
        {isOpen && (
          <Player
            setIsOpen={setIsOpen}
            modelItem={modelItem}
            setModelItem={setModelItem}
          />
        )}
      </div>
      {domLoaded && (
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="h-[250px]"
        >
          {ReleaseData.map((item, index) => (
            <SwiperSlide className=" " key={index}>
              <div className=" group flex flex-col  text-gray-300 relative overflow-hidden rounded-xl ">
                <div>
                  <Image
                    alt="release_thumbnail"
                    src={item.thumbnail}
                    priority
                    width={200}
                    height={250} // use normal <img> attributes as props
                    className="object-cover cursor-pointer w-full h-[200px] bg-white/20"
                  />
                </div>

                <div className="flex group w-full items-center  backdrop-blur bg-black bg-opacity-20 flex-col text-left text-xs h-10 group-hover:h-full transition-all duration-300 absolute bottom-0">
                  <div className=" cursor-pointer flex items-center py-1 text-white text-sm my-0">
                    <div className="m-1 rounded-full bg-white bg-opacity-30 p-1">
                      <IoMusicalNote />
                    </div>

                    {item.song_name}
                  </div>
                  <div className="hidden group-hover:flex flex-col h-full justify-center">
                    <div className="w-full flex justify-center ">
                      <div
                        className="flex items-center hover:bg-red-600 transition-all duration-300 hover:scale-125 bg-white bg-opacity-20 cursor-pointer  my-1 rounded-xl p-2 text-white"
                        onClick={() => {
                          setIsOpen(true);
                          setModelItem(item);
                        }}
                      >
                        <AiOutlineYoutube className="mx-1 text-lg" />
                        Watch
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default SwiperSlider;

const Player = ({ setIsOpen, modelItem, setModelItem }) => {
  return (
    <div className="justify-center items-center backdrop-blur flex fixed inset-0 z-50">
      <div className="lg:max-w-[1000px] w-full ">
        <div
          className=" absolute bg-white bg-opacity-30 rounded-xl p-2 text-white right-2 top-2 hover:bg-red-500 cursor-pointer"
          onClick={() => {
            setIsOpen(false);
            setModelItem({});
          }}
        >
          Close
        </div>

        {/* YOUTUBE */}

        <iframe
          src={modelItem.youtube_link}
          width="100%"
          height="520px"
          title="Youtube"
          allowtransparency="true"
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};
