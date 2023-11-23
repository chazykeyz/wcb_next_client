import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[800px] bg-black  w-full relative" id="home">
      <div
        className=" absolute h-[800px] w-full flex justify-center items-center flex-col"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0), black)",
        }}
      >
        <div className="float">
          <Image src="/big_logo.png" alt="big logo" width={400} height={100} />
        </div>
        <div className="float text-white text-xl md:w-2/3 px-4 w-full md:px-0 text-center ">
          Filling Africa and the world with sounds that inspire, motivate, and
          communicate Africanism through the power of music and arts...
        </div>
      </div>
      <div
        className="-mt-2 -ml-1 h-[800px] w-full overflow-hidden "
        style={{
          backgroundImage: `url(${"https://blogger.googleusercontent.com/img/a/AVvXsEhXP-nRAnY3zNXXSn1dD5T_6lrwM-aF88VEge_UHN9w3xXc7NQJ2lzWNKWa1QRL5FtYHkQqTEXK2Ez5o8b7nEin9cxEsZiSuqsAD52WT1X4xnzUseVuxs3F_6MhAf4vvBOf-rTNAhp02h-VkbOL0-QOJpqRNNnrx1j5mUfkQHrBqz65urIwLtgo83FY=s16000"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <iframe
          src="https://fast.wistia.net/embed/iframe/wsvk1p1djr?videoFoam=true"
          title="website clip Video"
          allow="autoplay; fullscreen"
          allowtransparency="true"
          className=" lg:hidden h-[800px]"
          style={{
            width: "400vw",
          }}
        />
        <iframe
          src="https://fast.wistia.net/embed/iframe/wsvk1p1djr?videoFoam=true"
          title="website clip Video"
          allow="autoplay; fullscreen"
          allowtransparency="true"
          className="hidden lg:block h-[800px] w-[1500px] 2xl:w-[2600px]"
        />
      </div>
    </div>
  );
};

export default Hero;
