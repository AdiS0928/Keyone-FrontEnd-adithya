"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex flex-col w-full items-center justify-center min-h-[100vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/images/home/bg-image.png')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-end justify-center text-center h-full w-[95vw] max-w-[1400px]">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center w-full md:w-1/2 px-4 py-8 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-6xl mb-4">
            List Your Property With Key One Holiday Homes
          </h1>
          <p className="text-lg md:text-xl">
            Maximize your investment and let our dedicated team at Key One Holiday Homes handle the details, ensuring a seamless renting experience for both you and your guests.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-end justify-end w-full md:w-1/2">
          <Image
            alt="Award Image"
            src="/theme/brand/award.png"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
