"use client";

import React, { useEffect, useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-scroll";
import { Roboto_Condensed, Bricolage_Grotesque } from "next/font/google";

const titleFont = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "900"],
});
const textFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300"],
});

const Header = () => {
  const [navScroll, setNavScroll] = useState(true);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY <= 0) {
        setNavScroll(true);
      } else {
        setNavScroll(true);
      }
    };
  }, []);
  React.useEffect(() => {
    if (expand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [expand]);

  return (
    <div className={textFont.className}>
      <header
        className={`w-screen border-gray-600 border-t fixed top-0 py-2 z-10 backdrop-filter ${
          navScroll && "backdrop-blur"
        } flex sm:justify-start md:justify-between `}
      >
        <Link
          className=" px-2  cursor-pointer"
          to="home"
          duration={500}
          smooth={true}
          offset={-70}
          onClick={() => setExpand(false)}
        >
          <Image
            src="/logo.png"
            alt="logo"
            className="w-36 "
            width={36}
            height={36}
          />
        </Link>

        {/* opening navigation button */}
        {!expand && (
          <div
            className=" sm:hidden cursor-pointer  absolute right-0 text-white mx-4"
            onClick={() => {
              setExpand(true);
            }}
          >
            <CgMenuRightAlt size={27} />
          </div>
        )}
        {/* opening navigation button */}

        {/* mobile navigations */}
        <div
          className={
            expand
              ? "flex flex-col transition-all duration-500 sm:hidden m-0 w-screen text-xl overflow-hidden h-screen items-center justify-center absolute top-0  bg-red-600  text-black"
              : "h-0 flex overflow-hidden bg-black bottom-0 transition-all duration-500 w-screen m-0 absolute top-0 delay-200"
          }
        >
          <div
            className={
              expand
                ? "flex flex-col transition-all duration-500 sm:hidden m-0 w-screen delay-200 text-xl overflow-hidden h-screen items-center justify-center absolute top-0  bg-white text-black"
                : "h-0 overflow-hidden bg-black bottom-0 transition-all duration-500 w-screen m-0 absolute top-0"
            }
          ></div>
          <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center">
            <div
              className="py-2 cursor-pointer mt-0 absolute top-0 right-4"
              onClick={() => {
                setExpand(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  expand
                    ? "h-10 w-10 rotate-0 font-thin transition-all duration-500 delay-200"
                    : "h-0 w-10 rotate-90"
                }
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
            <div className="p-10">
              <Link
                className="flex text-3xl my-2 group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
                to="home"
                duration={500}
                smooth={true}
                offset={-70}
                onClick={() => setExpand(false)}
              >
                <div
                  className={
                    expand
                      ? "  transition-all duration-500 delay-200 h-8 overflow-hidden"
                      : " block overflow-hidden"
                  }
                >
                  <div
                    className={
                      expand
                        ? "h-8 transition-all duration-500 translate-y-0 delay-200 overflow-hidden"
                        : "h-8 overflow-hidden -translate-y-10 "
                    }
                  >
                    HOME
                  </div>
                </div>
              </Link>
              <Link
                className="flex text-3xl my-2 group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
                to="about"
                duration={500}
                smooth={true}
                offset={-70}
                onClick={() => setExpand(false)}
              >
                <div
                  className={
                    expand
                      ? "  transition-all duration-500 delay-[400ms] h-8 overflow-hidden"
                      : " block  overflow-hidden"
                  }
                >
                  <div
                    className={
                      expand
                        ? "h-8 transition-all duration-500 translate-y-0 delay-[400ms] overflow-hidden"
                        : "h-8 overflow-hidden -translate-y-10 "
                    }
                  >
                    ABOUT
                  </div>
                </div>
              </Link>
              <Link
                className="flex text-3xl my-2 group px-2 flex-col cursor-pointer group hover:text-red-500 h-10"
                to="artist"
                duration={500}
                smooth={true}
                offset={-70}
                onClick={() => setExpand(false)}
              >
                <div
                  className={
                    expand
                      ? "  transition-all duration-500 delay-[600ms]  h-8 overflow-hidden"
                      : " block  overflow-hidden"
                  }
                >
                  <div
                    className={
                      expand
                        ? "h-8 transition-all duration-500 translate-y-0 delay-[600ms] overflow-hidden"
                        : "h-8 overflow-hidden -translate-y-10 "
                    }
                  >
                    ARTIST
                  </div>
                </div>
              </Link>

              <Link
                className="flex text-3xl my-2 group px-2 flex-col cursor-pointer group hover:text-red-500 h-10"
                to="release"
                duration={500}
                smooth={true}
                offset={-70}
                onClick={() => setExpand(false)}
              >
                <div
                  className={
                    expand
                      ? "  transition-all duration-500 delay-[1000ms] h-8 overflow-hidden"
                      : " block  overflow-hidden"
                  }
                >
                  <div
                    className={
                      expand
                        ? "h-10 transition-all duration-500 translate-y-0 delay-[1000ms] overflow-hidden"
                        : "h-0 overflow-hidden -translate-y-12 "
                    }
                  >
                    RELEASE
                  </div>
                </div>
              </Link>
              <Link
                className="flex text-3xl my-2 group px-2 flex-col cursor-pointer group hover:text-red-500 h-10"
                to="services"
                duration={500}
                smooth={true}
                offset={-70}
                onClick={() => setExpand(false)}
              >
                <div
                  className={
                    expand
                      ? "  transition-all duration-500 delay-[1000ms] h-8 overflow-hidden"
                      : " block  overflow-hidden"
                  }
                >
                  <div
                    className={
                      expand
                        ? "h-10 transition-all duration-500 translate-y-0 delay-[1000ms] overflow-hidden"
                        : "h-0 overflow-hidden -translate-y-12 "
                    }
                  >
                    SERVICES
                  </div>
                </div>
              </Link>

              {/* <Link
              className="flex text-3xl my-2 group px-2 flex-col cursor-pointer group hover:text-red-500 h-10"
              to="tour"
              duration={500}
              smooth={true}
              offset={-70}
              onClick={() => setExpand(false)}
            >
              <div
                className={
                  expand
                    ? "  transition-all duration-500 delay-[1000ms] h-8 overflow-hidden"
                    : " block  overflow-hidden"
                }
              >
                <div
                  className={
                    expand
                      ? "h-10 transition-all duration-500 translate-y-0 delay-[1000ms] overflow-hidden"
                      : "h-0 overflow-hidden -translate-y-12 "
                  }
                >
                  TOUR & EVENTS
                </div>
              </div>
            </Link>

            <Link
              className="flex text-3xl my-2 group px-2 flex-col cursor-pointer group hover:text-red-500 h-10"
              to="blog"
              duration={500}
              smooth={true}
              offset={-170}
              onClick={() => setExpand(false)}
            >
              <div
                className={
                  expand
                    ? "  transition-all duration-500 delay-[800ms] h-8 overflow-hidden"
                    : " block  overflow-hidden"
                }
              >
                <div
                  className={
                    expand
                      ? "h-8 transition-all duration-500 translate-y-0 delay-[1000ms] overflow-hidden"
                      : "h-8 overflow-hidden -translate-y-10 "
                  }
                >
                  BLOG
                </div>
              </div>
            </Link> */}
            </div>
          </div>
        </div>
        {/* mobile navigations */}

        {/* desktop navigations */}
        <div
          className={
            navScroll
              ? " hidden sm:block text-white px-2"
              : " hidden sm:block tex-black px-2 "
          }
        >
          <div className="flex items-center mx-4">
            <Link
              className="flex text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
              to="home"
              duration={500}
              smooth={true}
              offset={-70}
              // onClick={() => setExpanded(false)}
            >
              <div className="flex group-hover:font-black">HOME</div>
              <div
                className="bg-gray-200 w-0 transition-all group-hover:w-full"
                style={{
                  height: 2,
                }}
              />
            </Link>

            <Link
              className="flex text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
              to="about"
              duration={500}
              smooth={true}
              offset={-70}
              // onClick={() => setExpanded(false)}
            >
              <div className="flex group-hover:font-black">ABOUT</div>
              <div
                className="bg-gray-200 w-0 transition-all group-hover:w-full"
                style={{
                  height: 2,
                }}
              />
            </Link>

            <Link
              className="flex text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
              to="artist"
              duration={500}
              smooth={true}
              offset={0}
              // onClick={() => setExpanded(false)}
            >
              <div className="flex group-hover:font-black">ARTIST</div>
              <div
                className="bg-gray-200 w-0 transition-all group-hover:w-full"
                style={{
                  height: 2,
                }}
              />
            </Link>

            <Link
              className="flex text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
              to="release"
              duration={500}
              smooth={true}
              offset={0}
              // onClick={() => setExpanded(false)}
            >
              <div className="flex group-hover:font-black">RELEASE</div>
              <div
                className="bg-gray-200 w-0 transition-all group-hover:w-full"
                style={{
                  height: 2,
                }}
              />
            </Link>
            <Link
              className="flex text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
              to="services"
              duration={500}
              smooth={true}
              offset={0}
              // onClick={() => setExpanded(false)}
            >
              <div className="flex group-hover:font-black">SERVICES</div>
              <div
                className="bg-gray-200 w-0 transition-all group-hover:w-full"
                style={{
                  height: 2,
                }}
              />
            </Link>

            {/* <Link
            className="flex text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
            to="tour"
            duration={500}
            smooth={true}
            offset={0}
            // onClick={() => setExpanded(false)}
          >
            <div className="flex group-hover:font-black">TOUR & EVENTS</div>
            <div
              className="bg-gray-200 w-0 transition-all group-hover:w-full"
              style={{
                height: 2,
              }}
            />
          </Link>

          <Link
            className="flex text-sm group px-2 flex-col cursor-pointer group hover:text-red-500 hover:"
            to="blog"
            duration={500}
            smooth={true}
            offset={0}
            // onClick={() => setExpanded(false)}
          >
            <div className="flex group-hover:font-black mr-3">BLOG</div>
            <div
              className="bg-gray-200 w-0 transition-all group-hover:w-full"
              style={{
                height: 2,
              }}
            />
          </Link> */}
          </div>
        </div>
        {/* desktop navigations */}
      </header>
    </div>
  );
};

export default Header;
